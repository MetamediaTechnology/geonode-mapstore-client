import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import PropTypes from "prop-types";
import assign from "object-assign";
import { Glyphicon } from "react-bootstrap";
import { createSelector } from "reselect";
import Rx from "rxjs";

import Dialog from "@mapstore/framework/components/misc/Dialog";
import Legend from "@mapstore/framework/components/TOC/fragments/legend/Legend";

import MapStandardPreview from "./print/MapPreview";
import { changeMapView } from "@mapstore/framework/actions/map";
import { createControlEnabledSelector } from "@mapstore/framework/selectors/controls";
import {
    setControlProperty,
    toggleControl,
} from "@mapstore/framework/actions/controls";
import { getResolutions, getScales } from "@mapstore/framework/utils/MapUtils";
import { resizeMap } from "@mapstore/framework/actions/map";
import {
    getPolygonFromExtent,
    coordinatetoLatLon,
} from "@mapstore/framework/utils/CoordinatesUtils";

import compassImages from "./print/assets/img/compass.jpg";
import gistdaLogo from "./print/assets/img/gistda_logo.png";

createControlEnabledSelector("prtstd");

export const TOGGLE_PRINT_STD_CONTROL = "TOGGLE_PRINT_STD_CONTROL";
export const PRTSTD_SET_MAP_PREVIEW = "PRTSTD_SET_MAP_PREVIEW";
export const PRTSTD_SET_MINI_MAP_PREVIEW = "PRTSTD_SET_MINI_MAP_PREVIEW";

export const togglePrintingTool = () => {
    return {
        type: TOGGLE_PRINT_STD_CONTROL,
        control: "prtstd",
        property: null,
    };
};

export const setMapProperty = (mapObj) => {
    return {
        type: PRTSTD_SET_MAP_PREVIEW,
        map: mapObj,
    };
};

export const setMiniMapProperty = (mapObj) => {
    return {
        type: PRTSTD_SET_MINI_MAP_PREVIEW,
        map: mapObj,
    };
};

const extractMapObj = (map) => {
    return map?.present;
};
const layerFilter = (layer) => {
    const layerVisibility = layer?.flat.filter((l) => {
        return l.visibility === true;
    });
    return layerVisibility;
};
// Action
const mapViewChanges = function (center, zoom, bbox) {
    return {
        type: "PRTSTD:CHANGEMAP_VIEW",
        center,
        zoom,
        bbox
    };
};
const zoomControl = (zoomType) => {
    return {
        type: "PRTSTD:ZOOM_PAPER_CONTROL",
        zoomType: zoomType,
    };
};

const changeLayout = () => {
    return {
        type: "PRTSTD:CHANGE_LAYOUT",
    };
};

// Redux Selector
const selector = (state) => {
    return {
        show: state.prtstd.show,
        paperZoom: state.prtstd.paperZoom,
        mapType: state.maptype.mapType,
        layout: state.prtstd.layout,
        printName: state.prtstd.printName,
        mapCenter: state.prtstd.mapCenter,
        mapZoom: state.prtstd.mapZoom,
        map: state.prtstd.map,
        miniMap: state.prtstd.miniMap,
        bbox: state.prtstd.bbox,
        mapScale: state.prtstd.mapScale,
        layers: state.prtstd.layers,
        printSpec: state.prtstd.printSpec,
    };
};

const defaultState = {
    show: false,
    layout: "portrait",
    mapType: "openlayers",
    paperZoom: 1,
    mapZoom: 5,
    mapScale: 0.0,
    printName: "แผนที่ไม่มีชื่อ",
    mapCenter: null,
    layers: [],
    map: null,
    miniMap: null,
    bbox: null,
};
// Redux Action

// Redux reducer
function printStandardReducer(state = defaultState, action) {
    switch (action.type) {
        case "PRTSTD:CHANGEMAP_VIEW": {
            return assign({}, state, {
                mapCenter: action.center,
                mapZoom: action.zoom,
                bbox: action.bbox
            });
        }
        case "PRTSTD:ZOOM_PAPER_CONTROL": {
            let zoom =
                action.zoomType === "+"
                    ? (state.paperZoom += 0.1)
                    : (state.paperZoom -= 0.1);
            return assign({}, state, {
                paperZoom: zoom,
            });
        }
        case "PRTSTD:CHANGE_LAYOUT": {
            const currentLayout = state.layout;
            if (currentLayout === "landscape") {
                return assign({}, state, {
                    layout: "portrait",
                });
            } else {
                return assign({}, state, {
                    layout: "landscape",
                });
            }
        }
        case PRTSTD_SET_MAP_PREVIEW: {
            return assign({}, state, {
                map: action.map,
            });
        }
        case PRTSTD_SET_MINI_MAP_PREVIEW: {
            return assign({}, state, {
                miniMap: action.map,
            });
        }
        default: {
            return state;
        }
    }
}
class PrintStandardComponent extends React.Component {
    static propTypes = {
        show: PropTypes.bool,
        layout: PropTypes.string,
        map: PropTypes.object,
        miniMap: PropTypes.object,
        bbox: PropTypes.object,
        printName: PropTypes.string,
        paperZoom: PropTypes.number,
        mapZoom: PropTypes.number,
        mapScale: PropTypes.number,
        layers: PropTypes.object,
        mapType: PropTypes.string,
        mapCenter: PropTypes.object,
        onMapViewChanges: PropTypes.func,
        onZoomControl: PropTypes.func,
        onChangeLayout: PropTypes.func,
        onClose: PropTypes.func,
    };

    static defaultProps = {
        show: false,
        mapType: "openlayers",
        layers: [],
        layout: "portrait",
        map: null,
        miniMap: null,
        bbox: null,
        mapZoom: 5,
        printName: "แผนที่ไม่มีชื่อ",
        paperZoom: 1,
        mapScale: 0.0,
        mapCenter: {},
        onZoomControl: () => { },
        onChangeLayout: () => { },
        onMapViewChanges: () => { },
        onClose: () => { },
    };

    // Style
    dialogStyle = {
        backgroundColor: "#525559",
        position: "absolute",
        top: "0px",
        width: "calc(100% - 80px)",
    };
    start = {
        x: 40,
        y: 10,
    };

    onPrint = () => {
        this.onPreparePrint();
        window
            .html2canvas(document.getElementById("printContainer"), {
                allowTaint: true,
            })
            .then((canvas) => {
                canvas.setAttribute("id", "print_standard");
                document.body.append(canvas);
                var print_tab = window.open("", "", "");
                print_tab.document.body.appendChild(canvas);
                print_tab.print();
                setTimeout(() => {
                    print_tab.close();
                }, 1000);
            });
        this.onAfterPrint();
    };

    onPreparePrint = () => {
        document.getElementById("printContainer").style.transform = "";
        const textArea = document.querySelector("#prtstd-remark > textarea");
        const divTextArea = document.getElementById("text-behind");

        const textTitle = document.querySelector("#print-title");
        const divTitle = document.getElementById("print-title-behind");

        const mapCopy = document.querySelector(
            "#print_preview > div > div.ol-overlaycontainer-stopevent > div.ol-attribution.ol-unselectable.ol-control.ol-uncollapsible"
        );
        const miniMapCopy = document.querySelector(
            "#mini_print_preview > div > div.ol-overlaycontainer-stopevent > div.ol-attribution.ol-unselectable.ol-control.ol-uncollapsible"
        );
        const mapZoomAttr = document.querySelector("#print_preview .ol-zoom");
        const mapMiniZoomAttr = document.querySelector(
            "#mini_print_preview .ol-zoom"
        );

        if (mapCopy) {
            mapCopy.setAttribute("data-html2canvas-ignore", true);
        }
        if (miniMapCopy) {
            miniMapCopy.setAttribute("data-html2canvas-ignore", true);
        }
        if (mapZoomAttr) {
            mapZoomAttr.setAttribute("data-html2canvas-ignore", true);
        }
        if (mapMiniZoomAttr) {
            mapMiniZoomAttr.setAttribute("data-html2canvas-ignore", true);
        }
        if (textArea && divTextArea) {
            textArea.setAttribute("data-html2canvas-ignore", true);
            textArea.style.display = "none";
            divTextArea.style.display = "block";
            divTextArea.innerText = textArea.value;
            textArea.style.border = "none";
        }
        if (textTitle && divTitle) {
            textTitle.setAttribute("data-html2canvas-ignore", true);
            textTitle.style.display = "none";
            divTitle.style.display = "block";
            divTitle.innerText = textTitle.value;
        }
    };

    onAfterPrint = () => {
        document.getElementById(
            "printContainer"
        ).style.transform = `scale(${this.props.paperZoom})`;
        const textArea = document.querySelector("#prtstd-remark > textarea");
        const divTextArea = document.getElementById("text-behind");

        const textTitle = document.querySelector("#print-title");
        const divTitle = document.getElementById("print-title-behind");

        try {
            textArea.style.border = "1px solid #d5d5d5";
            textArea.style.display = "block";
            divTextArea.style.display = "none";
            divTextArea.innerText = "";

            textTitle.style.display = "block";
            divTitle.style.display = "none";
            divTitle.innerText = "";
        } catch (error) {
            console.log("after print");
        }
    };

    onClose = () => {
        return this.props.onClose();
    };

    isInRange = (e, n) => {
        return e >= n.min && e <= n.max;
    };

    locationToUTMZone = () => {
        const mapCenter = this.props.mapCenter;
        if (mapCenter?.y) {
            return this.isInRange(mapCenter?.y, {
                min: -80,
                max: 84,
            })
                ? `${(mapCenter?.x / 6 + 31) | 0} ${mapCenter?.y < 0 ? "S" : "N"}`
                : null;
        }
        return null;
    };

    getMapZoom = () => {
        const mapZoomElement = document.getElementById("footer-scalebar-container");
        const rulerSize = document.getElementsByClassName("ol-scale-line-inner")[0]
            ?.style.width;
        setTimeout(() => {
            var scale = mapZoomElement?.innerText;
            var rulerUnit = `${scale.replace(/\d/g, "")}`.trim();
            document.getElementById("ruler").style.width = rulerSize;
            document.getElementById("scale-1-4").innerText =
                Number.parseFloat(scale) / 4;
            document.getElementById("scale-1-2").innerText =
                Number.parseFloat(scale) / 2;
            document.getElementById("scale-1").innerText = Number.parseInt(scale, 10);
            document.getElementById("ruler-unit").innerText =
                rulerUnit === "km" ? "กม." : "ม";
        }, 1000);
    };

    onMapViewChanges = (center, zoom, bbox) => {
        return this.props.onMapViewChanges(center, zoom, bbox);
    };

    onChangeLayout = () => {
        return this.props.onChangeLayout();
    };

    onZoomControl = (e) => {
        const type = e.target.value;
        return this.props.onZoomControl(type);
    };

    onChangePrintTitle = () => {
        // const printMapName = e.target.value;
        // return this.props.onChangePrintTitle(printMapName)
    };

    render() {
        const layers = [
            {
                group: "background",
                id: "Label",
                loading: false,
                loadingError: false,
                name: "MapBackground",
                previousLoadingError: undefined,
                source: "graticule",
                title: "Open Street Map",
                type: "graticule",
                visibility: true,
                showLabels: true,
                labels: true,
            },
            ...this.props.layers,
        ];
        var groupBackgroundLayer = this.props.layers.filter((layer) => {
            return layer?.group === "background"
        })
        var _coordinateLatLon = [];
        if (this.props.bbox && this.props.bbox.bounds) {
            var minX = this.props.bbox.bounds.minx
            var maxY = this.props.bbox.bounds.maxy
            var maxX = this.props.bbox.bounds.maxx
            var minY = this.props.bbox.bounds.miny
            const boundingBox = [
                [minX, maxY],
                [maxX, maxY],
                [maxX, minY],
                [minX, minY],
                [minX, maxY]
            ]

            if (boundingBox.length > 0) {
                _coordinateLatLon = boundingBox.map((c) => {
                    var _toLatLon = coordinatetoLatLon(c)
                    return _toLatLon
                })
            }
        }
        groupBackgroundLayer.push({
            type: "vector",
            id: 'BoundindBox_mini_map',
            name: "mybbox",
            hideLoading: true,
            features: [{
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [_coordinateLatLon]
                },
                "style": [
                    {
                      "color": "#000000",
                      "opacity": 1,
                      "weight": 2,
                      "fillColor": "#ffffff",
                      "fillOpacity": 0.2,
                      "editing": { "fill": 1 },
                      "highlight": false,
                      "id": "bboxStyle"
                    }
                  ],
            }],
            visibility: true,
            title: "mybbox"
        })

        const isPortrait = this.props.layout !== "landscape";
        return this.props.show ? (
            <Dialog id="prtstd-dialog" style={this.dialogStyle} start={this.start}>
                <div key="header" role="header">
                    <Glyphicon glyph="print" />
                    &nbsp;Print Standard
                    <button key="close" onClick={this.onClose} className="close">
                        <Glyphicon glyph="1-close" />
                    </button>
                </div>
                <div
                    key="body"
                    role="body"
                    style={{
                        height: "70vh",
                        overflow: "scroll",
                        backgroundColor: "#525559",
                    }}
                >
                    <div>
                        <div className="control-paper">
                            <div>
                                <input
                                    type={"button"}
                                    value="-"
                                    className="btn btn-primary"
                                    onClick={this.onZoomControl}
                                />
                                &nbsp;&nbsp;
                                <input
                                    type={"button"}
                                    value="+"
                                    className="btn btn-primary"
                                    onClick={this.onZoomControl}
                                />
                                &nbsp;&nbsp;
                                <input
                                    type={"button"}
                                    value={isPortrait ? "Landscape" : "Portrait"}
                                    className="btn btn-primary"
                                    onClick={this.onChangeLayout}
                                />
                            </div>
                            &nbsp;&nbsp;
                            <div>
                                <button className="btn btn-success" onClick={this.onPrint}>
                                    <Glyphicon glyph="print" /> Print
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            transform: `scale(${this.props.paperZoom > 1 ? 1 : this.props.paperZoom
                                })`,
                        }}
                        id="printContainer"
                        className={`layout-a4-${isPortrait ? "portrait" : "landscape"}`}
                    >
                        <div id="prtstd-header">
                            <div className="logo left">
                                <img
                                    src={gistdaLogo}
                                    width={"100%"}
                                    style={{ marginTop: "1vh" }}
                                />
                            </div>
                            <div className="title">
                                <div>
                                    <input
                                        id="print-title"
                                        style={{
                                            textAlign: "center",
                                            border: "none",
                                            width: "400px",
                                        }}
                                        type="text"
                                        onKeyUp={this.onChangePrintTitle}
                                        placeholder={"แผนที่ไม่มีชื่อ"}
                                    />
                                    <div id="print-title-behind"></div>
                                </div>
                                <div id="address"></div>
                            </div>
                            <div className="logo right">
                                <img
                                    src={gistdaLogo}
                                    width={"100%"}
                                    style={{ marginTop: "1vh" }}
                                />
                            </div>
                        </div>
                        <div id="main-map-section">
                            <MapStandardPreview
                                mapRef="print_preview"
                                height={"600"}
                                width={"400"}
                                onMapViewChanges={this.onMapViewChanges}
                                resolutions={getResolutions()}
                                map={this.props.map}
                                layers={layers}
                                mapType={this.props.mapType}
                            />
                        </div>
                        <div id="prtstd-info">
                            <div id="prtstd-remark">
                                <label>รายละเอียด</label>
                                <textarea></textarea>
                                <div style={{ display: "none" }} id="text-behind"></div>
                            </div>
                            <div id="prtstd-symbol">
                                <div id="legend">
                                    <label>&nbsp;&nbsp;สัญลักษณ์</label>
                                    <div>
                                        <ul style={{ listStyle: "none", marginLeft: "-15px" }}>
                                            {this.props.layers.map((layer) => {
                                                if (layer.type === "wms") {
                                                    return (
                                                        <li>
                                                            <Legend
                                                                style={{ maxHeight: "56mm", maxWidth: "100%" }}
                                                                layer={layer}
                                                            />
                                                        </li>
                                                    );
                                                }
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div id="compass">
                                    <div id="compass-img">
                                        <img src={compassImages} width={"100%"} />
                                    </div>
                                    <div>
                                        มาตราส่วน{" "}
                                        <span id="ratio">
                                            1: {Math.ceil(getScales()[this.props.mapZoom])}
                                        </span>
                                    </div>
                                    <div>
                                        UTM : WGS1984 Zone
                                        <span id="zone">
                                            &nbsp;
                                            {this.locationToUTMZone()}
                                        </span>
                                    </div>
                                </div>
                                <div id="minimap">
                                    {this.props.miniMap ? (
                                        <MapStandardPreview
                                            mapRef="mini_print_preview"
                                            height={"600"}
                                            width={"400"}
                                            // onMapViewChanges={this.onMapViewChanges}
                                            resolutions={getResolutions()}
                                            map={this.props.miniMap}
                                            layers={groupBackgroundLayer}
                                            mapType={this.props.mapType}
                                        />
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* End of div  */}
                        <div id="prtstd-footer">
                            <div id="owner-name" className="footer-div">
                                สำนักงานพัฒนาเทคโนโลยีอวกาศ
                            </div>
                            <div id="ruler-container">
                                {this.getMapZoom()}
                                <div id="ruler" style={{ width: "100px" }}>
                                    <div className="small black">
                                        <span>0</span>
                                    </div>
                                    <div className="small"></div>
                                    <div className="small black">
                                        <span id="scale-1-4">2.5</span>
                                    </div>
                                    <div className="small"></div>
                                    <div className="large black">
                                        <span id="scale-1-2">5</span>
                                        <span id="scale-1">10</span>
                                    </div>
                                    <span id="ruler-unit">&nbsp; &nbsp;กม.</span>
                                </div>
                            </div>
                            <div id="base-map-name" className="footer-div">
                                วันที่จัดทำ: {new Date().toLocaleDateString("th-TH")}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        ) : null;
    }
}

const prtstd = connect(
    createSelector(
        [
            selector,
            (state) => {
                return state.layers;
            },
            (state) => {
                return get(state, "controls.prtstd.enabled");
            },
            (state) => {
                return state.map;
            },
        ],
        (state, layers, show, mapObj) => {
            return {
                ...state,
                layers: layerFilter(layers),
                show,
                map: extractMapObj(mapObj),
            };
        }
    ),
    {
        onClose: togglePrintingTool,
        onChangeLayout: changeLayout,
        onZoomControl: zoomControl,
        onMapViewChanges: mapViewChanges,
    },
    null,
    { pure: false }
)(PrintStandardComponent);

const changeMapViewPic = (action$, { getState = () => { } }) =>
    action$
        .ofType("PRTSTD:CHANGEMAP_VIEW")
        .filter(() => {
            return getState();
        })
        .switchMap(() => {
            const mapCenter = getState().prtstd.mapCenter;
            const mapZoom = getState().prtstd.mapZoom;
            const mapPreview = getState().prtstd.map;
            const mapPreviewBbox = getState().prtstd.bbox;
            return Rx.Observable.of(
                changeMapView(mapCenter, mapZoom),
                setMiniMapProperty(mapPreview)
            );
        });

const changeLayoutEpic = (action$, { getState = () => { } }) =>
    action$
        .ofType("PRTSTD:CHANGE_LAYOUT")
        .filter(() => {
            return getState();
        })
        .switchMap(() => {
            return Rx.Observable.from([resizeMap()]);
        });

const togglePrtStdEpic = (action$, { getState = () => { } }) =>
    action$
        .ofType(TOGGLE_PRINT_STD_CONTROL)
        .filter(() => {
            return getState();
        })
        .switchMap(() => {
            const onPrintDialogOpen = getState().controls.prtstd?.enabled;
            const mainMapObj = getState().map.present;
            return Rx.Observable.of(
                setControlProperty("prtstd", "enabled", ~onPrintDialogOpen),
                setMapProperty(mainMapObj)
            );
        });

export default {
    PrintStandardPlugin: assign(prtstd, {
        BurgerMenu: {
            name: "prtstd",
            position: 1,
            panel: false,
            help: "help",
            tooltip: "tooltip",
            text: "Print Standard",
            icon: <Glyphicon glyph="print" />,
            action: () => setControlProperty("prtstd", "enabled", true),
        },
    }),
    reducers: {
        prtstd: printStandardReducer,
    },
    epics: {
        changeMapViewPic,
        changeLayoutEpic,
        togglePrtStdEpic,
    },
};
