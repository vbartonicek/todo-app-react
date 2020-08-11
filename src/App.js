import React from 'react';
import Todos from './components/Todos/index';
import { categoryItems, todoItems } from './data/todos';
import GlobalStyles from './globalStyles';

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <header className="App-header">
                <h1>Instance 1 (data from the assigment)</h1>
                <Todos categoryItems={categoryItems} todoItems={todoItems} />
                <h1>Instance 2 (no data)</h1>
                <Todos />
            </header>
        </div>
    );
}

export default App;
