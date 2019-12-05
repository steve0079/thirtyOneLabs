import React, { Fragment, useContext } from 'react'
import InventoryItem from './InventoryItem'
import InventoryContext from '../../context/inventory/InventoryContext';

const Inventory = () => {
    const inventoryContext = useContext(InventoryContext);

    const { inventory } = inventoryContext;


    return (
        <Fragment>
            {inventory.map(inventory => (
                <InventoryItem key={inventory.id} inventory={inventory} />
            ))}
        </Fragment>
    )
}

export default Inventory
