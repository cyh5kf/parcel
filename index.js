import './styles.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test.js';

const App = () => {
    return (
        <div>
            <Test />
            <h1>hello, React!</h1>
        </div>
        
    )
}

const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv);