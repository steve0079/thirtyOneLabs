import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import InventoryContext from '../../context/inventory/InventoryContext'


const InventoryItem = ({ inventory }) => {
    const inventoryContext = useContext(InventoryContext);
    const { deleteInventory, setCurrent, clearCurrent } =inventoryContext;


    const { id, name, quantity, thc, cbd, total, description, price } = inventory;

    const onDelete = () => {
        deleteInventory(id);
        clearCurrent();
    }

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                <strong>Lot: </strong>{name}
            </h3>
            <ul className="list">
                {quantity && (
                    <li>
                        <strong>Quantity: </strong>{quantity}
                    </li>
                )}
                {thc && (
                    <li>
                        <strong>THC%: </strong>{thc}
                    </li>
                )}
                {cbd && (
                    <li>
                        <strong>CBD%: </strong>{cbd}
                    </li>
                )}
                {total && (
                    <li>
                        <strong>Total Cann. %: </strong>{total}
                    </li>
                )}
                {description && (
                    <li>
                        <strong>Description: </strong>{description}
                    </li>
                )}
                {price && (
                    <li>
                        <strong>Price: </strong>{price}
                    </li>
                )}
            </ul>
            <p className="btn btn-dark btn-sm" onClick={() => setCurrent(inventory)} >Edit Inventory</p>
            <p className="btn btn-danger btn-sm" onClick={onDelete}>Delete Inventory</p>
        </div>
    )
}

InventoryItem.propTypes = {
    inventory: PropTypes.object.isRequired,
}

export default InventoryItem
