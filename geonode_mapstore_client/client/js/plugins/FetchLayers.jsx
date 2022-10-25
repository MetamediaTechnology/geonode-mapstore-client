
import assign from 'object-assign';
import React from 'react';
import PropTypes from 'prop-types';
import Rx from 'rxjs';

import { get } from 'lodash';
import { createControlEnabledSelector } from '@mapstore/framework/selectors/controls';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import {
    LOADING_RESOURCE_CONFIG
} from '@js/actions/gnresource';

import {
    groupsSelector,
    layerSettingSelector,
    getLayerFromId
} from '@mapstore/framework/selectors/layers';
import {
    refreshLayerVersion
} from '@mapstore/framework/actions/layers';
createControlEnabledSelector('fetchlayer');
const FetchLayerSelector = (state) => get(state, 'controls.fetchlayer.enabled');

const layerNodesExtracter = (groups) => {
    const layerNode = [];
    groups.map(groupNode => {
        layerNode.push(...groupNode.nodes);
    });
    return layerNode;
};
const selector = (state) => {
    return {
        layersInterval: state.fetchLayer.layersInterval,
        map: state.map
    };
};

const setOneInterval = (layer) => {
    return {
        type: 'LAYERS:SET_ONE_INTERVAL',
        layerId: layer,
        layer: layer
    };
};
const cancelInterval = (layer) => {
    return {
        type: 'LAYERS:CANCLE_INTERVAL',
        layer: layer
    };
};

const defaultState = {
    layersInterval: []
};
function fetchLayerReducers(state = defaultState, action) {
    switch (action.type) {
    case 'FETCH:SET_LAYER_INTERVAL_WORK': {
        return assign({}, state, {
            layersInterval: state.layersInterval.concat({
                id: action.id,
                layer: action.layer
            })
        });
    }
    case 'FETCH:UPDATE_LAYER_MAP_INTERVAL': {
        return assign({}, state, {
            // map: state.map.la
        });
    }
    default: {
        return state;
    }
    }
}
class FetchLayerCmp extends React.Component {
    static propTypes = {
        layerInterval: PropTypes.array
    };

    static defaultProps = {
        layersInterval: []
    };

    render() {
        return null;
    }
}

const fetchLayer = connect(
    createSelector(
        [
            selector,
            (state) => {
                return FetchLayerSelector(state);
            },
            groupsSelector
        ],
        (fetchLayerState, show, layersGroups) => {
            return {
                ...fetchLayerState,
                show,
                layersGroups,
                layers: layerNodesExtracter(layersGroups)
            };
        }
    ),
    {},
    null,
    {
        pure: false
    }
)(FetchLayerCmp);

const setOneLayerIntervalEpic = (action$, store) =>
    action$.ofType('LAYERS:SET_ONE_INTERVAL')
        .flatMap((action) => {
            store.getState();
            const _layer = action.layer;
            const timeInterval = (Number.parseInt(_layer.timeInterval) * 1000) || 1000;
            return Rx.Observable.interval(timeInterval)
                .map(() =>
                    refreshLayerVersion(_layer.id)
                ).takeUntil(action$.filter(x => (x.type === 'LAYERS:CANCLE_INTERVAL' && x.layer.id === _layer.id)));
        });
const triggerRefreshLayerEpic = (action$, store) =>
    action$.ofType('UPDATE_NODE')
        .flatMap(() => {
            const state = store.getState();
            const settings = layerSettingSelector(state);
            const layer = settings?.nodeType === 'layers' ? getLayerFromId(state, settings?.node) : null;
            if (layer !== null && layer.timeInterval !== null && layer.timeInterval && layer.timeInterval !== 'Never') {
                const timeInterval = (Number.parseInt(layer.timeInterval) * 1000) || 1000;
                return Rx.Observable.interval(timeInterval)
                    .map(() =>
                        refreshLayerVersion(layer.id)
                    )
                    .takeUntil(action$.filter(x => (x.type === 'LAYERS:CANCLE_INTERVAL' && x.layer.id === layer.id)));
            }
            return Rx.Observable.from([
                cancelInterval(layer)
            ]);

        });
const updateSettingParamsEpic = (action$, store) =>
    action$.ofType(LOADING_RESOURCE_CONFIG)
        .flatMap(() => {
            const state = store.getState();
            const layersFlat = state.layers.flat;
            const layers = layersFlat.filter((layer) => {
                if (layer.timeInterval && layer.timeInterval !== 'Never') {
                    return layer;
                }
                return false;

            });
            return Rx.Observable.from(
                layers.map(layer => setOneInterval(layer))
            );
        });

export default {
    FetchLayersPlugin: assign(fetchLayer, {}),
    reducers: {
        fetchLayer: fetchLayerReducers
    },
    epics: {
        triggerRefreshLayerEpic,
        updateSettingParamsEpic,
        setOneLayerIntervalEpic
    }
};
