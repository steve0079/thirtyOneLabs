import React, { useContext, useEffect } from 'react'
import './AdminPanel.css'
import Inventory from '../inventory/Inventory';
import InventoryForm from '../inventory/InventoryForm'
import InventoryFilter from '../inventory/InventoryFilter'
import AuthContext from '../../context/auth/authContext'


const AdminPanel = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        document.title = 'Inventory | ThirtyOneLabs'

        // eslint-disable-next-line
    }, [])

    return (
        <div className="inventory-container">
            <div className="grid-2">
                <div>
                    <InventoryForm />
                </div>
                <div>
                    <InventoryFilter />
                    <Inventory />
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
