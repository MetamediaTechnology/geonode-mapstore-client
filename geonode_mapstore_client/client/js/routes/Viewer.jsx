/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useMemo,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import url from 'url';
import isArray from 'lodash/isArray';
import { getMonitoredState } from '@mapstore/framework/utils/PluginsUtils';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import PluginsContainer from '@mapstore/framework/components/plugins/PluginsContainer';
import useLazyPlugins from '@js/hooks/useLazyPlugins';
import {
    requestResourceConfig,
    requestNewResourceConfig,
    editBannerResource,
    setResourceBanner
} from '@js/actions/gnresource';
import { userSelector } from '@mapstore/framework/selectors/security';
import MetaTags from '@js/components/MetaTags';
import MainEventView from '@js/components/MainEventView';
import ViewerLayout from '@js/components/ViewerLayout';
import { createShallowSelector } from '@mapstore/framework/utils/ReselectUtils';

const urlQuery = url.parse(window.location.href, true).query;

const ConnectedPluginsContainer = connect(
    createShallowSelector(
        state => urlQuery.mode || (urlQuery.mobile || state.browser && state.browser.mobile ? 'mobile' : 'desktop'),
        state => getMonitoredState(state, getConfigProp('monitorState')),
        state => state?.controls,
        (mode, monitoredState, controls) => ({
            mode,
            monitoredState,
            pluginsState: controls
        })
    )
)(PluginsContainer);

const DEFAULT_PLUGINS_CONFIG = [];

function getPluginsConfiguration(name, pluginsConfig) {
    if (!pluginsConfig) {
        return DEFAULT_PLUGINS_CONFIG;
    }
    if (isArray(pluginsConfig)) {
        return pluginsConfig;
    }
    const { isMobile } = getConfigProp('geoNodeSettings') || {};
    if (isMobile && pluginsConfig) {
        return pluginsConfig[`${name}_mobile`] || pluginsConfig[name] || DEFAULT_PLUGINS_CONFIG;
    }
    return pluginsConfig[name] || DEFAULT_PLUGINS_CONFIG;
}

function ViewerRoute({
    name,
    user,
    pluginsConfig: propPluginsConfig,
    params,
    onUpdate,
    onCreate = () => {},
    onResourceBanner = () => {},
    onEditBanner = () => {},
    loaderComponent,
    lazyPlugins,
    plugins,
    match,
    resource,
    siteName,
    resourceType,
    loadingConfig,
    configError
}) {

    const { pk } = match.params || {};
    const pluginsConfig = getPluginsConfiguration(name, propPluginsConfig);

    const { plugins: loadedPlugins, pending } = useLazyPlugins({
        pluginsEntries: lazyPlugins,
        pluginsConfig
    });
    useEffect(() => {
        if (!pending && pk !== undefined) {
            if (pk === 'new') {
                onCreate(resourceType);
            } else {
                onUpdate(resourceType, pk, {
                    page: name
                });
            }
        }
    }, [pending, pk]);

    const loading = loadingConfig || pending;
    const parsedPlugins = useMemo(() => ({ ...loadedPlugins, ...plugins }), [loadedPlugins]);
    const Loader = loaderComponent;
    const className = `page-${resourceType}-viewer`;

    useEffect(() => {
        // set the correct height of navbar
        const mainHeader = document.querySelector('.gn-main-header');
        const mainHeaderPlaceholder = document.querySelector('.gn-main-header-placeholder');
        const topbar = document.querySelector('#gn-topbar');
        function resize() {
            if (mainHeaderPlaceholder && mainHeader) {
                mainHeaderPlaceholder.style.height = mainHeader.clientHeight + 'px';
            }
            if (topbar && mainHeader) {
                topbar.style.top = mainHeader.clientHeight + 'px';
            }
        }
        // hide the naviagtion bar is a recource is being viewed
        if (!loading) {
            document.getElementById('gn-topbar')?.classList.add('hide-navigation');
            document.getElementById('sphere-header')?.classList.add('hide-sphere-header')
            document.getElementById('gn-brand-navbar-bottom')?.classList.add('hide-search-bar');
            resize();
        }
        return () => {
            document.getElementById('gn-topbar')?.classList.remove('hide-navigation');
            document.getElementById('sphere-header')?.classList.remove('hide-sphere-header')
            document.getElementById('gn-brand-navbar-bottom')?.classList.remove('hide-search-bar');
            resize();
        };
    }, [loading]);

    const [file, setFile] = useState();
    const [bannerDefault,setBannerDefault] = useState();


    const handleResourceBannerlUpdate = () => {
        onEditBanner(file)
        onResourceBanner()
        setFile('')
    };
    const handleCancelUpload = () => {
        setFile(bannerDefault)
        setFile('')
    }

    const onClickUplodaBanner = () => {
        document.getElementById('banner-input').click()
    }

    function getFilesFromEvent(e) {
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        toBase64(e.target.files[0]).then((image) => {
            setFile(image)
        })
    }

    const bannerBtnCtrl = () => {
        if(user?.is_staff || user?.is_admin) {
            if(!file) {
                return (
                    <ul className="nav navbar-nav navbar-right banner-action">
                        <li>
                            <a onClick={onClickUplodaBanner} className='btn btn-xs'>
                                <i className="glyphicon glyphicon-pencil"></i>
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a onClick={onClickRemoveBanner} className='btn btn-xs'>*/}
                        {/*        <i className="glyphicon glyphicon-trash"></i>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                )
            } else {
                return (
                    <ul className="nav navbar-nav navbar-right banner-action">
                        <li>
                            <a onClick={handleResourceBannerlUpdate} className='btn btn-xs'>Save</a>
                        </li>
                        <li>
                            <a onClick={handleCancelUpload} className={'btn btn-xs'}>Cancel</a>
                        </li>
                    </ul>
                )
            }
        } else {
            return (<a></a>)
        }
    }

    const TopBanner = ({banner_url}) => {
        const imageUrl = file ? file : banner_url
        setBannerDefault(banner_url)
        const bannerStyle = {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover'
        }
        return (
           <nav id="sphere-map-header" style={bannerStyle} className="navbar navbar-default navbar-map-header">
                <input
                    style={{ display: 'none' }}
                    id={'banner-input'}
                    type="file"
                    multiple
                    onChange={getFilesFromEvent}
                />
                <ul className="nav navbar-nav">
                    <li><a href="#"><i className="glyphicon glyphicon-backward"></i></a></li>
                    <li><a style={{marginTop:'5px'}} id="map-title">{resource?.title || 'Create new map'}</a></li>
                </ul>
               {bannerBtnCtrl()}
            </nav>)
    }

    return (
        <>
            <TopBanner banner_url={resource?.banner_url}/>
            {resource && <MetaTags
                logo={resource.thumbnail_url}
                title={(resource?.title) ? `${resource?.title} - ${siteName}` : siteName }
                siteName={siteName}
                contentURL={resource?.detail_url}
                content={resource?.abstract}
            />}
            {!loading && <ConnectedPluginsContainer
                key={className}
                id={className}
                className={className}
                component={ViewerLayout}
                pluginsConfig={pluginsConfig}
                plugins={parsedPlugins}
                params={params}
            />}
            {loading && Loader && <Loader />}
            {configError && <MainEventView msgId={configError}/>}
        </>
    );
}

ViewerRoute.propTypes = {
    onUpdate: PropTypes.func
};

const ConnectedViewerRoute = connect(
    createSelector([
        state => state?.gnresource?.data,
        state => state?.gnsettings?.siteName || 'GeoNode',
        state => state?.gnresource?.loadingResourceConfig,
        state => state?.gnresource?.configError,
        userSelector
    ], (resource, siteName, loadingConfig, configError,user) => ({
        resource,
        siteName,
        loadingConfig,
        configError,
        user
    })),
    {
        onUpdate: requestResourceConfig,
        onCreate: requestNewResourceConfig,
        onEditBanner: editBannerResource,
        onResourceBanner: setResourceBanner

    }
)(ViewerRoute);

ConnectedViewerRoute.displayName = 'ConnectedViewerRoute';

export default ConnectedViewerRoute;
