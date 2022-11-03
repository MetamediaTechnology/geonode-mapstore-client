import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {isEmpty} from 'lodash';
import localizedProps from '@mapstore/framework/components/misc/enhancers/localizedProps';
const SelectLocalized = localizedProps(['placeholder', 'clearValueText', 'noResultsText'])(Select);

const DisplaySelector = ({ responses, index, setIndex}) => {

    const selectProps = {clearable: false, isSearchable: true};
    const [options, setOptions] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(()=>{
        if (!isEmpty(responses)) {
            responses.reverse();
            setOptions(responses.map((opt, idx)=> {
                console.log(opt)
                const value = opt?.title;
                return {label: value, value, idx, style: {display: 'block'}};
            }));
        }
    }, [responses]);

    useEffect(()=>{
        setTitle(responses[index]?.title || "");
    }, [responses, index]);

    const onChange = (event) => {
        const idx = event?.idx || 0;
        setIndex(idx);
    };
    return (
        <div id="identify-layer-select" style={{flex: "1 1 0%"}}>
            <SelectLocalized
                {...selectProps}
                onChange={onChange}
                value={title || ""}
                options={options}
                noResultsText="Please choose a layer."
            />
        </div>
    );
};

DisplaySelector.defaultProps = {
    responses: [],
    index: -1
};

DisplaySelector.propTypes = {
    responses: PropTypes.array,
    setIndex: PropTypes.func,
    index: PropTypes.number
};

export default DisplaySelector;