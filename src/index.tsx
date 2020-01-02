import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';
import configureStore from './configureStore';

const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(initialState);

ReactDOM.render(<Main store={store} />, document.getElementById('root'));
