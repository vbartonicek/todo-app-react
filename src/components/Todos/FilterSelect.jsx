import React from 'react';
import PropTypes from 'prop-types';
import Select from "react-select";
import styled from "styled-components";
import ImmutablePropTypes from "react-immutable-proptypes";
import {connect} from "react-redux";
import {setActiveCategory} from "../../actions/actions";

const StyledSelect = styled(Select)`
    min-width: 15rem;
    border-radius: 0.2rem;
`;

// Workaround for setting cursor:pointer to react-select component
const customStyles = {
    option: (styles) => ({
        ...styles,
        cursor: 'pointer',
    }),
    control: (styles) => ({
        ...styles,
        cursor: 'pointer',
    }),
};

const FilterSelect = ({categories, activeCategory, setActiveCategory}) => {
    // React-select requires array of <label:string, value:string>
    const options = [];

    categories && categories.map(item => {
        return options.push({label: item, value: item})
    });

    // Prepare active category into required <label:string, value:string> format
    const activeValue = activeCategory ? {
        label: activeCategory,
        value: activeCategory
    } : null;

    return (
        <StyledSelect
            name="order"
            value={activeValue}
            required={false}
            isDisabled={!categories.size}
            onChange={setActiveCategory}
            options={options}
            searchable={false}
            isClearable={true}
            placeholder="Filter category"
            styles={customStyles}
        />
    )
}

FilterSelect.propTypes = {
    categories: ImmutablePropTypes.set,
    activeCategory: PropTypes.string,
    setActiveCategory: PropTypes.func,
};

export default connect(
    ({categories, activeCategory}) => ({categories: categories, activeCategory: activeCategory}),
    (dispatch) => ({
        setActiveCategory: (activeCategory) => dispatch(setActiveCategory(activeCategory))
    })
)(FilterSelect);
