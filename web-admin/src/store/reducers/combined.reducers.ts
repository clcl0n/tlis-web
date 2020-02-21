import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
    init: (state = '', payload: { type: string; data: string }) => {
        return state;
    }
});

export default combinedReducers;
