import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from '../../components/Todos/TodoItem';
import {Map} from "immutable";

describe('<TodoItem />', () => {
    const item = Map({id: 0, text: 'laundry', category: 'home', checked: true});

    it('TodoItem has all parts rendered', () => {
        configure({adapter: new Adapter()})
        const wrapper = mount(<TodoItem item={item} handleItemChange={jest.fn()}/>);
        expect(wrapper.find({type: 'checkbox'}).props().checked).toEqual(true);
        expect(wrapper.find('span').get(0).props.children).toEqual('laundry');
        expect(wrapper.find('span').get(1).props.children).toEqual('home');
    });
});
