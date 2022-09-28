/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { connect, createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { createSelector } from 'reselect';
import { userSelector } from '@mapstore/framework/selectors/security';
import {
    editBannerResource,
    setResourceBanner
} from '@js/actions/gnresource';
import ActionNavbar from '@js/components/ActionNavbar';
import usePluginItems from '@js/hooks/usePluginItems';
import {
    getResourcePerms,
    canAddResource,
    getResourceData,
    getResourceDirtyState,
    getSelectedLayerPermissions,
    isNewResource
} from '@js/selectors/resource';
import { hasPermissionsTo, reduceArrayRecursive } from '@js/utils/MenuUtils';

function checkResourcePerms(menuItem, resourcePerms) {
    if (menuItem.disableIf) {
        return false;
    }
    if (menuItem.type && menuItem.perms) {
        return hasPermissionsTo(resourcePerms, menuItem.perms, 'resource');
    }
    return true;
}

function ActionNavbarPlugin(
    {
        user,
        items,
        leftMenuItems,
        rightMenuItems,
        resourcePerms,
        resource,
        isDirtyState,
        selectedLayerPermissions,
        titleItems,
        disableTitle,
        onEditBanner,
        onResourceBanner
    },
    context
) {
    const { loadedPlugins } = context;
    const configuredItems = usePluginItems({ items, loadedPlugins }, [
        resource?.pk,
        selectedLayerPermissions
    ]);

    const leftMenuItemsPlugins = reduceArrayRecursive(leftMenuItems, (item) => {
        configuredItems.find((plugin) => {
            if (item.type === 'plugin' && plugin.name === item.name) {
                item.Component = plugin?.Component;
            }
        });

        item.className =
            item.showPendingChangesIcon && isDirtyState
                ? 'gn-pending-changes-icon'
                : '';
        return item;
    });

    const rightMenuItemsPlugins = reduceArrayRecursive(
        rightMenuItems,
        (item) => {
            configuredItems.find((plugin) => {
                if (item.type === 'plugin' && plugin.name === item.name) {
                    item.Component = plugin?.Component;
                }
            });
            return item;
        }
    );

    const titleItemsPlugins = reduceArrayRecursive(titleItems, (item) => {
        configuredItems.find((plugin) => {
            if (item.type === 'plugin' && plugin.name === item.name) {
                item.Component = plugin?.Component;
            }
        });
        return item;
    });

    const leftItems = reduceArrayRecursive(leftMenuItemsPlugins, (menuItem) =>
        checkResourcePerms(menuItem, resourcePerms)
    );

    const rightItems = reduceArrayRecursive(rightMenuItemsPlugins, (menuItem) =>
        checkResourcePerms(menuItem, resourcePerms)
    );

    const titleNavbarItems = reduceArrayRecursive(
        titleItemsPlugins,
        (menuItem) => checkResourcePerms(menuItem, resourcePerms)
    );

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
                { bannerBtnCtrl() }
            </nav>)
    }

    return (
        <div>
            <TopBanner banner_url={resource?.banner_url}/>
            <ActionNavbar
                leftItems={leftItems}
                rightItems={rightItems}
                variant="primary"
                size="sm"
                resource={resource}
                titleItems={titleNavbarItems}
                disableTitle={disableTitle}
            />
        </div>
    );
}

ActionNavbarPlugin.propTypes = {
    items: PropTypes.array,
    leftMenuItems: PropTypes.array,
    rightMenuItems: PropTypes.array,
    onResourceBanner: PropTypes.func,
    onEditBanner: PropTypes.func,
    user: PropTypes.object,
    titleItems: PropTypes.array
};

ActionNavbarPlugin.defaultProps = {
    items: [],
    leftMenuItems: [],
    rightMenuItems: [],
    onResourceBanner:() => {},
    onEditBanner: () => {},
    user: {},
    titleItems: []
};

const ConnectedActionNavbarPlugin = connect(
    createSelector([
            getResourcePerms,
            canAddResource,
            getResourceData,
            getResourceDirtyState,
            getSelectedLayerPermissions,
            isNewResource,
            userSelector
        ],(
            resourcePerms,
            userCanAddResource,
            resource,
            dirtyState,
            selectedLayerPermissions,
            newResource,
            user
        ) => ({
            resourcePerms: resourcePerms.length > 0 ? resourcePerms : userCanAddResource ? ['change_resourcebase'] : [],
            resource,
            isDirtyState: !!dirtyState,
            selectedLayerPermissions,
            disableTitle: newResource,
            user
        })
    ),{
        onEditBanner: editBannerResource,
        onResourceBanner: setResourceBanner
    }
)(ActionNavbarPlugin);

export default createPlugin('ActionNavbar', {
    component: ConnectedActionNavbarPlugin,
    containers: {},
    epics: {},
    reducers: {}
});
