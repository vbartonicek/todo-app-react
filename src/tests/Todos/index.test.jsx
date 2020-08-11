import React from 'react';
import Todos from '../../components/Todos/index';
import {categoryItems, todoItems} from '../../data/todos';
import {configure, shallow} from "enzyme";
import {List, Map} from "immutable";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()})

describe('filterTodos', () => {
    const wrapper = shallow(<Todos categoryItems={categoryItems} todoItems={todoItems}/>);

    const expected1 = List([
        Map({id: 0, text: 'laundry', category: 'home', checked: false}),
        Map({id: 2, text: 'vacuum', category: 'home', checked: true}),
    ]);

    const expected2 = List([
        Map({id: 1, text: 'write report', category: 'work', checked: false}),
    ]);

    const expected3 = List([
        Map({id: 0, text: 'laundry', category: 'home', checked: false}),
        Map({id: 1, text: 'write report', category: 'work', checked: false}),
        Map({id: 2, text: 'vacuum', category: 'home', checked: true}),
    ]);

    const expected4 = List([]);

    it('Test 1 - Category filter return expected items', () => {
        const functionResult = wrapper.instance().filterTodos(todoItems, 'home');
        expect(functionResult).toMatchObject(expected1);
    });

    it('Test 2 - Category filter return expected items', () => {
        const functionResult = wrapper.instance().filterTodos(todoItems, 'work');
        expect(functionResult).toMatchObject(expected2);
    });

    it('Test 2 - Empty category filter return all items', () => {
        const functionResult = wrapper.instance().filterTodos(todoItems, '');
        expect(functionResult).toMatchObject(expected3);
    });

    it('Test 3 - Not existing category return zero items', () => {
        const functionResult = wrapper.instance().filterTodos(todoItems, 'nothing');
        expect(functionResult).toMatchObject(expected4);
    });

    it('Test 4 - empty todoItems list returns nothing', () => {
        const functionResult = wrapper.instance().filterTodos(List(), '');
        expect(functionResult).toMatchObject(List());
    });
});
