import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

import mystore from './store/store';
const store = mystore();
console.log(store.getState());

const jsx=(
<Provider store={store}>
   <App/>
</Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));
serviceWorker.unregister();
