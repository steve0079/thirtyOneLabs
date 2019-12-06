import React, { useReducer } from 'react';
import uuid from 'uuid'
import InventoryContext from './InventoryContext';
import InventoryReducer from './InventoryReducer';
import {
    ADD_INVENTORY,
    DELETE_INVENTORY,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CURRENT,
    FILTER_INVENTORY,
    CLEAR_FILTER
} from '../types';

const InventoryState = props => {
    const initialState = {
        inventory: [
            {
                id: 1,
                name: 'PHTC5',
                quantity: '6L',
                thc: '94.2%',
                cbd: '0.3%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$6,595/L'
            },
            {
                id: 2,
                name: 'PHTC6',
                quantity: '10.5L',
                thc: '93.9%',
                cbd: '0.2%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$6,575/L'
            },
            {
                id: 3,
                name: 'MAXBC2',
                quantity: '1.5L',
                thc: '92.2%',
                cbd: '0.4%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$6,455/L'
            },
            {
                id: 4,
                name: 'KHDTC2',
                quantity: '13.5L',
                thc: '88.8%',
                cbd: '0.3%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$6,220/L'
            },
            {
                id: 5,
                name: 'BOXTC7',
                quantity: '1.5L',
                thc: '81.1%',
                cbd: '0.0%',
                total: '99.3%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$5,680/L'
            },
            {
                id: 6,
                name: 'KHDTC',
                quantity: '4.5L',
                thc: 'TBD',
                cbd: 'TBD',
                total: 'TBD',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: 'DUE 11/22'
            },
            {
                id: 7,
                name: 'KHDTC2',
                quantity: '6L',
                thc: '88.8%',
                cbd: '0.3%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: 'SOLD'
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(InventoryReducer, initialState)

    //Add Inventory
    const addInventory = inventory => {
        inventory.id = uuid.v4();
        dispatch({ type: ADD_INVENTORY, payload: inventory })
    }

    //Delete Inventory
    const deleteInventory = id => {
        dispatch({ type: DELETE_INVENTORY, payload: id })
    }

    //Set Current Inventory
    const setCurrent = inventory => {
        dispatch({ type: SET_CURRENT, payload: inventory })
    }

    //Clear Current Inventory
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    //Update Inventory
    const updateInventory = inventory => {
        dispatch({ type: UPDATE_CURRENT, payload: inventory })
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
                addInventory,
                deleteInventory,
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