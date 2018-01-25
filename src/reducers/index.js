import * as actions from '../actions';

function appReducer(state = {}, action) {
    switch (action.type) {
        case actions.ON_MESSAGE:
            return { message: action.message, ...state };
    }
    return state;
}

export default appReducer;
