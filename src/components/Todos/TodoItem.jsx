import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background: white;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  justify-content: space-between;

  input[type="checkbox"] {
    margin-right: 1rem;
  }
`;

const StyledCategoryLabel = styled.span`
  background: #f5f5f5;
  border: 1px solid lightgrey;
  color: grey;
  border-radius: 0.2rem;
  padding: 0 0.5rem;
`;

function TodoItem(props) {
    const {item, handleItemChange} = props;

    return (
        <StyledItem>
            <input type="checkbox" checked={item.checked} onChange={() => handleItemChange(item.key, !item.checked)}/>
            <span>{item.text}</span>
            <StyledCategoryLabel>{item.category}</StyledCategoryLabel>
        </StyledItem>
    );
}

TodoItem.propTypes = {
    item: PropTypes.object,
    handleItemChange: PropTypes.func,
};

export default TodoItem;
