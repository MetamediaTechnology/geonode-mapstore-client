/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useState } from "react";
import Message from "@mapstore/framework/components/I18N/Message";
import FaIcon from "@js/components/FaIcon";
import Button from "@js/components/Button";
import Spinner from "@js/components/Spinner";
import {
  getResourceTypesInfo,
  getMetadataDetailUrl,
} from "@js/utils/ResourceUtils";
import ResourceStatus from "@js/components/ResourceStatus";
import ALink from "@js/components/ALink";
import AuthorInfo from "@js/components/AuthorInfo/AuthorInfo";
import ActionButtons from "@js/components/ActionButtons";

const ResourceCardModern = forwardRef(
  (
    {
      data,
      active,
      options,
      formatHref,
      getTypesInfo,
      layoutCardsStyle,
      buildHrefByTemplate,
      readOnly,
      actions,
      onAction,
      className,
      loading,
      featured,
      onClick,
      downloading,
      onDownload,
    },
    ref
  ) => {
    const res = data;
    const types = getTypesInfo();
    const { icon } = types[res.subtype] || types[res.resource_type] || {};
    const {
      formatDetailUrl = (resource) => resource?.detail_url,
      canPreviewed,
    } = (res && (types[res.subtype] || types[res.resource_type])) || {};
    const detailUrl = res?.pk && formatDetailUrl(res);
    const resourceCanPreviewed = res?.pk && canPreviewed && canPreviewed(res);
    const metadataDetailUrl = res?.pk && getMetadataDetailUrl(res);

    const [imgError, setImgError] = useState(false);

    function handleClick(event) {
       const eventAttr = event.target
        console.log(eventAttr)
       try {
        const detailUrl = eventAttr.getAttribute('link_detail')
        window.location.href = '/catalogue/#'+detailUrl
       } catch (error) {
        
       }
      // onClick(data);
    }

    function renderAbstract(text) {
        if(text) {
            try {
                return text.length > 150 ? `${text.substring(0,150)}...` : text
            } catch (error) {
                return '...'
            }
        } else {
            return '...'
        }
    }
    return (
      <div
        ref={ref}
        className={`gn-resource-card${active ? " active" : ""}${
          readOnly ? " read-only" : ""
        } gn-card-type-${layoutCardsStyle} ${
          layoutCardsStyle === "list" ? "rounded-0" : ""
        }${className ? ` ${className}` : ""}`}
      >
        {!readOnly && (
          <a
            className="gn-resource-card-link"
            href={formatHref({
              pathname: `/detail/${res.resource_type}/${res.pk}`,
            })}
          />
        )}
        {!readOnly &&
          options &&
          options.length > 0 && (
            <ActionButtons
              buildHrefByTemplate={buildHrefByTemplate}
              actions={actions}
              resource={res}
              options={options}
              readOnly={readOnly}
              onAction={onAction}
              onDownload={onDownload}
            />
          )}
        <div
          onClick={handleClick}
          link_detail={`/detail/${res.resource_type}/${res.pk}`}
          className="sphere-featured-card has-bg-img"
          style={
            res.thumbnail_url
              ? {
                  backgroundSize:'cover',
                  backgroundImage: `linear-gradient(0deg, rgba(0, 54, 99, 1), rgba(0, 54, 99, 0.2)), url(${res.thumbnail_url}`,
                }
              : {}
          }
        >
          <span className="card__title">
            {(icon && !loading && !downloading) && (
                                    <>
                                        <ALink
                                            readOnly={readOnly}
                                            href={formatHref({
                                                query: {
                                                    'filter{resource_type.in}':
                                                    res.resource_type
                                                }
                                            })}
                                        >
                                            <FaIcon name={icon} />
                                        </ALink>
                                    </>
            )} &nbsp;
            <ALink
              className={featured ? "gn-featured-card-title" : "gn-card-title"}
              readOnly={readOnly}
              href={formatHref({
                pathname: `/detail/${res.resource_type}/${res.pk}`,
              })}
            >
              {res.title}
            </ALink>
            <p className="card__description">
              {renderAbstract(res.raw_abstract)}
            </p>
          </span>
        </div>
      </div>
    );
  }
);

ResourceCardModern.defaultProps = {
  links: [],
  theme: "light",
  getTypesInfo: getResourceTypesInfo,
  formatHref: () => "#",
  featured: false,
  onClick: () => {},
};

export default ResourceCardModern;
