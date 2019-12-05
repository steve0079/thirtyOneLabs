import React from 'react'

const InventoryItem = ({ inventory }) => {

    const { id, lot, quantity, thc, cbd, total, description, price } = inventory;

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                <strong>Lot: </strong>{lot}
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
        </div>
    )
}

export default InventoryItem
