import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background: white;
  position: relative;
  padding-right: 2rem;


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
    height: 100%;
    width: 2rem;
    cursor: pointer;
    background: #5846F6;
    color: white;

    &:hover{
        background: #4636C5
    }
  }
`;

class NewTodoForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            category: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const state = this.state;
        state[target.name] = target.value;
        this.setState({state});
    }

    handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
        const task = target['task'].value;
        const category = target['category'].value;
        if (!task || !category) return;

        // Reset form's state
        this.setState({
            task: '',
            category: ''
        });

        this.props.handleSubmit(task, category);
    }

    render() {
        const {task, category} = this.state;
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <input type="text" name="task" value={task} placeholder="task" onChange={this.handleChange}/>
                <input type="text" name="category" value={category} placeholder="category"
                       onChange={this.handleChange}/>
                <button type="submit">+</button>
            </StyledForm>
        );
    }
}

NewTodoForm.propTypes = {
    handleSubmit: PropTypes.func,
};

export default NewTodoForm;
