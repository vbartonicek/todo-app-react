import {combineReducers, createStore} from 'redux';
import {todos, categories, activeCategory} from '../reducers/reducer';

const reducer = combineReducers({
    todos, categories, activeCategory
});

export const TodoStore = createStore(reducer);
