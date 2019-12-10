import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import InventoryItem from './InventoryItem'
import InventoryContext from '../../context/inventory/InventoryContext';
import Spinner from '../layout/Spinner'

const Inventory = () => {
    const inventoryContext = useContext(InventoryContext);

    const { inventory, filtered, getInventory, loading } = inventoryContext;

    useEffect(() => {
        getInventory();
        // eslint-disable-next-line
    }, [])

    if (inventory !== null && inventory.length === 0 && !loading) {
        return <h4>Please add a Product</h4>
    }


    return (
        <Fragment>
            {inventory !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map(inventory => (
                            <CSSTransition key={inventory._id} timeout={500} classNames='item'>
                                <InventoryItem inventory={inventory} />
                            </CSSTransition>
                        ))
                        : inventory.map(inventory => (
                            <CSSTransition key={inventory._id} timeout={500} classNames='item'>
                                <InventoryItem inventory={inventory} />
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            ) :
                <Spinner />}
        </Fragment>
    )
}

export default Inventory
