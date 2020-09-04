import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Rootreducer from '../reducer/Rootreducer'   

export default () => {
    const store=createStore(Rootreducer,applyMiddleware(thunk));
    return store;
};