import React, { Fragment } from 'react'
import './InventoryLayout.css'
import Inventory from '../inventory/Inventory';
import InventoryForm from '../inventory/InventoryForm'
import InventoryFilter from '../inventory/InventoryFilter'


const InventoryLayout = () => {
    return (
        <Fragment>
            <div className="grid-2">
                <div>
                    <InventoryForm />
                </div>
                <div>
                    <InventoryFilter />
                    <Inventory />
                </div>
            </div>
        </Fragment>
            )
        }
        
        export default InventoryLayout
