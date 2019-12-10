import React, { useReducer } from 'react';
import axios from 'axios'
import InventoryContext from './InventoryContext';
import InventoryReducer from './InventoryReducer';
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

const InventoryState = props => {
    const initialState = {
        inventory: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(InventoryReducer, initialState)

    // Get Inventory
    const getInventory = async () => {
        try {
            const res = await axios.get('/api/inventory')
            dispatch({ type: GET_INVENTORY, payload: res.data })
        } catch (err) {
            dispatch({ type: INVENTORY_ERROR, payload: err.response.msg })
        }
    }

    //Add Inventory
    const addInventory = async inventory => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/inventory', inventory, config)

            dispatch({ type: ADD_INVENTORY, payload: res.data })
        } catch (err) {
            dispatch({ type: INVENTORY_ERROR, payload: err.response.msg })
        }
    }

    //Delete Inventory
    const deleteInventory = async id => {
        try {
            await axios.delete(`/api/inventory/${id}`)

            dispatch({ type: DELETE_INVENTORY, payload: id })

        } catch (err) {
            dispatch({ type: INVENTORY_ERROR, payload: err.response.msg })
        }
    }

        //Update Inventory
        const updateInventory = async inventory => {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            try {
                const res = await axios.put(`/api/inventory/${inventory._id}`, inventory, config)
                dispatch({ type: UPDATE_INVENTORY, payload: res.data })

            } catch (err) {
                dispatch({ type: INVENTORY_ERROR, payload: err.response.msg })
            }
        }

    //Clear Inventory
    const clearInventory = () => {
        dispatch({ type: CLEAR_INVENTORY })
    }
    //Set Current Inventory
    const setCurrent = inventory => {
        dispatch({ type: SET_CURRENT, payload: inventory })
    }

    //Clear Current Inventory
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    //Filter Inventory
    const filterInventory = text => {
        dispatch({ type: FILTER_INVENTORY, payload: text })
    }

    //Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <InventoryContext.Provider
            value={{
                inventory: state.inventory,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addInventory,
                deleteInventory,
                getInventory,
                clearInventory,
                setCurrent,
                clearCurrent,
                updateInventory,
                filterInventory,
                clearFilter
            }}
        >
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoryState;