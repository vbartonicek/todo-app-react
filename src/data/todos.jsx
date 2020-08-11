import {Set} from "immutable";

export const categoryItems = Set([
    'home',
    'work'
]);

export const todoItems = [
    {
        key: 1,
        text: 'laundry',
        category: 'home',
        checked: false,
    },
    {
        key: 2,
        text: 'write report',
        category: 'work',
        checked: false,
    },
    {
        key: 3,
        text: 'vacuum',
        category: 'home',
        checked: true,
    },
];
