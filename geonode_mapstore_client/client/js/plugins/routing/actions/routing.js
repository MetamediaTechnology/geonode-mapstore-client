const SERVICE_ROUTE_API_URL = "https://api.longdo.com/RouteService/geojson/route";
const SERVICE_SEARCH_API_URL = "https://search.longdo.com/mapsearch/json/search";
const SERVICE_MAP_API_KEY = "6605d49756a8e87937d07a0366bd7b13";
const axios = require("axios");
const instance = axios.create();

import { routePointStyle } from "../styles/pointStyle";

// ROUTING ACTION
export const addPoint = function() {
    return {
        type: "ROUTING_ADD_POINT"
    };
};
export const removePoint = (index) => {
    return {
        type: "ROUTING_REMOVE_POINT",
        index: index
    };
};
export const swapPoint = function() {
    return {
        type: "ROUTING_SWAP_POINT"
    };
};
export const clearSearchRouting = function(props) {
    return {
        type: "ROUTING_FEATURE_CLEAR",
        features: props.features
    };
};
export const changePointInput = function(index, value) {
    return {
        type: "ROUTING_CHANGE_POINT_LIST",
        index: index,
        value: value
    };
};
export const clickGuide = function(value) {
    return {
        type: "ROUTING_CLICK_GUIDE",
        value: value
    };
};
export const clickSearchResult = function(i, j, result) {
    return {
        type: "ROUTING_CLICK_SEARCH_RESULT",
        i,
        j,
        result
    };
};

export const changeRouteMode = function(value) {
    return {
        type: "ROUTING_CHANGE_MODE",
        value: value
    };
};

export const changeRouteType = function(value) {
    return {
        type: 'ROUTING_CHANGE_TYPE',
        value: value
    };
};

export const displaySetting = function() {
    return {
        type: "ROUTING_DISPLAY_SETTING"
    };
};

// Load data
export const searchLoaded = function(index, result) {
    return {
        type: "ROUTING_SEARCH_LOADED",
        index: index,
        result: result
    };
};
export const featureLoaded = function(features) {
    return {
        type: "ROUTING_FEATURE_LOADED",
        features: features
    };
};

// Search
export const searchRouting = (pointList, routeMode, routeType) => {
    return (dispatch) => {
        const routeTypeTotal = routeType.length === 0 ? null : routeType.reduce((type, a) => (Number.parseInt(type, 10) + Number.parseInt(a, 10)), 0);
        let geoJsonData = new Promise((resolve) => {
            setTimeout(() => {
                let getRoutePath = instance.get(
                    SERVICE_ROUTE_API_URL,
                    {
                        params: {
                            flon: pointList[0].lon,
                            flat: pointList[0].lat,
                            tlon: pointList[1].lon,
                            tlat: pointList[1].lat,
                            locale: "th",
                            mode: routeMode,
                            type: routeTypeTotal,
                            key: SERVICE_MAP_API_KEY
                        }
                    }
                );
                resolve(getRoutePath);
            }, 2000);
        });
        geoJsonData.then((value) => {
            let routeGeoJson = value.data.features;
            let routeLengthObj = routeGeoJson.length;
            let lastRouteCoordinates =
                routeGeoJson[routeLengthObj - 1].geometry.coordinates.length;
            let lastRouteLon =
                routeGeoJson[routeLengthObj - 1].geometry.coordinates[
                    lastRouteCoordinates - 1
                ][0];
            let lastRouteLat =
                routeGeoJson[routeLengthObj - 1].geometry.coordinates[
                    lastRouteCoordinates - 1
                ][1];
            if (pointList.length === 2) {
                routeGeoJson.push({
                    type: "Feature",
                    style: [routePointStyle("START")],
                    geometry: {
                        type: "Point",
                        coordinates: [
                            routeGeoJson[0].geometry.coordinates[0][0],
                            routeGeoJson[0].geometry.coordinates[0][1]
                        ]
                    }
                });
                routeGeoJson.push({
                    type: "Feature",
                    style: [routePointStyle("END")],
                    geometry: {
                        type: "Point",
                        coordinates: [lastRouteLon, lastRouteLat]
                    }
                });
                dispatch(featureLoaded(routeGeoJson));
                document.getElementById("find-route").innerHTML =
                    "ค้นหาเส้นทาง";
            } else {
                routeGeoJson.push({
                    type: "Feature",
                    style: [routePointStyle("START")],
                    geometry: {
                        type: "Point",
                        coordinates: [
                            routeGeoJson[0].geometry.coordinates[0][0],
                            routeGeoJson[0].geometry.coordinates[0][1]
                        ]
                    }
                });
                routeGeoJson.push({
                    type: "Feature",
                    style: [routePointStyle("START")],
                    geometry: {
                        type: "Point",
                        coordinates: [lastRouteLon, lastRouteLat]
                    }
                });
                for (let i = 2; i < pointList.length; i++) {
                    let lon = lastRouteLon;
                    let lat = lastRouteLat;
                    const getMoreGeoJsonData = new Promise(
                        (resolve) => {
                            setTimeout(() => {
                                let getRoutePath = instance.get(
                                    SERVICE_ROUTE_API_URL,
                                    {
                                        params: {
                                            flon: lon,
                                            flat: lat,
                                            tlon: pointList[i].lon,
                                            tlat: pointList[i].lat,
                                            locale: "th",
                                            mode: routeMode,
                                            type: routeTypeTotal,
                                            key: SERVICE_MAP_API_KEY
                                        }
                                    }
                                );
                                resolve(getRoutePath);
                            }, 2000);
                        }
                    );
                    getMoreGeoJsonData.then((v) => {
                        let lastCoordinates =
                            v.data.features[v.data.features.length - 1]
                                .geometry.coordinates.length;
                        let lastLon =
                            v.data.features[v.data.features.length - 1]
                                .geometry.coordinates[
                                    lastCoordinates - 1
                                ][0];
                        let lastLat =
                            v.data.features[v.data.features.length - 1]
                                .geometry.coordinates[
                                    lastCoordinates - 1
                                ][1];
                        routeGeoJson.push({
                            type: "Feature",
                            style: [routePointStyle("START")],
                            geometry: {
                                type: "Point",
                                coordinates: [lastLon, lastLat]
                            }
                        });
                        routeGeoJson.push(...v.data.features);
                        if (i + 1 === pointList.length) {
                            dispatch(featureLoaded(routeGeoJson));
                            document.getElementById("find-route").innerHTML =
                                "ค้นหาเส้นทาง";
                        }
                    });
                }
            }
        });
    };
};
export const searchPointForRouting = function(index, value, center) {
    return (dispatch) => {
        return instance
            .get(
                SERVICE_SEARCH_API_URL,
                {
                    params: {
                        lat: center.y,
                        lon: center.x,
                        keyword: value,
                        locale: "th",
                        key: SERVICE_MAP_API_KEY
                    }
                }
            )
            .then((response) => {
                dispatch(searchLoaded(index, response.data));
            });
    };
};
