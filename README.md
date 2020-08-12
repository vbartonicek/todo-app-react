# Todo app in React using Redux

## Quickstart
Run `npm install`
and then `npm run start`

## Input data

The initial data are located and documented in /src/data.

## Instances

The projects consist of two instances:
- Instance 1 (initial data from the assignment)

## Project structure

## /src/actions
The folder consists of Redux actions

### /src/components
React components are located in this folder.

The table component tree has following structure
- Todos
    - FilterSelect
    - NewItemForm
    - TodoItem

## /src/data
The folder consists of initial data

## /src/reducers
The folder consists of Redux reducers

## /src/store
The folder consists of Redux stores

---

## Components documentation
### Todos
The base component wrapping all the Todo App components

#### Props
| Prop      | Required    | Data type     | Description
|-----------|-------------|---------------|------------|
| todoItems       | optional      | ImmutablePropTypes.list  | List of Todo items
| activeCategory       | optional      | PropTypes.string  | Filtered category
#### Functions
- `filterTodos(allTodoItems , selectedCategory) (): ImmutablePropTypes.list` - Returns filtered list of todo items based on given category


### FilterSelect
Stateless component wrapping the react-select component

#### Props
| Prop      | Required    | Data type     | Description
|-----------|-------------|---------------|------------|
| categories      | optional      | ImmutablePropTypes.set  | Set of existing categories
| activeCategory       | optional      | PropTypes.string  | Filtered category
| setActiveCategory      | required      | PropTypes.func  | Redux action to set new filtered category

### NewItemForm
Component representing form to add a new todo item

#### Props
| Prop      | Required    | Data type     | Description
|-----------|-------------|---------------|------------|
| addItem      | required      | PropTypes.func  | Redux action to add new todo item
| addCategory      | required      | PropTypes.func  | Redux action to add new category
#### Functions
- `handleChange(event) (): void` - Handles input field change and updates component's state
- `handleSubmit(event) (): void` - Handles form submit and calls addItem and addCategory actions

### TodoItem
Stateless component to render a single todo item.

#### Props
| Prop      | Required    | Data type     | Description
|-----------|-------------|---------------|------------|
| item      | required      | ImmutablePropTypes.map.isRequired  | Map of a single todo item properties
| toggleItem       | required      | PropTypes.func.isRequired  | Handles change of checkbox state and calls the toggleItem action

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`
Runs ESLint with --fix parameter to check and fix all files with .jsx,ts and .tsx extensions in src folder.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
