import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import NewItemForm from './NewItemForm';
import FilterSelect from './FilterSelect';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

const StyledTodos = styled.div`
    background: white;
    max-width: 50rem;
    border-radius: 0.2rem;
    margin: 1rem 0 3rem;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
    display: flex;
    justify-content: space-between;
`;

const LeftWrapper = styled.div`
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 0.2rem;
`;

const RightWrapper = styled.div`
    border-radius: 0.2rem;
`;

const StyledDiv = styled.div`
    padding: 1rem 0;
    color: grey;
`;

// Filter list of todo items based on active category filter
function filterTodos(allTodoItems, selectedCategory) {
    if (!selectedCategory) return allTodoItems;
    return allTodoItems.filter(function (item) {
        return item.get('category') === selectedCategory
    });
}

const Todos = ({todoItems, activeCategory}) => {
    const filteredTodos = filterTodos(todoItems, activeCategory);

    return(
        <StyledTodos>
            <LeftWrapper>
                {!filteredTodos.size && <StyledDiv>No Todos available</StyledDiv>}
                {filteredTodos?.map((item) => (
                    <TodoItem key={item.get('id')} item={item}/>
                ))}
                <NewItemForm/>
            </LeftWrapper>
            <RightWrapper>
                <FilterSelect />
            </RightWrapper>
        </StyledTodos>
    )
}

Todos.propTypes = {
    todoItems: ImmutablePropTypes.list,
    activeCategory: PropTypes.string,
};


export default connect(
    ({todos, activeCategory}) => ({todoItems: todos, activeCategory: activeCategory}),
)(Todos);
