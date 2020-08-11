import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import NewItemForm from './NewItemForm';
import FilterSelect from './FilterSelect';
import {Set, List, Map} from "immutable";

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
            todoItems: props.todoItems || List(),
            categories: props.categoryItems || Set([]),
            activeCategory: ''
        };

        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleNewItem = this.handleNewItem.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    // Handle todo's item change (checkbox value)
    handleItemChange(id, newValue) {
        const {todoItems} = this.state;

        const updatedTodoItems = todoItems.update(
            todoItems.findIndex(function (item) {
                return item.get("id") === id;
            }), function (item) {
                return item.set("checked", newValue);
            }
        );

        this.setState({todoItems: updatedTodoItems});
    }

    // Handle adding new todo item
    handleNewItem(task, category) {
        const {categories, todoItems} = this.state;
        const updatedCategories = categories.add(category);
        const newTodoItem = Map({
            id: todoItems.size ? todoItems.last().get('id') + 1 : 0,
            text: task,
            category: category,
            checked: false
        });
        const updatedTodoItems = todoItems.push(newTodoItem);

        this.setState({todoItems: updatedTodoItems, categories: updatedCategories});
    }

    // Handle filter change
    handleFilterChange = (selectedOption) => {
        this.setState({activeCategory: selectedOption?.value});
    }

    // Filter list of todo items based on active category filter
    filterTodos(allTodoItems, selectedCategory) {
        if (!selectedCategory) return allTodoItems;
        return allTodoItems.filter(function (item) {
            return item.get('category') === selectedCategory
        });
    }

    render() {
        const {todoItems, categories, activeCategory} = this.state;
        const filteredTodos = this.filterTodos(todoItems, activeCategory);

        return (
            <StyledTodos>
                <LeftWrapper>
                    {!filteredTodos.size && <StyledDiv>No Todos available</StyledDiv>}
                    {filteredTodos?.map((item) => (
                        <TodoItem key={item.get('id')} item={item} handleItemChange={this.handleItemChange}/>
                    ))}
                    <NewItemForm handleSubmit={this.handleNewItem}/>
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
    todoItems: ImmutablePropTypes.list,
    categoryItems: ImmutablePropTypes.set,
};

export default Todos;
