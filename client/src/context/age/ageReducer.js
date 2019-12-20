import {
    AGE_VERIFIED
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case AGE_VERIFIED:
            return {
                ...state,
                ageVerified: true
            }
        default:
            return state;
    }
}