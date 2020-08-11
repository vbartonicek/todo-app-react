import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import update from 'immutability-helper';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';
import FilterSelect from './FilterSelect';
import {Set} from "immutable";

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

class Todos extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            todoItems: props.todoItems || [],
            categories: props.categoryItems || Set([]),
            activeCategory: ''
        };

        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleNewItem = this.handleNewItem.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleItemChange(key, newValue) {
        const data = this.state.todoItems;
        const itemIndex = data.findIndex(function (c) {
            return c.key === key;
        });

        const updatedItem = update(data[itemIndex], {checked: {$set: newValue}});
        const newData = update(data, {
            $splice: [[itemIndex, 1, updatedItem]]
        });

        this.setState({todoItems: newData});
    }

    handleNewItem(task, category) {
        const {categories} = this.state;

        const updatedCategories = categories.add(category);

        const newTodoItem = {
            id: 'd',
            text: task,
            category,
            checked: false,
        }


        let todoItems = [...this.state.todoItems];
        todoItems.push(newTodoItem);
        this.setState({todoItems, categories: updatedCategories});
    }

    handleFilterChange = (selectedOption) => {
        this.setState({activeCategory: selectedOption?.value});
    }

    filterTodos(allTodoItems, selectedCategory) {
        if (!selectedCategory) return allTodoItems;
        return allTodoItems.filter(function (item) {
            return item.category === selectedCategory
        });
    }

    render() {
        const {todoItems, categories, activeCategory} = this.state;
        const filteredTodos = this.filterTodos(todoItems, activeCategory);

        return (
            <StyledTodos>
                <LeftWrapper>
                    {!filteredTodos.length && <StyledDiv>No Todos available</StyledDiv>}
                    {filteredTodos?.map((item) => (
                        <TodoItem key={item.key} item={item} handleItemChange={this.handleItemChange}/>
                    ))}
                    <NewTodoForm handleSubmit={this.handleNewItem}/>
                </LeftWrapper>
                <RightWrapper>
                    <FilterSelect categories={categories} activeCategory={activeCategory}
                                  handleFilterChange={this.handleFilterChange}/>
                </RightWrapper>
            </StyledTodos>
        );
    }
}

Todos.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.object),
    categoryItems: ImmutablePropTypes.set,
};

export default Todos;
