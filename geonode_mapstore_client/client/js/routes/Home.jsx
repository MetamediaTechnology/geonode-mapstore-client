/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import url from "url";
import { createSelector } from "reselect";
import { getParsedGeoNodeConfiguration } from "@js/selectors/config";
import { userSelector } from "@mapstore/framework/selectors/security";
import { buildHrefByTemplate } from "@js/utils/MenuUtils";
import { searchResources, loadFeaturedResources } from "@js/actions/gnsearch";
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
import { canAddResource } from "@js/selectors/resource";
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
  fetchFeaturedResources = () => {},
  enabled
}) {
  const cataloguePage = "/catalogue/";

  const { cardOptionsItemsAllowed } = config;

  const pageSize = getThemeLayoutSize(width);

  // const handleShowFilterForm = () => {
  //   window.location = `${cataloguePage}#/search/filter/${location.search}`;
  // };

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
    onSearch(
      {
        ...query,
        ...newParams,
      },
      pathname
    );
    // Active tab
    e.target.parentNode.classList.add("active");
  }

  // function handleClear() {
  //   const newParams = clearQueryParams(location);
  //   handleUpdate(newParams);
  // }

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

  return (
    <div className="gn-container">
      <div className="gn-row gn-home-section">
        <div className="gn-grid-container">
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
            pageSize={pageSize}
            cardOptions={cardOptionsItemsAllowed}
            buildHrefByTemplate={buildHrefByTemplate}
            page={params.page ? parseFloat(params.page) : 1}
            formatHref={handleFormatHref}
            onLoad={(value) => {
              handleUpdate({
                page: value,
              });
            }}
          >
            {enabled ? (
              <div style={{ display: "flex", justifyContent: "center" ,padding:'10px'}}>
                <div className="btn-group">
                  <a href="/catalogue/#/upload/dataset" className="btn btn btn-lg" style={{ border: '1px solid currentColor'}}>
                    อัปโหลดชุดข้อมูล
                  </a>
                  <a href="/catalogue/#/upload/document" className="btn btn btn-lg" style={{ border: '1px solid currentColor',marginLeft:'5px'}}>
                    อัปโหลดเอกสาร
                  </a>
                  <a href="/catalogue/#/map/new" className="btn btn btn-lg" style={{ border: '1px solid currentColor',marginLeft:'5px'}}>
                    สร้างแผนที่
                  </a>
                  <a href="/catalogue/#/" className="btn btn btn-lg" style={{ border: '1px solid currentColor',marginLeft:'5px'}}>
                    อื่นๆ
                  </a>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div>
              <h3>
                <span>Resources</span>
              </h3>
              <ul
                className="nav nav-tabs marine-tab"
                id="resouce_list"
                style={{ marginLeft: "15px" }}
              >
                <li className="resouce-tab">
                  <a data-search="dataset" onClick={searchData}>
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
          </ConnectedCardGrid>
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
  totalResources: PropTypes.object,
  fetchFeaturedResources: PropTypes.func,
  enabled: PropTypes.bool,
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
      (state) => state?.gnsearch?.loading || false,
      canAddResource,
    ],
    (params, user, config, totalResources, loading, canAddResource) => ({
      params,
      user,
      config,
      totalResources,
      loading,
      enabled: canAddResource,
    })
  ),
  {
    onSearch: searchResources,
    fetchFeaturedResources: loadFeaturedResources,
  }
)(withResizeDetector(Home));

export default ConnectedHome;