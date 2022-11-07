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
import url from "url";
import { createSelector } from "reselect";
import { getParsedGeoNodeConfiguration } from "@js/selectors/config";
import { userSelector } from "@mapstore/framework/selectors/security";
import { buildHrefByTemplate } from "@js/utils/MenuUtils";
import { searchResources, loadFeaturedResources } from "@js/actions/gnsearch";
import FeaturedList from "@js/components/FeaturedList";

import { hashLocationToHref } from "@js/utils/SearchUtils";
import { withResizeDetector } from "react-resize-detector";

import { getThemeLayoutSize } from "@js/utils/AppUtils";
import Message from "@mapstore/framework/components/I18N/Message";

import ConnectedCardGrid from "@js/routes/catalogue/ConnectedCardGrid";
import { getFeaturedResults, getTotalResources } from "@js/selectors/search";
import { canAddResource } from "@js/selectors/resource";
import DeleteResource from "@js/plugins/DeleteResource";
import SaveAs from "@js/plugins/SaveAs";
import Notifications from "@mapstore/framework/plugins/Notifications";
import { processResources, downloadResource } from "@js/actions/gnresource";
import { setControlProperty } from "@mapstore/framework/actions/controls";
import { featuredResourceDownload } from "@js/selectors/resourceservice";

import { getCategories, getTotalCountsAll } from "@js/api/geonode/v2";

function loadCategories() {
  return {
    type: "FETCH_CATEGORIES_DATA",
  };
}

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
  totalResources,
  fetchFeaturedResources = () => {},
  enabled,
}) {
  const cataloguePage = "/catalogue/";

  const { cardOptionsItemsAllowed } = config;

  const pageSize = getThemeLayoutSize(width);

  function handleUpdate(newParams, pathname) {
    const { query } = url.parse(location.search, true);
    onSearch({ ...query, ...newParams }, pathname);
  }

  function showMoreData() {
    const { query } = url.parse(location.search, true);
    if (!query.f) {
      window.location.href = `/catalogue/#/`;
      return;
    }
    window.location.href = `/catalogue/#/?f=${query.f}`;
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

  const [categories, setCategories] = useState([]);
  const [totalCount, setTotalCount] = useState({});

  const { query } = url.parse(location.search, true);

  useEffect(() => {
    getTotalCountsAll({}).then((data) => {
      setTotalCount(data);
    });
    getCategories(
      {
        with_response: "all",
      },
      "filter{category.identifier.in}"
    ).then((categories) => {
      setCategories(categories.results);
    });
    try {
      document.getElementById('datasets').click()
    } catch (error) {
      console.log("Can't click dataset")
    }
  }, []);

  const categoriesStyle = (str) => {
    return {
      width: "100px",
      height: "100px",
      textAlign: "center",
      padding: "15px 0",
      lineHeight: 1.42,
      borderRadius: "50%",
      backgroundColor: "#185787",
      color: "#FFF",
      fontSize: "2.7rem",
    };
  };

  return (
    <div className="gn-container">
      <div className="gn-row gn-home-section">
        <div className="gn-grid-container">
          {enabled ? (
            <div
              className="btn-shortcut"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                backgroundColor: "white",
                marginTop: "20px",
              }}
            >
              <div className="btn-group">
                <a
                  href="/catalogue/#/upload/dataset"
                  className="btn btn btn-lg btn-shortcut-marine"
                >
                  Upload dataset
                </a>
                <a
                  href="/catalogue/#/upload/document"
                  className="btn btn btn-lg btn-shortcut-marine"
                >
                  Upload document
                </a>
                <a
                  href="/catalogue/#/map/new"
                  className="btn btn btn-lg btn-shortcut-marine"
                >
                  Create map
                </a>
                <a
                  href="/catalogue/#/"
                  className="btn btn btn-lg btn-shortcut-marine"
                >
                  Other
                </a>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div
            className="gn-card-grid marine-list"
            style={{
              textAlign: "center",
            }}
          >
            <div
              className="gn-card-grid-container marine-summary"
              style={{ 
                paddingBottom:'50px',
                marginTop: "55px",
                borderBottom:'1px solid rgb(241 241 241)'
              }}
            >
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <div
                    className="category"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title=""
                  >
                    <p>
                      <a href="/catalogue/#/search/?f=dataset">
                        <i className="fa fa-square-o" style={{transform: 'rotate(45deg)'}}></i>
                      </a>
                    </p>
                    <h2>
                      <a href="/catalogue/#/search/?f=dataset">
                        {totalCount.resources || 0} Dataset
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className="category"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title=""
                  >
                    <p>
                      <a href="/catalogue/#/search/?f=map">
                        <i className="fa fa-map-marker"></i>
                      </a>
                    </p>
                    <h2>
                      <a href="/catalogue/#/search/?f=map">
                        {totalCount.maps || 0} Maps
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className="category"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title=""
                  >
                    <p>
                      <a href="/catalogue/#/?f=geostory&f=dashboard">
                        <i className="fa fa-dashboard"></i>
                      </a>
                    </p>
                    <h2>
                      <a href="/catalogue/#/?f=geostory&f=dashboard">
                        {totalCount.geoapp || 0} Geo-apps
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className="category"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title=""
                  >
                    <p>
                      <a href="/catalogue/#/?f=document">
                        <i className="fa fa-newspaper-o"></i>
                      </a>
                    </p>
                    <h2>
                      <a href="/catalogue/#/?f=document">
                        {totalCount.documents || 0} Documents
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className="category"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title=""
                  >
                    <p>
                      <a href="/people">
                        <i className="fa fa-users"></i>
                      </a>
                    </p>
                    <h2>
                      <a href="/people">{totalCount.users || 0} Users</a>
                    </h2>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
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
        <div className="gn-grid-container marine-list">
          <div className="gn-card-grid marine-list">
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ flex: "1 1 0%", width: "100%" }}>
                <div className="gn-card-grid-container">
                  <h3 style={{ fontSize: "1.5rem" }}>
                    <span>Layer by categories</span>
                  </h3>
                  <div id="layer-categories" style={{ margin: "10px" }}>
                    <div className="row">
                      {categories.length > 0
                        ? categories.map((categorie, index) => {
                            return (
                              <div className="col-xs-6 col-md-3">
                                <div
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    textAlign: "center",
                                    marginTop: "15px",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <a
                                    href={
                                      "/catalogue/#/?filter%7Bcategory.identifier.in%7D=" +
                                      categorie.identifier
                                    }
                                    style={categoriesStyle()}
                                    className="btn btn-lg"
                                  >
                                    <i
                                      className={"fa " + categorie.fa_class}
                                    ></i>
                                  </a>
                                  <div
                                    style={{ color: "grey", marginTop: "5px" }}
                                  >
                                    {categorie.gn_description?.length > 30
                                      ? categorie.gn_description.substring(
                                          0,
                                          20
                                        )
                                      : categorie.gn_description}
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                page: 1,
              });
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem" }}>
                <span>Resources</span>
              </h3>
              <ul
                className="nav nav-tabs marine-tab"
                id="resouce_list"
                style={{ marginLeft: "15px" }}
              >
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
          </ConnectedCardGrid>
          {totalResources > 12 ? (
            <div
              className="gn-card-grid"
              style={{ marginTop: "-50px", marginBottom: "20px" }}
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <a style={{ fontSize: "1.5rem" }} onClick={showMoreData}>
                        <Message msgId={"showMore"} />
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
  totalResources: PropTypes.object,
  fetchFeaturedResources: PropTypes.func,
  enabled: PropTypes.bool,
  categories: PropTypes.object,
};

Home.defaultProps = {
  onSearch: () => {},
  fetchFeaturedResources: () => {},
  categories: {},
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
