/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Glyphicon } from 'react-bootstrap';
import url from "url";
import { createSelector } from "reselect";
import FiltersMenu from "@js/components/FiltersMenu";
import { getParsedGeoNodeConfiguration } from "@js/selectors/config";
import { userSelector } from "@mapstore/framework/selectors/security";
import { buildHrefByTemplate } from "@js/utils/MenuUtils";
import { searchResources, loadFeaturedResources } from "@js/actions/gnsearch";
import { canAddResource } from "@js/selectors/resource";
import FeaturedList from "@js/components/FeaturedList";

import {
  hashLocationToHref,
  clearQueryParams,
  getQueryFilters,
} from "@js/utils/SearchUtils";
import { withResizeDetector } from "react-resize-detector";

import { getThemeLayoutSize } from "@js/utils/AppUtils";

import ConnectedCardGrid from "@js/routes/catalogue/ConnectedCardGrid";
import { getFeaturedResults, getTotalResources } from "@js/selectors/search";
import DeleteResource from "@js/plugins/DeleteResource";
import SaveAs from "@js/plugins/SaveAs";
import Notifications from "@mapstore/framework/plugins/Notifications";
import { processResources, downloadResource } from "@js/actions/gnresource";
import { setControlProperty } from "@mapstore/framework/actions/controls";
import { featuredResourceDownload } from "@js/selectors/resourceservice";

const { DeleteResourcePlugin } = DeleteResource;
const { SaveAsPlugin } = SaveAs;
const { NotificationsPlugin } = Notifications;

const ConnectedFeatureList = connect(
  createSelector(
    [
      getFeaturedResults,
      (state) => state?.gnsearch?.featuredResources?.page || 1,
      (state) =>
        state?.gnsearch?.featuredResources?.isNextPageAvailable || false,
      (state) =>
        state?.gnsearch?.featuredResources?.isPreviousPageAvailable || false,
      (state) => state?.gnsearch?.featuredResources?.loading || false,
      getParsedGeoNodeConfiguration,
      featuredResourceDownload,
    ],
    (
      resources,
      page,
      isNextPageAvailable,
      isPreviousPageAvailable,
      loading,
      { cardOptionsItemsAllowed },
      downloading
    ) => ({
      resources,
      page,
      isNextPageAvailable,
      isPreviousPageAvailable,
      loading,
      cardOptions: cardOptionsItemsAllowed,
      downloading,
    })
  ),
  {
    loadFeaturedResources,
    onAction: processResources,
    onControl: setControlProperty,
    onDownload: downloadResource,
  }
)(FeaturedList);

function Home({
  location,
  params,
  onSearch,
  config,
  user,
  width,
  canAddResource,
  totalResources,
  fetchFeaturedResources = () => {},
  loading,
}) {
  const cataloguePage = "/catalogue/";

  const { filterMenuItemsAllowed, cardOptionsItemsAllowed, filters } = config;

  const pageSize = getThemeLayoutSize(width);

  const handleShowFilterForm = () => {
    window.location = `${cataloguePage}#/search/filter/${location.search}`;
  };


  function showMoreData() {
    const { query } = url.parse(location.search, true);
    if (!query.f) {
      window.location.href = `/catalogue/#/`;
      return;
    }
    window.location.href = `/catalogue/#/?f=${query.f}`;
  }

  function handleUpdate(newParams, pathname) {
    const { query } = url.parse(location.search, true);
    onSearch(
      {
        ...query,
        ...newParams,
      },
      pathname
    );
  }

  useEffect(() => {
    try {
      document.getElementById('datasets').click()
    } catch (error) {
      console.log("Can't click dataset")
    }
  }, []);

  function searchData(e) {
    const resouceList = document.querySelectorAll(".resouce-tab");
    for (var i = 0; i < resouceList.length; i++) {
      resouceList[i].classList.remove("active");
    }
    const search = e.target.getAttribute("data-search");
    const query = {
      f: [search],
    };
    const newParams = "";
    const pathname = "";
    onSearch({ ...query, ...newParams }, pathname);
    e.target.parentNode.classList.add("active");
  }
  function handleFormatHref(options) {
    return (
      cataloguePage +
      hashLocationToHref({
        location,
        ...options,
      })
    );
  }

  function handleClear() {
    const newParams = clearQueryParams(location);
    handleUpdate(newParams);
  }

  function handleFormatHref(options) {
    return (
      cataloguePage +
      hashLocationToHref({
        location,
        ...options,
      })
    );
  }

  const { query } = url.parse(location.search, true);
  const queryFilters = getQueryFilters(query);

  return (
    <div className="gn-container">
      <div className="gn-row gn-home-section">
        <div className="gn-grid-container">
          {canAddResource ? (
            <div className="add-resource-shortcut">
              <div className="btn-group">
                <a href="/catalogue/#/upload/dataset">
                  <button className="sphere-btn-modern">
                      <div style={{ display:'flex'}}>
                        <img style={{ width:'20px',marginRight:'5px'}} src="/static/mapstore/img/icon/new-dataset.svg" alt="" />
                        <div>New Dataset</div>
                      </div>
                  </button>
                </a>
                <a href="/catalogue/#/map/new">
                  <button className="sphere-btn-modern">
                    <div style={{ display:'flex'}}>
                        <img style={{ width:'20px',marginRight:'5px'}} src="/static/mapstore/img/icon/new-map.svg" alt="" />
                        <div>New Map</div>
                      </div>
                  </button>
                </a>
                <a href="/catalogue/#/dashboard/new">
                  <button className="sphere-btn-modern">
                    <div style={{ display:'flex'}}>
                        <img style={{ width:'20px',marginRight:'5px'}} src="/static/mapstore/img/icon/new-dashboard.svg" alt="" />
                        <div>New Dashboard</div>
                      </div>
                  </button>
                </a>
                <a href="/catalogue/#/geostory/new">
                  <button className="sphere-btn-modern">
                    <div style={{ display:'flex'}}>
                        <img style={{ width:'20px',marginRight:'5px'}} src="/static/mapstore/img/icon/new-geostory.svg" alt="" />
                        <div>New GeoStory</div>
                      </div>
                  </button>
                </a>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <ConnectedFeatureList
            query={query}
            formatHref={handleFormatHref}
            buildHrefByTemplate={buildHrefByTemplate}
            onLoad={fetchFeaturedResources}
            containerStyle={{
              minHeight: "auto",
            }}
          />
        </div>
      </div>
      <div className="gn-row">
        <div className="gn-grid-container">
          <ConnectedCardGrid
            user={user}
            query={query}
            pageSize={5}
            cardOptions={cardOptionsItemsAllowed}
            buildHrefByTemplate={buildHrefByTemplate}
            page={params.page ? parseFloat(params.page) : 1}
            formatHref={handleFormatHref}
            onLoad={(value) => {
              handleUpdate({
                page: 1,
              });
            }}
          >
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.5rem" }}>
                <span >Resources</span>
              </h3>
              <ul className="nav nav-tabs sphere-home-tab" id="resouce_list" style={{ marginLeft:'15px'}}>
                <li className="resouce-tab">
                  <a data-search="dataset" id="datasets" onClick={searchData}>
                    Datasets
                  </a>
                </li>
                <li className="resouce-tab">
                  <a data-search="map" onClick={searchData}>
                    Maps
                  </a>
                </li>
                <li className="resouce-tab">
                  <a data-search="dashboard" onClick={searchData}>
                    Dashboard
                  </a>
                </li>
                <li className="resouce-tab">
                  <a data-search="geostory" onClick={searchData}>
                    GeoStories
                  </a>
                </li>
              </ul>
            </div>
            <FiltersMenu
              formatHref={handleFormatHref}
              cardsMenu={filterMenuItemsAllowed || []}
              order={query?.sort}
              onClear={handleClear}
              onClick={handleShowFilterForm}
              orderOptions={filters?.order?.options}
              defaultLabelId={filters?.order?.defaultLabelId}
              totalResources={totalResources}
              totalFilters={queryFilters.length}
              filtersActive={!!(queryFilters.length > 0)}
              loading={loading}
            />
          </ConnectedCardGrid>
          {totalResources > 12 ? (
            <div
              className="gn-card-grid"
              style={{marginBottom: "20px" }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <div style={{ flex: 1, width: "100%" }}>
                  <div
                    className="gn-card-grid-container"
                    style={{ minHeight: "5vh" }}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <a style={{ fontSize: "1.5rem",cursor:'pointer' }} onClick={showMoreData}>
                        Show more.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <DeleteResourcePlugin redirectTo={false} />
      <SaveAsPlugin closeOnSave labelId="gnviewer.clone" />
      <NotificationsPlugin />
    </div>
  );
}

Home.propTypes = {
  location: PropTypes.object,
  params: PropTypes.object,
  onSearch: PropTypes.func,
  config: PropTypes.object,
  user: PropTypes.object,
  width: PropTypes.number,
  totalResources: PropTypes.number,
  canAddResource: PropTypes.bool,
  fetchFeaturedResources: PropTypes.func,
};

Home.defaultProps = {
  onSearch: () => {},
  fetchFeaturedResources: () => {},
};

const DEFAULT_PARAMS = {};

const ConnectedHome = connect(
  createSelector(
    [
      (state) => state?.gnsearch?.params || DEFAULT_PARAMS,
      userSelector,
      getParsedGeoNodeConfiguration,
      getTotalResources,
      canAddResource,
      (state) => state?.gnsearch?.loading || false,
    ],
    (params, user, config, totalResources, canAddResource, loading) => ({
      params,
      user,
      config,
      totalResources,
      canAddResource,
      loading,
    })
  ),
  {
    onSearch: searchResources,
    fetchFeaturedResources: loadFeaturedResources,
  }
)(withResizeDetector(Home));

export default ConnectedHome;
