import React from 'react';
import Todos from './components/Todos/index';
import GlobalStyles from './globalStyles';
import { Provider } from 'react-redux';
import { TodoStore } from './store/store';

function App() {
    return (
        <div className="App">
            <GlobalStyles/>
            <Provider store={TodoStore}>
                <h1>Instance 1 (initial data from the assigment)</h1>
                <Todos />
            </Provider>
        </div>
    );
}

export default App;
