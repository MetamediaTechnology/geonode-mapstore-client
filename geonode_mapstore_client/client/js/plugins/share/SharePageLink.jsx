/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import Button from '@js/components/Button';
import FaIcon from '@js/components/FaIcon/FaIcon';
import {
    ShareButtons,
    generateShareIcon
} from 'react-share';
// components of the socialnetworks grouped in a bigger container aka ShareSocials
const {
    FacebookShareButton,
    TwitterShareButton
} = ShareButtons;
import CopyToClipboard from 'react-copy-to-clipboard';

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

function SharePageLink({label, url}) {
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
    }, [copied]);
    const title = 'Hello'
    return (
        <div className="gn-share-link-pad">
            <div className="gn-share-link-wrapper">
                <div className="gn-share-page-link">
                    <label className="gn-share-title">{label}</label>
                    <div className="gn-share-link">
                        <input
                            readOnly
                            rel="noopener noreferrer"
                            target="_blank"
                            value={url}
                        />
                        {!copied && <CopyToClipboard
                            text={url}
                        >
                            <Button
                                size="sm"
                                onClick={() => setCopied(true)}
                            >
                                <FaIcon name="copy" />
                            </Button>
                        </CopyToClipboard>}
                        {copied && <Button size="sm"><FaIcon name="check" /></Button>}
                        <FacebookShareButton
                            url={url}
                            quote={title}
                            style={{ margin: '5px'}}
                            >
                            <FacebookIcon
                                size={16}
                                round />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={url}
                            title={title}
                            style={{ margin: '5px'}}>
                            <TwitterIcon
                                size={16}
                                round />
                        </TwitterShareButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharePageLink;
