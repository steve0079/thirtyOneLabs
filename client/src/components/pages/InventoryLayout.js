import React from 'react'
import Inventory from '../inventory/Inventory';

const InventoryLayout = () => {
    return (
        <div className="grid-3">
            <div>{/* Inventory Form */}</div>
            <div>
                <Inventory />
            </div>
        </div>
    )
}

export default InventoryLayout
