import React from 'react';
import PropTypes from 'prop-types';
import Select from "react-select";
import styled from "styled-components";
import ImmutablePropTypes from "react-immutable-proptypes";

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

function FilterSelect(props) {
    const {categories, activeCategory, handleFilterChange} = props;

    // React-select requires array of <label:string, value:string>
    const options = [];

    categories && categories.map(item => {
        options.push({label: item, value: item})
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
            onChange={handleFilterChange}
            options={options}
            searchable={false}
            isClearable={true}
            placeholder="Filter category"
            styles={customStyles}
        />
    );
}

FilterSelect.propTypes = {
    categories: ImmutablePropTypes.set,
    activeCategory: PropTypes.string,
    handleFilterChange: PropTypes.func,
};

export default FilterSelect;
