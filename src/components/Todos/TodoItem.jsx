import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from "react-redux";
import {toggleItem} from "../../actions/actions";

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  align-items: center;
  background: white;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  word-break: break-all;

  input[type="checkbox"] {
    margin-right: 1rem;
    cursor: pointer;
    width: 1rem;
  }
`;

const StyledCategoryLabel = styled.span`
  background: #f5f5f5;
  border: 1px solid lightgrey;
  color: grey;
  border-radius: 0.2rem;
  padding: 0 0.5rem;
  margin-left: 1rem;
  width: calc(30% - 1rem);
  text-align: center;
`;

const StyledTaskLabel = styled.span`
  width: calc(70% - 1rem);
`;

const TodoItem = ({item, toggleItem}) => {
    return (
        <StyledItem>
            <input
                type="checkbox"
                checked={item.get('checked')}
                onChange={() => toggleItem(item.get('id'), !item.get('checked'))}
            />
            <StyledTaskLabel>{item.get('text')}</StyledTaskLabel>
            <StyledCategoryLabel>{item.get('category')}</StyledCategoryLabel>
        </StyledItem>
    )
}

TodoItem.propTypes = {
    item: PropTypes.object,
    toggleItem: PropTypes.func.isRequired,
};

export default connect(
    () => ({}),
    (dispatch) => ({
        toggleItem: (id, checked) => dispatch(toggleItem(id, checked))
    }),
)(TodoItem);
