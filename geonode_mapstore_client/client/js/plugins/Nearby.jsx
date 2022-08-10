import uuidv1 from "uuid/v1";
import assign from 'object-assign';
import React from 'react';
import axios from '@mapstore/framework/libs/ajax';
import Rx from 'rxjs';
import PropTypes from 'prop-types';
import Slider from 'react-nouislider';
import circle from '@turf/circle';
import Button from '@mapstore/framework/components/misc/Button';
import Dock from 'react-dock';
import BorderLayout from '@mapstore/framework/components/layout/BorderLayout';
import ContainerDimensions from 'react-container-dimensions';
import LayerSelector from './nearby/LayerSelector';

import { get } from 'lodash';
import { setControlProperty } from '@mapstore/framework/actions/controls';
import { Glyphicon, Pagination } from 'react-bootstrap';
import { createControlEnabledSelector } from '@mapstore/framework/selectors/controls';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { changeDrawingStatus } from '@mapstore/framework/actions/draw';

import {
    groupsSelector
} from '@mapstore/framework/selectors/layers';

// ค่าพิื้นฐานที่เรียกใช้คือ TOGGLE_CONTROL -> /reducers/controls.js
export const TOGGLE_CONTROL = 'TOGGLE_CONTROL';

createControlEnabledSelector('nearby');
const nearbySelector = (state) => get(state, 'controls.nearby.enabled');


const toggleNearbyTool = () => {
    return {
        type: TOGGLE_CONTROL,
        control: 'nearby',
        property: null,
        layer: {},
        index: -1
    };
};
const layerNodesExtracter = (groups) => {
    const layerNode = [];
    groups.map(groupNode => {
        layerNode.push(...groupNode.nodes);
    });
    return layerNode;
};
const setRadius = function(radius) {
    return {
        type: 'SET_NEARBY_RADIUS',
        radius: Number(radius) || 1.0
    };
};
const setLayer = function(layer, idx) {
    return {
        type: 'SET_LAYER_FILTER',
        layer: layer,
        index: idx
    };
};
const setPage = function(pageNumber) {
    return {
        type: 'NEARBY:CHANGE_PAGE_NUMBER',
        page: pageNumber
    };
};
const lockCenter = function() {
    return {
        type: 'NEARBY:CENTER_MAP_LOCK'
    };
};
const changeCenter = function(center) {
    return {
        type: 'SET_NEARBY_CENTER',
        center: center
    };
};
const featureLoaded = function(features) {
    return {
        type: 'NEARBY_FEATURE_LOADED',
        features: features
    };
};
const loadFeature = function(radius, center, radiusFeature, layerSelected) {
    if (!layerSelected) {
        layerSelected = {};
    }
    const DEFAULT_API = '/geoserver/wfs';
    return (dispatch) => {
        axios.get(layerSelected.url || DEFAULT_API, {
            params: {
                service: 'WFS',
                version: layerSelected.version,
                request: 'DescribeFeatureType',
                typeName: layerSelected.name,
                outputFormat: 'application/json'
            }
        }).then(({ data }) => {
            const layerInfo = data.featureTypes[0];
            try {
                const layerType = layerInfo.properties.find((lt) => { return lt.localType === 'Point'; });
                if (layerType.name !== null || layerType.name !== 'undefined') {
                    const positionPoint = center.y + ' ' + center.x;
                    axios.get(`${layerSelected.url || DEFAULT_API}`, {
                        params: {
                            service: 'WFS',
                            version: layerSelected.version,
                            request: 'GetFeature',
                            typeNames: layerSelected.name,
                            outputFormat: 'application/json',
                            SRSName: 'EPSG:4326',
                            cql_filter: `DWithin(${layerType.name},POINT(${positionPoint}),${radius},meters)`
                        }
                    }).then((response) => {
                        var featuresGeoJson = response.data.features;
                        featuresGeoJson.map((geoJson) => {
                            if (geoJson.geometry.type === 'Point') {
                                geoJson.style = {
                                    iconGlyph: "map-marker",
                                    iconShape: "circle",
                                    iconColor: "blue",
                                    highlight: false,
                                    id: uuidv1()
                                };
                            }
                        });
                        featuresGeoJson.push(radiusFeature);
                        dispatch(featureLoaded(featuresGeoJson));
                    });
                }
            } catch (error) {
                console.error(error);
                dispatch(featureLoaded([]));
            }
        }).catch((e) => {
            console.error(e);
            dispatch(featureLoaded([]));
        });
    };
};
const featureRadius = function(radius, geometry) {

    return {
        type: "Feature",
        geometry: geometry,
        properties: {
            isCircle: true,
            radius: radius,
            id: uuidv1(),
            crs: "EPSG:3857",
            isGeodesic: true
        },
        style: [
            {
                color: "#48C9B0",
                opacity: 1,
                weight: 5,
                fillColor: "#ffffff",
                fillOpacity: 0.3,
                highlight: false,
                type: "Circle",
                title: "Near by",
                id: uuidv1
            }
        ]
    };

};
const clearLoadFeature = function() {
    return (dispatch) => {
        dispatch(featureLoaded([]));
    };
};
const selector = (state) => {
    return {
        radius: state.nearby.radius,
        center: state.nearby.center,
        centerLocked: state.nearby.centerLocked,
        centerFixed: state.nearby.centerFixed,
        results: state.nearby.results,
        layer: state.nearby.layer,
        layerIndex: state.nearby.layerIndex,
        totalPage: state.nearby.totalPage,
        pageSize: state.nearby.pageSize,
        currentPage: state.nearby.currentPage
    };
};

const defaultState = {
    radius: 1.0,
    center: null,
    centerLocked: false,
    centerFixed: {},
    results: [],
    nearbyLists: [],
    layer: {},
    layerIndex: -1,
    totalPage: 0,
    pageSize: 25,
    currentPage: 1
};
function nearbyReducer(state = defaultState, action) {
    switch (action.type) {
    case 'SET_NEARBY_RADIUS': {
        return assign({}, state, {
            radius: action.radius
        });
    }
    case 'SET_LAYER_FILTER': {
        return assign({}, state, {
            layer: action.layer,
            layerIndex: action.index
        });
    }
    case 'SET_NEARBY_CENTER': {
        return assign({}, state, {
            center: action.center
        });
    }
    case 'NEARBY_FEATURE_LOADED': {
        return assign({}, state, {
            nearbyLists: action.features,
            results: action.features.length > state.pageSize ? action.features.slice(0, state.pageSize) : action.features,
            totalPage: action.features.length > state.pageSize ? Math.floor(action.features.length / state.pageSize) : 1,
            currentPage: 1
        });
    }
    case 'NEARBY:CENTER_MAP_LOCK': {
        return assign({}, state, {
            centerFixed: state.center,
            centerLocked: !state.centerLocked
        });
    }
    case 'NEARBY:CHANGE_PAGE_NUMBER': {
        return assign({}, state, {
            results: state.nearbyLists.slice((action.page - 1) * state.pageSize, action.page * state.pageSize),
            currentPage: action.page
        });
    }
    case TOGGLE_CONTROL: {
        return assign({}, state, {
            layer: action.layer,
            layerIndex: action.index
        });
    }
    default: {
        return state;
    }
    }
}

class NearbyDialog extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        radius: PropTypes.number,
        results: PropTypes.array,
        nearbyLists: PropTypes.array,
        centerLocked: PropTypes.bool,
        centerFixed: PropTypes.object,
        onLockCenter: PropTypes.func,
        onClose: PropTypes.func,
        onChangeRadius: PropTypes.func,
        onChangeLayer: PropTypes.func,
        dockProps: PropTypes.object,
        layersGroups: PropTypes.array,
        layersNode: PropTypes.array,
        layerIndex: PropTypes.number,
        totalPage: PropTypes.number,
        pageSize: PropTypes.number,
        currentPage: PropTypes.number,
        changePage: PropTypes.func
    };

    static defaultProps = {
        show: false,
        radius: 1.00,
        centerLocked: false,
        centerFixed: {},
        results: [],
        nearbyLists: [],
        dockProps: {
            dimMode: "none",
            size: 0.30,
            fluid: true,
            position: "right",
            zIndex: 1030
        },
        dockStyle: {},
        layersGroups: [],
        layersNode: [],
        layerIndex: -1,
        totalPage: 0,
        pageSize: 5,
        currentPage: 1,
        changePage: () => { }
    };

    onClose = () => {
        this.props.onClose(false);
    };

    onChangeRadius = (radius) => {
        this.props.onChangeRadius(radius);
    };

    onLayerChange = (idx) => {
        const getLayer = this.props.layersNode[idx];
        this.props.onChangeLayer(getLayer, idx);
    };

    onLockCenter = () => {
        this.props.onLockCenter();
    };

    changePage = (pageNo) => {
        this.props.onChangePage(pageNo);
    }

    start = {
        x: (window.innerWidth - 600) * 0.5,
        y: (window.innerHeight - 100) * 0.5
    }

    dialogStyle = {
        position: 'fixed',
        top: '0px',
        left: '0px'
    };

    renderHeader() {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                        <Button className="square-button no-events">
                            <Glyphicon glyph="record" />
                        </Button>
                    </div>
                    <div style={{ flex: "1 1 0%", padding: 8, textAlign: "center" }}>
                        <h4>Nearby</h4>
                    </div>
                    <div>
                        <Button className="square-button no-border" onClick={this.onClose}>
                            <Glyphicon glyph="1-close" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const items = [];
        for (const [index, value] of this.props.results.entries()) {
            items.push(<li key={index}>{value.properties.title_en || 'No title'}</li>);
        }
        return this.props.show
            ? (
                <ContainerDimensions>
                    {({ width }) =>
                        <span className="react-dock-no-resize">
                            <Dock
                                fluid
                                dockStyle={this.props.dockStyle} {...this.props.dockProps}
                                isVisible={this.props.show}
                                size={330 / width > 1 ? 1 : 330 / width}
                            >
                                <BorderLayout header={this.renderHeader()}>
                                    <div style={{ padding: '10px' }}>
                                        <label>Layers</label>
                                        <div>
                                            <LayerSelector
                                                responses={this.props.layersNode}
                                                index={this.props.layerIndex}
                                                setIndex={this.onLayerChange}
                                            ></LayerSelector>
                                        </div>
                                        <div className="btn-toolbar" style={{ marginTop: '10px' }}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Radius (km)</label>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <button onClick={this.onLockCenter} style={{ "float": 'right' }} className={this.props.centerLocked ? 'btn btn-xs active' : 'btn btn-xs'}>
                                                        <Glyphicon glyph="lock" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mapstore-slider with-tooltip">
                                            <Slider
                                                tooltips
                                                step={0.1}
                                                start={[this.props.radius]}
                                                range={{
                                                    'min': [0],
                                                    'max': [20]
                                                }}
                                                onChange={(value) => { this.onChangeRadius(value[0]); }}
                                            />
                                        </div>
                                        <div className="location-list">
                                            <div className="locations">
                                                {items}
                                            </div>
                                            {items.length > 0 ? (
                                                <div style={{ textAlign: 'center' }}>
                                                    <Pagination
                                                        prev next first last ellipsis boundaryLinks
                                                        bsSize="small"
                                                        items={this.props.totalPage}
                                                        maxButtons={5}
                                                        activePage={this.props.currentPage}
                                                        onSelect={this.changePage}
                                                    />
                                                </div>
                                            ) : (<div></div>)
                                            }
                                        </div>
                                    </div>

                                </BorderLayout>
                            </Dock>
                        </span>
                    }
                </ContainerDimensions>
            ) : null;
    }
}

const nearby = connect(
    createSelector(
        [
            selector,
            (state) => {
                return nearbySelector(state);
            },
            groupsSelector
        ],
        (nearbyState, show, layersGroups) => {
            return {
                ...nearbyState,
                show,
                layersGroups,
                layersNode: layerNodesExtracter(layersGroups)
            };
        }
    ),
    {
        onClose: toggleNearbyTool,
        onChangeRadius: setRadius,
        onChangeLayer: setLayer,
        onLockCenter: lockCenter,
        onChangePage: setPage
    },
    null,
    {
        pure: false
    }
)(NearbyDialog);

const changeCenterEpic = (action$, { getState = () => { } }) =>
    action$.ofType('CHANGE_MAP_VIEW')
        .filter(() => {
            return (getState().controls.nearby || {}).enabled || false;
        })
        .switchMap(({ center }) => {
            const radius = getState().nearby.radius;
            const layer = getState().nearby.layer;
            const centerFixed = getState().nearby.centerFixed;
            const centerLocked = getState().nearby.centerLocked;
            const geometry = circle(
                [
                    centerLocked ? centerFixed.x : center.x,
                    centerLocked ? centerFixed.y : center.y
                ],
                radius,
                {
                    steps: 100,
                    units: 'kilometers'
                }
            ).geometry;

            const feature = featureRadius(radius, geometry);
            if (centerLocked) {
                return Rx.Observable.empty();
            }
            return Rx.Observable.from([
                changeCenter(center),
                loadFeature(radius * 1000, center, feature, layer)
            ]);


        });
const changeRadiusEpic = (action$, { getState = () => { } }) =>
    action$.ofType('SET_NEARBY_RADIUS')
        .filter(() => {
            return (getState().controls.nearby || {}).enabled || false;
        })
        .switchMap(({ radius }) => {
            const center = getState().map.present.center;
            const centerFixed = getState().nearby.centerFixed;
            const centerLocked = getState().nearby.centerLocked;
            const layer = getState().nearby.layer;
            const geometry = circle(
                [
                    centerLocked ? centerFixed.x : center.x,
                    centerLocked ? centerFixed.y : center.y
                ],
                radius,
                {
                    steps: 100,
                    units: 'kilometers'
                }
            ).geometry;
            const feature = featureRadius(radius, geometry);
            return Rx.Observable.from([
                loadFeature(radius * 1000, center, feature, layer)
            ]);
        });
const changeLayerEpic = (action$, { getState = () => { } }) =>
    action$.ofType('SET_LAYER_FILTER')
        .filter(() => {
            return (getState().controls.nearby || {}).enabled || false;
        })
        .switchMap(({ layer }) => {
            const center = getState().map.present.center;
            const radius = getState().nearby.radius;
            const geometry = circle(
                [center.x, center.y],
                radius,
                {
                    steps: 100,
                    units: 'kilometers'
                }
            ).geometry;
            const feature = featureRadius(radius, geometry);
            return Rx.Observable.from([
                loadFeature(radius * 1000, center, feature, layer)
            ]);
        });
const closeNearbyDock = (action$, { getState = () => { } }) =>
    action$.ofType(TOGGLE_CONTROL)
        .filter(() => {
            return (getState().controls.nearby || {}) || false;
        })
        .switchMap(({}) => {
            return Rx.Observable.from([
                clearLoadFeature(),
                changeDrawingStatus("clean", "", "nearbyResult", [], {})
            ]);
        });
const nearbyResultLoadedEpic = (action$, { getState = () => { } }) =>
    action$.ofType('NEARBY_FEATURE_LOADED')
        .filter(() => {
            return (getState().controls.nearby || {}).enabled || false;
        })
        .switchMap(() => {
            const drawOptions = {
                featureProjection: "EPSG:4326",
                stopAfterDrawing: true,
                editEnabled: false,
                selectEnabled: true,
                translateEnabled: false,
                drawEnabled: false
            };
            const center = getState().map.present.center;
            const radius = getState().nearby.radius;
            const geometry = circle(
                [center.x, center.y],
                radius,
                {
                    steps: 100,
                    units: 'kilometers'
                }
            ).geometry;
            const radiusFeature = featureRadius(radius, geometry);
            const features = getState().nearby.results;
            const featureCollection = [
                {
                    type: "FeatureCollection",
                    newFeature: true,
                    id: uuidv1(),
                    geometry: null,
                    properties: uuidv1(),
                    features: [...features, radiusFeature]
                }
            ];
            return Rx.Observable.from([
                changeDrawingStatus('drawOrEdit', 'Point', 'nearbyResult', featureCollection, drawOptions)
            ]);
        });
const changePageEpic = (action$, { getState = () => { } }) =>
    action$.ofType('NEARBY:CHANGE_PAGE_NUMBER')
        .filter(() => {
            return (getState().controls.nearby || {}).enabled || false;
        })
        .switchMap(() => {
            const drawOptions = {
                featureProjection: "EPSG:4326",
                stopAfterDrawing: true,
                editEnabled: false,
                selectEnabled: true,
                translateEnabled: false,
                drawEnabled: false
            };
            const center = getState().map.present.center;
            const radius = getState().nearby.radius;
            const centerFixed = getState().nearby.centerFixed;
            const centerLocked = getState().nearby.centerLocked;
            const geometry = circle(
                [
                    centerLocked ? centerFixed.x : center.x,
                    centerLocked ? centerFixed.y : center.y
                ],
                radius,
                {
                    steps: 100,
                    units: 'kilometers'
                }
            ).geometry;
            const radiusFeature = featureRadius(radius, geometry);
            const features = getState().nearby.results;
            const featureCollection = [
                {
                    type: "FeatureCollection",
                    newFeature: true,
                    id: uuidv1(),
                    geometry: null,
                    properties: uuidv1(),
                    features: [...features, radiusFeature]
                }
            ];
            return Rx.Observable.from([
                changeDrawingStatus('drawOrEdit', 'Point', 'nearbyResult', featureCollection, drawOptions)
            ]);
        });
export default {
    NearbyPlugin: assign(nearby, {
        BurgerMenu: {
            name: 'nearby',
            position: 9,
            panel: false,
            help: 'help',
            tooltip: 'tooltip',
            text: 'Nearby',
            icon: <Glyphicon glyph="record" />,
            action: () => setControlProperty('nearby', 'enabled', true)
        }
    }),
    reducers: {
        nearby: nearbyReducer
    },
    epics: {
        changeCenterEpic,
        changeRadiusEpic,
        nearbyResultLoadedEpic,
        changeLayerEpic,
        closeNearbyDock,
        changePageEpic
    }
};
