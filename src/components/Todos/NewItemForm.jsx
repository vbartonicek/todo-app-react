import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addItem, addCategory} from '../../actions/actions';

const StyledForm = styled.form`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background: white;
  position: relative;
  padding-right: 2rem;
  padding: 1rem 2rem 0 0;
  margin-top: 1rem;
  border-top: 1px solid #e4e4e4;
  background: none;

  input {
    padding: 0.5rem;
    border-width: 1px;
    border-color: transparent transparent #ddd;
    margin-right: 0.1rem;
  }

  button {
    border-radius: 0.2rem;
    border: none;
    position: absolute;
    right: 0;
    height: calc(100% - 1rem);
    width: 2rem;
    cursor: pointer;
    background: #5846F6;
    color: white;

    &:hover{
        background: #4636C5
    }

    &:focus {
        outline:0;
    }
  }
`;

const NewItemForm = ({addItem, addCategory}) => {
    const handleChange = (event) => {
        const {name, value} = event.target;
        setState({...state, [name]: value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        const task = target['task'].value;
        const category = target['category'].value;
        if (!task || !category) return;

        // Reset form's state
        setState({
            task: '',
            category: ''
        });

        addItem(task, category);
        addCategory(category);
    }

    const [state, setState] = useState({task: '', category: ''})

    return (
        <StyledForm onSubmit={handleSubmit}>
            <input type="text" name="task" value={state.task} placeholder="task" onChange={handleChange}/>
            <input type="text" name="category" value={state.category} placeholder="category"
                   onChange={handleChange}/>
            <button type="submit">+</button>
        </StyledForm>
    )
}

NewItemForm.propTypes = {
    addItem: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
};

export default connect(
    () => ({}),
    (dispatch) => ({
        addItem: (task, category) => dispatch(addItem(task, category)),
        addCategory: (category) => dispatch(addCategory(category))
    }),
)(NewItemForm);
