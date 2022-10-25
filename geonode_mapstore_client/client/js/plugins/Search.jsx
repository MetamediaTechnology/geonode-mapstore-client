/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
import * as Rx from 'rxjs';
import { get, isArray } from 'lodash';
import assign from 'object-assign';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import { createSelector } from 'reselect';

import { removeAdditionalLayer } from '@mapstore/framework/actions/additionallayers';
import { configureMap } from '@mapstore/framework/actions/config';
import { toggleControl } from '@mapstore/framework/actions/controls';
import { zoomToExtent } from '@mapstore/framework/actions/map';

import {
    TEXT_SEARCH_STARTED,
    TEXT_SEARCH_RESULTS_PURGE,
    TEXT_SEARCH_RESET,
    TEXT_SEARCH_ITEM_SELECTED,
    searchTextLoading,
    searchResultLoaded,
    searchResultError,
    addMarker,
    cancelSelectedItem,
    changeActiveSearchTool,
    changeCoord,
    changeFormat,
    resetSearch,
    resultsPurge,
    searchTextChanged,
    selectSearchItem,
    showGFI,
    textSearch,
    updateResultsStyle,
    zoomAndAddPoint
} from '@mapstore/framework/actions/search';

import {API} from '@mapstore/framework/api/searchText';

import { setSearchBookmarkConfig } from '@mapstore/framework/actions/searchbookmarkconfig';
import SearchBarComp from '@mapstore/framework/components/mapcontrols/search/SearchBar';
import SearchResultListComp from '@mapstore/framework/components/mapcontrols/search/SearchResultList';
import {
    searchItemSelected,
    searchOnStartEpic,
    textSearchShowGFIEpic,
    zoomAndAddPointEpic
} from '@mapstore/framework/epics/search';
import mapInfoReducers from '@mapstore/framework/reducers/mapInfo';
import searchReducers from '@mapstore/framework/reducers/search';
import { layersSelector } from '@mapstore/framework/selectors/layers';
import { mapSelector } from '@mapstore/framework/selectors/map';
import ConfigUtils from '@mapstore/framework/utils/ConfigUtils';
import { defaultIconStyle } from '@mapstore/framework/utils/SearchUtils';
import ToggleButton from '@mapstore/framework/plugins/searchbar/ToggleButton';
import uuidv1 from "uuid/v1";
const axios = require('axios');
const instance = axios.create();

const SEARCH_API_URL = ConfigUtils.getConfigProp('geoNodeSettings').searchApiUrl;
const SEARCH_API_KEY = ConfigUtils.getConfigProp('geoNodeSettings').longdoApiKey;

const searchSelector = createSelector([
    state => state.search || null,
    state => state.controls && state.controls.searchBookmarkConfig || null,
    state => state.mapConfigRawData || {},
    state => state?.searchbookmarkconfig || ''
], (searchState, searchBookmarkConfigControl, mapInitial, bookmarkConfig) => ({
    enabledSearchBookmarkConfig: searchBookmarkConfigControl && searchBookmarkConfigControl.enabled || false,
    error: searchState && searchState.error,
    coordinate: searchState && searchState.coordinate || {},
    loading: searchState && searchState.loading,
    searchText: searchState ? searchState.searchText : "",
    activeSearchTool: get(searchState, "activeSearchTool", "addressSearch"),
    format: get(searchState, "format") || ConfigUtils.getConfigProp("defaultCoordinateFormat"),
    selectedItems: searchState && searchState.selectedItems,
    mapInitial,
    bookmarkConfig: bookmarkConfig || {}
}));

const SearchBar = connect(searchSelector, {
    onSearch: textSearch,
    onChangeCoord: changeCoord,
    onChangeActiveSearchTool: changeActiveSearchTool,
    onClearCoordinatesSearch: removeAdditionalLayer,
    onClearBookmarkSearch: setSearchBookmarkConfig,
    onChangeFormat: changeFormat,
    onToggleControl: toggleControl,
    onZoomToPoint: zoomAndAddPoint,
    onPurgeResults: resultsPurge,
    onSearchReset: resetSearch,
    onSearchTextChange: searchTextChanged,
    onCancelSelectedItem: cancelSelectedItem,
    onZoomToExtent: zoomToExtent,
    onLayerVisibilityLoad: configureMap
})(SearchBarComp);

const selector = createSelector([
    mapSelector,
    layersSelector,
    state => state.search || null
], (mapConfig, layers, searchState) => ({
    mapConfig,
    layers,
    results: searchState ? searchState.results : null
}));

const SearchResultList = connect(selector, {
    onItemClick: selectSearchItem,
    addMarker,
    showGFI
})(SearchResultListComp);

const SearchPlugin = connect((state) => ({
    enabled: state.controls && state.controls.search && state.controls.search.enabled || false,
    selectedServices: state && state.search && state.search.selectedServices,
    selectedItems: state && state.search && state.search.selectedItems,
    textSearchConfig: state && state.searchconfig && state.searchconfig.textSearchConfig
}), {
    onUpdateResultsStyle: updateResultsStyle
})(
    class extends React.Component {
        static propTypes = {
            splitTools: PropTypes.bool,
            showOptions: PropTypes.bool,
            isSearchClickable: PropTypes.bool,
            fitResultsToMapSize: PropTypes.bool,
            searchOptions: PropTypes.object,
            resultsStyle: PropTypes.object,
            selectedItems: PropTypes.array,
            selectedServices: PropTypes.array,
            userServices: PropTypes.array,
            withToggle: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
            enabled: PropTypes.bool,
            textSearchConfig: PropTypes.object
        };

        static defaultProps = {
            searchOptions: {
                services: [{ type: "nominatim", priority: 5 }]
            },
            isSearchClickable: false,
            splitTools: true,
            resultsStyle: {
                color: '#3388ff',
                weight: 4,
                dashArray: '',
                fillColor: '#3388ff',
                fillOpacity: 0.2
            },
            fitResultsToMapSize: true,
            withToggle: false,
            enabled: true
        };

        componentDidMount() {
            this.props.onUpdateResultsStyle({ ...defaultIconStyle, ...this.props.resultsStyle });
        }

        getServiceOverrides = (propSelector) => {
            return this.props.selectedItems && this.props.selectedItems[this.props.selectedItems.length - 1] && get(this.props.selectedItems[this.props.selectedItems.length - 1], propSelector);
        };

        getSearchOptions = () => {
            const { searchOptions, textSearchConfig } = this.props;
            if (textSearchConfig && textSearchConfig.services && textSearchConfig.services.length > 0) {
                return textSearchConfig.override ? assign({}, searchOptions, { services: textSearchConfig.services }) : assign({}, searchOptions, { services: searchOptions.services.concat(textSearchConfig.services) });
            }
            return searchOptions;
        };

        getCurrentServices = () => {
            const { selectedServices } = this.props;
            const searchOptions = this.getSearchOptions();
            return selectedServices && selectedServices.length > 0 ? assign({}, searchOptions, { services: selectedServices }) : searchOptions;
        };

        getSearchAndToggleButton = () => {
            const search = (<SearchBar
                key="searchBar"
                {...this.props}
                searchOptions={this.getCurrentServices()}
                placeholder={this.getServiceOverrides("placeholder")}
                placeholderMsgId={this.getServiceOverrides("placeholderMsgId")}
            />);
            if (this.props.withToggle === true) {
                return [<ToggleButton />].concat(this.props.enabled ? [search] : null);
            }
            if (isArray(this.props.withToggle)) {
                return (
                    <span><MediaQuery query={"(" + this.props.withToggle[0] + ")"}>
                        <ToggleButton />
                        {this.props.enabled ? search : null}
                    </MediaQuery>
                    <MediaQuery query={"(" + this.props.withToggle[1] + ")"}>
                        {search}
                    </MediaQuery>
                    </span>
                );
            }
            return search;
        };

        render() {
            return (<span>
                {this.getSearchAndToggleButton()}
                <SearchResultList
                    fitToMapSize={this.props.fitResultsToMapSize}
                    searchOptions={this.props.searchOptions}
                    onUpdateResultsStyle={this.props.onUpdateResultsStyle}
                    key="nominatimresults" />
            </span>)
            ;
        }
    });
export const searchEpic = (action$, { getState = () => { } }) =>
    action$.ofType(TEXT_SEARCH_STARTED)
        .debounceTime(250)
        .switchMap(action =>
            Rx.Observable.from(
                (action.services || [{ type: "nominatim", priority: 5 }])
                    .map((service) => {
                        const mapApiKey = getState().gnresource?.data?.map_key || false;
                        const serviceInstance = API.Utils.getService(service.type);
                        const getSearchData = (searchText = '') => { return instance.get(`${SEARCH_API_URL}?keyword=${searchText}&key=${mapApiKey || SEARCH_API_KEY}`);};
                        if (!serviceInstance) {
                            const err = new Error("Service Missing");
                            err.msgId = "search.service_missing";
                            err.serviceType = service.type;
                            return Rx.Observable.of(err).do((e) => {throw e; });
                        }
                        return Rx.Observable.defer(() =>
                            service.type === 'nominatim' ? getSearchData(action.searchText).then(({ data } ) => {
                                var response = data.data;
                                var geoJson = [];
                                response.map((searchResult) => {
                                    geoJson.push({
                                        properties: {
                                            place_id: searchResult.id,
                                            display_name: searchResult.name
                                        },
                                        id: uuidv1(),
                                        type: "Feature",
                                        bbox: [(searchResult.lon - 0.1), (searchResult.lat - 0.1), (searchResult.lon + 0.1), (searchResult.lat + 0.1)],
                                        geometry: {
                                            type: "Point",
                                            coordinates: [searchResult.lon, searchResult.lat]
                                        }
                                    });
                                });
                                return geoJson;
                            }) :
                                serviceInstance(action.searchText, service.options)
                                    .then( (response = []) => response.map(result => ({...result, __SERVICE__: service, __PRIORITY__: service.priority || 0}))
                                    ))
                            .retryWhen(errors => errors.delay(200).scan((count, err) => {
                                if ( count >= 2) {
                                    throw err;
                                }
                                return count + 1;
                            }, 0));
                    }) // Map
            )
                .mergeAll()
                .scan((oldRes, newRes) => sortBy([...oldRes, ...newRes], ["__PRIORITY__"]))
                .map((results) => searchResultLoaded(results.slice(0, action.maxResults || 15), false))
                .startWith(searchTextLoading(true))
                .takeUntil(action$.ofType( TEXT_SEARCH_RESULTS_PURGE, TEXT_SEARCH_RESET, TEXT_SEARCH_ITEM_SELECTED))
                .concat([searchTextLoading(false)])
                .catch(e => {
                    const err = {msgId: "search.generic_error", ...e, message: e.message, stack: e.stack};
                    return Rx.Observable.from([searchResultError(err), searchTextLoading(false)]);
                })
        );

export default {
    SearchPlugin: assign(SearchPlugin, {
        OmniBar: {
            name: 'search',
            position: 1,
            tool: true,
            priority: 1
        }
    }),
    epics: { searchEpic, searchOnStartEpic, searchItemSelected, zoomAndAddPointEpic, textSearchShowGFIEpic },
    reducers: {
        search: searchReducers,
        mapInfo: mapInfoReducers
    }
};
