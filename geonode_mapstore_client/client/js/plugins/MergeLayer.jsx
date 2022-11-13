import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import assign from 'object-assign';
import { get } from 'lodash';

import { createControlEnabledSelector } from '@mapstore/framework/selectors/controls';
import { setControlProperty } from "@mapstore/framework/actions/controls";
import { createSelector } from 'reselect';
import { Glyphicon } from 'react-bootstrap';
import Dialog from '@mapstore/framework/components/misc/Dialog';
import LayerSelector from './mergelayer/LayerSelector';
import {
    groupsSelector,
    layersSelector
} from '@mapstore/framework/selectors/layers';
import Message from '@mapstore/framework/components/I18N/Message';

// Actions
import {
    doMerge,
    setLayer1,
    setLayer2,
    toggleMergeLyrTool
} from './mergelayer/actions/mergelayer';

// Reducer
import { mergeLayerReducer } from './mergelayer/reducers/mergelayerReducer';

// Epics
import {
    doMergeEpic,
    mergeAsLayerEpic
} from './mergelayer/epics/mergelayerEpic';

createControlEnabledSelector("mergelyr");

const mergeLayerSelector = (state) => get(state, 'controls.mergelyr.enabled');
// เอา layer node แยกออกมาจาก layersGroups ด้วย groupsSelector
const layerNodesExtracter = (groups) => {
    const layerNode = [];
    groups.map(groupNode => {
        layerNode.push(...groupNode.nodes);
    });
    return layerNode;
};

const selector = (state) => {
    return {
        layerIndex1: state.mergelyr.layerIndex1,
        layerIndex2: state.mergelyr.layerIndex2,
        loading: state.mergelyr.loading,
        error: state.mergelyr.error,
        mergedLayer: state.mergelyr.mergedLayer
    };
};

class MergeLayerComponent extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        layersNode: PropTypes.array,
        layersGroups: PropTypes.array,
        layerIndex1: PropTypes.number,
        layerIndex2: PropTypes.number,
        loading: PropTypes.bool,
        error: PropTypes.string,

        onDoMerge: PropTypes.func,
        onChangeLayer1: PropTypes.func,
        onChangeLayer2: PropTypes.func,
        onReset: PropTypes.func
    }

    static defaultProps = {
        show: false,
        layersNode: [],
        layersGroups: [],
        layerIndex1: -1,
        layerIndex2: -1,
        loading: false,
        error: '',

        onDoMerge: () => { },
        onChangeLayer1: () => { },
        onChangeLayer2: () => { },
        onReset: () => { }
    }

    dialogStyle = {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '500px'
    };

    start = {
        x: (window.innerWidth - 600) * 0.5,
        y: (window.innerHeight - 100) * 0.5
    }

    onClose = () => {
        this.props.onClose(false);
    };

    onChangeLayer1 = (idx) => {
        this.props.onChangeLayer1(idx);
    };

    onChangeLayer2 = (idx) => {
        this.props.onChangeLayer2(idx);
    };

    onDoMerge = () => {
        this.props.onDoMerge(this.props.layersNode[this.props.layerIndex1], this.props.layersNode[this.props.layerIndex2]);
    };

    onReset = () => {
        this.props.onChangeLayer1(-1);
        this.props.onChangeLayer2(-1);
    };

    render() {
        return this.props.show ? (
            <Dialog Dialog id="measure-dialog" style={this?.dialogStyle} start={this?.start} >
                {/* เอาไว้ debug ดู layer ทั้งหมด */}
                {/* {console.log('ALL_LAYERS: ', this.props.allLayers)} */}
                <div key="header" role="header">
                    <Message msgId="mergeLayerPlugin.title" />
                    <button key="close" onClick={this.onClose} className="close">
                        <Glyphicon glyph="1-close" />
                    </button>
                </div>
                <div key="body" role="body">
                    <p>
                        <Message msgId="mergeLayerPlugin.layerLabel1" />
                    </p>
                    <LayerSelector
                        responses={this.props.layersNode}
                        index={this.props.layerIndex1}
                        setIndex={this.onChangeLayer1}
                    />
                    <br />
                    <p>
                        <Message msgId="mergeLayerPlugin.layerLabel2" />
                    </p>
                    <LayerSelector
                        responses={this.props.layersNode}
                        index={this.props.layerIndex2}
                        setIndex={this.onChangeLayer2}
                    />
                    <br />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "right"
                        }}
                    >
                        {this.props.loading ? (
                            <button
                                key="mergelayer-merge"
                                className="btn btn-outline-info"
                                style={{ minWidth: "100px" }}
                                disabled
                            >
                                <Message msgId="mergeLayerPlugin.loading" />
                            </button>
                        ) : (
                            <button
                                key="mergelayer-merge"
                                className="btn btn-outline-info"
                                style={{ minWidth: "100px" }}
                                onClick={this.onDoMerge}
                            >
                                <Message msgId="mergeLayerPlugin.button" />
                            </button>
                        )}

                        <button
                            key="clear-mergelayer"
                            className="btn btn-outline"
                            style={{
                                minWidth: "100px"
                            }}
                            onClick={this.onReset}
                        >
                            <Message msgId="mergeLayerPlugin.resetButton" />
                        </button>
                    </div>
                    <br />
                    {this.props.error === "succeed" ? (
                        <span style={{ color: "green" }}><Message msgId="mergeLayerPlugin.successText" /></span>
                    ) : (
                        <span style={{ color: "red" }}>{this.props.error}</span>
                    )}

                </div>
            </Dialog >
        ) : null;
    }
}

const mergelyr = connect(
    createSelector(
        [
            selector,
            (state) => {
                return mergeLayerSelector(state);
            },
            groupsSelector,
            layersSelector
        ],
        (mergeLyrState, show, layersGroups, allLayers) => {
            return {
                ...mergeLyrState,
                show,
                layersGroups,
                layersNode: layerNodesExtracter(layersGroups),
                allLayers
            };
        }
    ),
    {
        onClose: toggleMergeLyrTool,
        onChangeLayer1: setLayer1,
        onChangeLayer2: setLayer2,
        onDoMerge: doMerge
    },
    null,
    {
        pure: false
    }
)(MergeLayerComponent);

export default {
    MergeLayerPlugin: assign(mergelyr, {
        BurgerMenu: {
            name: "mergelyr",
            position: 12,
            panel: false,
            help: "help",
            tooltip: "tooltip",
            text: "Merge",
            icon: <Glyphicon glyph="plus" />,
            action: () => setControlProperty("mergelyr", "enabled", true)
        }
    }),
    reducers: {
        mergelyr: mergeLayerReducer
    },
    epics: {
        doMergeEpic,
        mergeAsLayerEpic
    }
};
