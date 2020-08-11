import {Set, List, Map} from "immutable";

export const categoryItems = Set([
    'home',
    'work'
]);

export const todoItems = List([
    Map({id: 0, text: 'laundry', category: 'home', checked: false}),
    Map({id: 1, text: 'write report', category: 'work', checked: false}),
    Map({id: 2, text: 'vacuum', category: 'home', checked: true}),
]);
