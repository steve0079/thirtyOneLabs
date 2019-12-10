import {
    ADD_INVENTORY,
    DELETE_INVENTORY,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_INVENTORY,
    FILTER_INVENTORY,
    CLEAR_FILTER,
    INVENTORY_ERROR,
    GET_INVENTORY,
    CLEAR_INVENTORY
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_INVENTORY:
            return {
                ...state,
                inventory: action.payload,
                loading: false
            }
        case ADD_INVENTORY:
            return {
                ...state,
                inventory: [action.payload, ...state.inventory],
                loading: false
            }
        case UPDATE_INVENTORY:
            return {
                ...state,
                inventory: state.inventory.map(inventory => inventory._id === action.payload._id ? action.payload : inventory),
                loading: false
            }
        case DELETE_INVENTORY:
            return {
                ...state,
                inventory: state.inventory.filter(inventory => inventory._id !== action.payload),
                loading: false
            }
        case CLEAR_INVENTORY:
            return {
                ...state,
                inventory: null,
                filtered: null,
                error: null,
                current: null
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case FILTER_INVENTORY:
            return {
                ...state,
                filtered: state.inventory.filter(inventory => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return inventory.name.match(regex)
                }),
                loading: false
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case INVENTORY_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}