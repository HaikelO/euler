import { FETCH_ACCOUNT } from '../actions/ActionsTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_ACCOUNT:
            return action.payload.data;
        default:
            return state;
    }
}