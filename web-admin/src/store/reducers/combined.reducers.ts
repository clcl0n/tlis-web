import { combineReducers } from 'redux';

const isAuthorizedState = false;

// const isAuthorizedReducer = (state = isAuthorizedState, payload: { data: boolean; type: string }) => {
//     switch (payload.type) {
//         default:
//             return state;
//     }
// };

const isAuthorizedReducer = (state = isAuthorizedState, payload: { data: boolean; type: string }) => {
    if (payload.type === '') {
        return payload.data;
    }
    return state;
    // switch (payload.type) {
    //     case '':
    //         return payload.data;
    //     default:
    //         return false;
    // }
};

const combinedReducers = combineReducers({
    init: (state = '', payload: { type: string; data: string }) => {
        return state;
    },
    isAuthorized: isAuthorizedReducer
});

export default combinedReducers;
