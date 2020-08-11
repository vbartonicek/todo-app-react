import React from 'react';
import PropTypes from 'prop-types';
import Select from "react-select";
import styled from "styled-components";

const StyledSelect = styled(Select)`
    min-width: 15rem;
    border-radius: 0.2rem;
`;

function FilterSelect(props) {
    const {categories, activeCategory, handleFilterChange} = props;

    // Prepare options
    const options = [];

    categories && categories.map(item => {
        options.push({label: item, value: item})
    });

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
        />
    );
}

FilterSelect.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    activeCategory: PropTypes.string,
    handleFilterChange: PropTypes.func,
};

export default FilterSelect;
