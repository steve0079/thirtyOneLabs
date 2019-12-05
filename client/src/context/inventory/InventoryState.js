import React, { useReducer } from 'react';
import uuid from 'uuid'
import InventoryContext from './InventoryContext';
import InventoryReducer from './InventoryReducer';
import {
    ADD_INVENTORY,
    DELETE_INVENTORY,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_INVENTORY,
    FILTER_INVENTORY,
    CLEAR_FILTER
} from '../types';

const InventoryState = props => {
    const initialState = {
        inventory: [
            {
                id: 1,
                lot: 'PHTC5',
                quantity: '6L',
                thc: '94.2%',
                cbd: '0.3%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$6,595/L'
            },
            {
                id: 2,
                lot: 'PHTC6',
                quantity: '10.5L',
                thc: '93.9%',
                cbd: '0.2%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$6,575/L'
            },
            {
                id: 3,
                lot: 'MAXBC2',
                quantity: '1.5L',
                thc: '92.2%',
                cbd: '0.4%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$6,455/L'
            },
            {
                id: 4,
                lot: 'KHDTC2',
                quantity: '13.5L',
                thc: '88.8%',
                cbd: '0.3%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$6,220/L'
            },
            {
                id: 5,
                lot: 'BOXTC7',
                quantity: '1.5L',
                thc: '81.1%',
                cbd: '0.0%',
                total: '99.3%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: '$5,680/L'
            },
            {
                id: 6,
                lot: 'KHDTC',
                quantity: '4.5L',
                thc: 'TBD',
                cbd: 'TBD',
                total: 'TBD',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: 'DUE 11/22'
            },
            {
                id: 7,
                lot: 'KHDTC2',
                quantity: '6L',
                thc: '88.8%',
                cbd: '0.3%',
                total: '99.9%',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.',
                price: 'SOLD'
            }
        ]
    }

    const [state, dispatch] = useReducer(InventoryReducer, initialState)

    //Add Inventory
    //Delete Inventory
    //Set Current Inventory
    //Clear Current Inventory
    //Update Inventory
    //Filter Inventory
    //Clear Filter

    return (
        <InventoryContext.Provider
        value={{
            inventory: state.inventory
        }}>
            { props.children }
        </InventoryContext.Provider>
    )
}

export default InventoryState;