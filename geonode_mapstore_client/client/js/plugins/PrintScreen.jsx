import React from 'react';
import assign from 'object-assign';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { createControlEnabledSelector } from '@mapstore/framework/selectors/controls';
import { setControlProperty } from "@mapstore/framework/actions/controls";
import { Glyphicon, Tooltip } from 'react-bootstrap';
import { createSelector } from 'reselect';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
// Components
import Dialog from '@mapstore/framework/components/misc/Dialog';
import Button from '@mapstore/framework/components/misc/Button';
import OverlayTrigger from '@mapstore/framework/components/misc/OverlayTrigger';

const proxyUrl = getConfigProp('proxyUrl');

createControlEnabledSelector('prtsc');
const printScreenState = (state) => get(state, 'controls.prtsc.enabled');

export const TOGGLE_CONTROL = 'TOGGLE_CONTROL';

const togglePrintScreenTool = () => {
    return {
        type: TOGGLE_CONTROL,
        control: 'prtsc',
        property: null
    };
};

const captureScreen = (src) => {
    return {
        type: 'PRTSC:CAPTURE_SCREEN',
        capture: src
    };
};

const reCaptureScreen =  (src) => {
    return {
        type: 'PRTSC:RE_CAPTURE_SCREEN',
        capture: src
    };
};

const defaultState = {
    captureImg: ''
};
const selector = (state) => {
    return {
        show: PropTypes.bool,
        captureImg: state.prtsc.captureImg
    };
};

function printScreenReducer(state = defaultState, action) {
    switch (action.type) {
    case 'PRTSC:CAPTURE_SCREEN': {
        return assign({}, state, {
            captureImg: action.capture
        });
    }
    case 'PRTSC:RE_CAPTURE_SCREEN': {
        return assign({}, state, {
            captureImg: action.capture
        });
    }
    default: {
        return state;
    }
    }
}

class PrintScreenComponent extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        show: PropTypes.bool,
        captureImg: PropTypes.string,
        onDownload: PropTypes.func,
        onReCapture: PropTypes.func,
        onClose: PropTypes.func
    };

    static defaultProps = {
        show: false,
        id: "mapstore-printscreen",
        captureImg: ""
    };

    // Style

    dialogStyle = {
        position: 'fixed',
        top: '0px',
        left: '25%',
        width: '60%'
    };
    start = {
        x: (window.innerWidth - 600) * 0.5,
        y: (window.innerHeight - 100) * 0.5
    }

    componentDidMount() {
        new Promise((resolve, reject) => {
            const id = 'html2canvas-api';
            var scriptTag = window.document.getElementById(id);
            if (scriptTag) {
                resolve();
            } else {
                var script = window.document.createElement('script');
                script.setAttribute('id', id);
                script.setAttribute('src', 'https://html2canvas.hertzen.com/dist/html2canvas.min.js');
                script.onload = () => {
                    resolve();
                };
                window.document.head.appendChild(script);
            }
        });
    }

    setAttributeIgnoreElement = (type) => {
        switch (type) {
        case 'SET':
            document.getElementById('navigationBar').setAttribute('data-html2canvas-ignore', true);
            document.getElementById('mapstore-drawermenu').setAttribute('data-html2canvas-ignore', true);
            document.getElementById('mapstore-navbar').setAttribute('data-html2canvas-ignore', true);
            break;
        case 'REMOVE':
            document.getElementById('navigationBar').removeAttribute('data-html2canvas-ignore');
            document.getElementById('mapstore-drawermenu').setAttribute('data-html2canvas-ignore');
            document.getElementById('mapstore-navbar').setAttribute('data-html2canvas-ignore');
            break;
        default:
            return;
        }
    }

    onCapture = () => {
        this.setAttributeIgnoreElement('SET');
        window.html2canvas(document.querySelector(".gn-viewer-layout-body"), {
            // useCORS: true,
            allowTaint: true,
            foreignObjectRendering: true,
            proxy: proxyUrl.url
        }).then(canvas => {
            const captureUrl = canvas.toDataURL('image/png', 1.0).replace("image/png", "image/octet-stream");
            return this.props.onCapture(captureUrl);
        });
    }
    onReCapture = () => {
        this.setAttributeIgnoreElement('SET');
        window.html2canvas(document.querySelector(".gn-viewer-layout-body"), {
            // useCORS: true,
            allowTaint: true,
            foreignObjectRendering: true,
            proxy: proxyUrl.url
        }).then(canvas => {
            const captureUrl = canvas.toDataURL('image/png', 1.0).replace("image/png", "image/octet-stream");
            return this.props.onCapture(captureUrl);
        });
    }

    onDownload = () => {
        var link = document.createElement('a');
        link.setAttribute('download', 'screenshort.png');
        link.setAttribute('href', this.props.captureImg);
        link.click();
    }

    onClose = () => {
        this.props.onClose(false);
    }

    addTooltip = (btn) => {
        let tooltip = <Tooltip id="locate-tooltip">{this.props.tooltip}</Tooltip>;
        return (
            <OverlayTrigger placement={this.props.tooltipPlace} key={"overlay-trigger." + this.props.id} overlay={tooltip}>
                {btn}
            </OverlayTrigger>
        );
    };

    render() {
        return (
            <div>
                {
                    this.addTooltip(
                        <Button
                            id={this.props.id}
                            style={this.props.style}
                            bsSize="xsmall"
                            onClick={this.onCapture}
                            className="square-button"
                            bsStyle="primary"
                        >
                            <Glyphicon glyph="camera" />
                            {this.props.text}
                            {this.props.help}
                        </Button>
                    )
                }
                {
                    this.props.show ? (
                        <Dialog draggable={false} id="prtsc-dialog" style={this.dialogStyle} start={this.start} >
                            <div key="header" role="header">
                                <Glyphicon glyph="print" />&nbsp;Print Screen
                                <button key="close" onClick={this.onClose} className="close"><Glyphicon glyph="1-close" /></button>
                            </div>
                            <div key="body" role="body" style={{height: '300px', overflow: 'scroll'}}>
                                <img id="prtsc-img" src={this.props.captureImg} width={'100%'} />
                                <div className="prtsc-control mt-2">
                                    <button className="btn btn-info" onClick={this.onDownload}>Download</button>
                                    <button className="btn btn-warning" onClick={this.onReCapture}>Re-capture</button>
                                </div>
                            </div>
                        </Dialog>
                    ) : null
                }
            </div>
        );
    }
}

const prtsc = connect(
    createSelector(
        [
            selector,
            (state) => {
                return printScreenState(state);
            }
        ],
        (prtscState, show) => {
            return {
                ...prtscState,
                show
            };
        }
    ),
    {
        onCapture: captureScreen,
        onReCapture: reCaptureScreen,
        onClose: togglePrintScreenTool
    },
    null,
    { pure: false }
)(PrintScreenComponent);

export default {
    PrintScreenPlugin: assign(prtsc, {
        BurgerMenu: {
            name: 'prtsc',
            position: 3,
            panel: false,
            help: 'help',
            tooltip: 'tooltip',
            text: 'PrintScreen',
            icon: <Glyphicon glyph="print" />,
            action: () => setControlProperty('prtsc', 'enabled', true)
        }
        // Toolbar: {
        //     name: "prtsc",
        //     position: 10,
        //     tooltip: null,
        //     icon: <Glyphicon glyph="camera" />,
        //     help: 'Help',
        //     tool: true,
        //     priority: 1
        // }
    }),
    reducers: {
        prtsc: printScreenReducer
    },
    epics: {}
};
