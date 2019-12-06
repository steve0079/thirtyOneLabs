import React, { useContext, useRef, useEffect } from 'react'
import InventoryContext from '../../context/inventory/InventoryContext'

const InventoryFilter = () => {
    const inventoryContext = useContext(InventoryContext);
    const text = useRef('');

    const { filterInventory, clearFilter, filtered } = inventoryContext;

    const onChange = e => {
        if(text.current.value !== '') {
            filterInventory(e.target.value)
        } else {
            clearFilter();
        }
    }

    useEffect(() => {
        if(filtered === null){
            text.current.value = ''
        }
    })

    return (
        <form>
            <input 
                ref={text} 
                type="text" 
                placeholder="Filter Inventory..." 
                onChange={onChange}
            />
        </form>
    )
}

export default InventoryFilter
