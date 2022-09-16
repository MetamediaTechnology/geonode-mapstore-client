import assign from 'object-assign';
import PropTypes from 'prop-types';
import React from 'react';

import isNil from 'lodash/isNil';

/* ----------------
Global variable
-------------------*/
let PreviewMap;
let Layer;
let Feature;

class MapStandardPreview extends React.Component {

    static propTypes = {
        map: PropTypes.object,
        layers: PropTypes.array,
        style: PropTypes.object,
        height: PropTypes.string,
        width: PropTypes.string,
        onMapViewChanges: PropTypes.func,
        printRatio: PropTypes.number,
        resolutions: PropTypes.array,
        layoutSize: PropTypes.object,
        mapType: PropTypes.string
    };

    static defaultProps = {
        map: null,
        layers: [],
        mapType: "openlayers",
        printRatio: 96.0 / 72.0,
        layoutSize: {
            "width": 400,
            "height": 600
        },
        onMapViewChanges: () => {},
        style: { display: "block", border: "1px solid black", position: "relative" },
        width: 400,
        height: 600
    };

    UNSAFE_componentWillMount() {
        const mapComponents = require('@mapstore/framework/components/map/' + this.props.mapType + '/index').default;
        PreviewMap = mapComponents.LMap;
        Layer = mapComponents.LLayer;
        Feature = mapComponents.Feature;
        require('@mapstore/framework/components/map/' + this.props.mapType + '/plugins/index').default;
        const html2canvasLib = document.createElement('script');
        html2canvasLib.setAttribute('src', 'https://html2canvas.hertzen.com/dist/html2canvas.js');
        document.head.appendChild(html2canvasLib);
    }
    getRatio = () => {
        if (this.props.width && this.props.layoutSize && this.props.resolutions) {
            return this.props.layoutSize.width / this.props.width * this.props.printRatio;
        }
        return 1;
    };

    getResolutions = () => {
        if (this.props.width && this.props.layoutSize && this.props.resolutions) {
            return this.props.resolutions.map((resolution) => resolution * this.getRatio());
        }
        return this.props.resolutions;
    };

    renderLayerContent = (layer, projection) => {
        if (layer.features && layer.type === "vector") {
            return layer.features.map((feature) => {
                return (
                    <Feature
                        crs={projection}
                        key={feature.id}
                        type={feature.type}
                        geometry={feature.geometry}
                        features={feature.features}
                        msId={feature.id}
                        featuresCrs={layer.featuresCrs || 'EPSG:4326'}
                        layerStyle={layer.style}
                        style={feature.style || layer.style || null}
                        properties={feature.properties}
                    />
                );
            });
        }
        return null;
    };

    // onMapViewChanges = (map,zoom) => {

    // }

    render() {
        const style = assign({}, this.props.style, {
            width: '100%',
            height: '100%'
        });

        const resolutions = this.getResolutions();
        const projection = this.props.map && this.props.map.projection || 'EPSG:3857';
        const mapOptions = resolutions ? { view: { resolutions } } : {};
        const interactive = true;
        const zoomControl = true;
        return (<PreviewMap
            ref="mappa"
            id="print_preview"
            interactive={interactive}
            zoomControl={zoomControl}
            registerHooks={false}
            style={style}
            resize={this.props.height}
            mapOptions={mapOptions}
            center={this.props.map.center}
            onMapViewChanges={this.props.onMapViewChanges}
            {...this.props.map}
        >
            {this.props.layers.map((layer, index) =>
                (<Layer
                    key={layer.id || layer.name}
                    positi on={index}
                    type={layer.type}
                    options={assign({
                    // forceProxy: true
                    },
                    this.adjustResolution(layer),
                    { srs: projection })}
                >
                    {this.renderLayerContent(layer, projection)}
                </Layer>)
            )}
        </PreviewMap>);
    }

    adjustResolution = (layer) => {
        const ratio = this.getRatio();
        const dpi = Math.round(96.0 / ratio);
        return assign({}, layer, {
            ...(!isNil(layer?.minResolution) && { minResolution: layer.minResolution * ratio }),
            ...(!isNil(layer?.maxResolution) && { maxResolution: layer.maxResolution * ratio }),
            params: assign({}, layer.params, {
                "format_options": "dpi:" + dpi,
                "MAP.RESOLUTION": dpi
            })
        });
    };
}

export default MapStandardPreview;
