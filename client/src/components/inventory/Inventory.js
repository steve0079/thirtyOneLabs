import React, { Fragment, useContext } from 'react'
import InventoryItem from './InventoryItem'
import InventoryContext from '../../context/inventory/InventoryContext';

const Inventory = () => {
    const inventoryContext = useContext(InventoryContext);

    const { inventory, filtered } = inventoryContext;

    if (inventory.length === 0) {
        return <h4>Please add a Product</h4>
    }


    return (
        <Fragment>
            {filtered !== null ? filtered.map(inventory => <InventoryItem key={inventory.id}
                inventory={inventory} />) : inventory.map(inventory => (
                    <InventoryItem key={inventory.id} inventory={inventory} />
                ))}
        </Fragment>
    )
}

export default Inventory
