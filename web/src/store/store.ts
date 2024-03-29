import { createStore } from 'redux';
import combinedReducers from './reducers/combined.reducers';

const store = createStore(
    combinedReducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
