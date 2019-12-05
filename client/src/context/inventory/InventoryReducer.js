import {
    ADD_INVENTORY,
    DELETE_INVENTORY,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CURRENT,
    FILTER_INVENTORY,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_INVENTORY:
            return {
                ...state,
                inventory: [...state.inventory, action.payload]
            }
        case UPDATE_CURRENT:
            return {
                ...state,
                inventory: state.inventory.map(inventory => inventory.id === action.payload.id ? action.payload : inventory)
            }
        case DELETE_INVENTORY:
            return {
                ...state,
                inventory: state.inventory.filter(inventory => inventory.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
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
                            return state.inventory.name.match(regex)
                        })
                    }
            case CLEAR_FILTER:
                    return {
                        ...state,
                        filtered: null
                    }
        default:
            return state;
    }
}