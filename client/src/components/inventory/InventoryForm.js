import React, { useState, useContext, useEffect } from 'react'
import InventoryContext from '../../context/inventory/InventoryContext'

const InventoryForm = () => {
    const inventoryContext = useContext(InventoryContext);

    const { addInventory, current, clearCurrent, updateInventory } = inventoryContext;

    useEffect(() => {
        if (current !== null) {
            setInventory(current);
        } else {
            setInventory({
                id: '',
                name: '',
                quantity: '',
                thc: '',
                cbd: '',
                total: '',
                description: '',
                price: ''
            })
        }
    }, [inventoryContext, current])

    const [inventory, setInventory] = useState({
        id: '',
        name: '',
        quantity: '',
        thc: '',
        cbd: '',
        total: '',
        description: '',
        price: ''
    });

    const { name, quantity, thc, cbd, total, description, price } = inventory;

    const onChange = e => setInventory({ ...inventory, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(current === null){
            addInventory(inventory);
        } else {
            updateInventory(inventory);
        }
        clearAll();
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">
                {current ? 'Edit Inventory' : 'Add Inventory'}</h2>
            <input
                type="text"
                placeholder="Lot Number"
                name="name"
                value={name}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                value={quantity}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="THC %"
                name="thc"
                value={thc}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="CBD %"
                name="cbd"
                value={cbd}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Total Cann. %"
                name="total"
                value={total}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Price"
                name="price"
                value={price}
                onChange={onChange}
            />
            <div>
                <input type="submit" value={current ? 'Update Inventory' : 'Add Inventory'} className="btn btn-primary btn-block" />
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            </div> }
        </form>
    )
}

export default InventoryForm
