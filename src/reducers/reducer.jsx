import { Map } from 'immutable';
import {todoItems, categoryItems} from '../data/todos';

const defaultActiveCategory = '';

export const activeCategory = (activeCategory = defaultActiveCategory, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CATEGORY':
            return action.payload?.category;
        default:
            return activeCategory;
    }
};

export const categories = (categories = categoryItems, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY': {
            return categories.add(action.payload?.category);
        }
        default:
            return categories;
    }
};

export const todos = (todos = todoItems, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            return todos.push(Map(action.payload));
        }
        case 'TOGGLE_ITEM':
            return todos.update(
                todos.findIndex(function (item) {
                    return item.get("id") === action.payload?.id;
                }), function (item) {
                    return item.set("checked", action.payload?.checked);
                }
            );
        default:
            return todos;
    }
};


