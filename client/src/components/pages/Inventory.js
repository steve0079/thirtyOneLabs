import React, { Fragment, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'

import InventoryMain from '../../images/inventory_main.jpg'
import PG from '../../images/pg-icon.svg'
import NA from '../../images/noAdd-icon.svg'
import C3 from '../../images/catIII-icon.svg'
import THCP from '../../images/thcpotent-icon.svg'
import T7 from '../../images/type7-icon.svg'
import './Inventory.css';

const Inventory = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
            document.title = 'Inventory | ThirtyOneLabs'
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <div>
                <img src={InventoryMain} alt="" />
                <ul className="iconContainer">
                    <li><img src={PG} alt="" className="icon" /></li>
                    <li><img src={T7} alt="" className="icon" /></li>
                    <li><img src={THCP} alt="" className="icon" /></li>
                    <li><img src={C3} alt="" className="icon" /></li>
                    <li><img src={NA} alt="" className="icon" /></li>
                    <li className="iconTitle">Premium-grade<br />THC distillate</li>
                    <li className="iconTitle">Type 7<br />Extraction</li>
                    <li className="iconTitle">THC Potency<br />90%+</li>
                    <li className="iconTitle">Category III<br />compliant</li>
                    <li className="iconTitle">No additives</li>
                </ul>
                <h2 className="productTitle">Our Inventory</h2>
            </div>
            <div>
                <div className="productContainer">
                    <img className='productItemImage' src="" alt="" />
                    <div>
                        <p className='productSpecs'>Lot:</p>
                        <p className='productSpecs'>Quantity:</p>
                        <p className='productSpecs'>THC%:</p>
                        <p className='productSpecs'>CBD%:</p>
                        <p className='productSpecs'>Total Cann. %:</p>
                    </div>
                    <div>
                        <p className='productInfo'>PHTC5</p>
                        <p className='productInfo'>6L</p>
                        <p className='productInfo'>94.2%</p>
                        <p className='productInfo'>0.3%</p>
                        <p className='productInfo'>99.9%</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Description</p>
                        <p>Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $6,595/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <img className='productItemImage' src="" alt="" />
                    <div>
                        <p className='productSpecs'>Lot:</p>
                        <p className='productSpecs'>Quantity:</p>
                        <p className='productSpecs'>THC%:</p>
                        <p className='productSpecs'>CBD%:</p>
                        <p className='productSpecs'>Total Cann. %:</p>
                    </div>
                    <div>
                        <p className='productInfo'>PHTC6</p>
                        <p className='productInfo'>10.5L</p>
                        <p className='productInfo'>93.9%</p>
                        <p className='productInfo'>0.2%</p>
                        <p className='productInfo'>99.9%</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Description</p>
                        <p>Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $6,575/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <img className='productItemImage' src="" alt="" />
                    <div>
                        <p className='productSpecs'>Lot:</p>
                        <p className='productSpecs'>Quantity:</p>
                        <p className='productSpecs'>THC%:</p>
                        <p className='productSpecs'>CBD%:</p>
                        <p className='productSpecs'>Total Cann. %:</p>
                    </div>
                    <div>
                        <p className='productInfo'>MAXBC2</p>
                        <p className='productInfo'>1.5L</p>
                        <p className='productInfo'>92.2%</p>
                        <p className='productInfo'>0.4%</p>
                        <p className='productInfo'>99.9%</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Description</p>
                        <p>Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $6,455/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <img className='productItemImage' src="" alt="" />
                    <div>
                        <p className='productSpecs'>Lot:</p>
                        <p className='productSpecs'>Quantity:</p>
                        <p className='productSpecs'>THC%:</p>
                        <p className='productSpecs'>CBD%:</p>
                        <p className='productSpecs'>Total Cann. %:</p>
                    </div>
                    <div>
                        <p className='productInfo'>KHDTC2</p>
                        <p className='productInfo'>13.5L</p>
                        <p className='productInfo'>88.8%</p>
                        <p className='productInfo'>0.3%</p>
                        <p className='productInfo'>99.9%</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Description</p>
                        <p>Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $6,220/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <img className='productItemImage' src="" alt="" />
                    <div>
                        <p className='productSpecs'>Lot:</p>
                        <p className='productSpecs'>Quantity:</p>
                        <p className='productSpecs'>THC%:</p>
                        <p className='productSpecs'>CBD%:</p>
                        <p className='productSpecs'>Total Cann. %:</p>
                    </div>
                    <div>
                        <p className='productInfo'>BOXTC7</p>
                        <p className='productInfo'>1.5L</p>
                        <p className='productInfo'>81.1%</p>
                        <p className='productInfo'>0.0%</p>
                        <p className='productInfo'>99.3%</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Description</p>
                        <p>Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $5,680/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <img className='productItemImage' src="" alt="" />
                    <div>
                        <p className='productSpecs'>Lot:</p>
                        <p className='productSpecs'>Quantity:</p>
                        <p className='productSpecs'>THC%:</p>
                        <p className='productSpecs'>CBD%:</p>
                        <p className='productSpecs'>Total Cann. %:</p>
                    </div>
                    <div>
                        <p className='productInfo'>KHDTC</p>
                        <p className='productInfo'>4.5L</p>
                        <p className='productInfo'>TBD</p>
                        <p className='productInfo'>TBD</p>
                        <p className='productInfo'>TBD</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Description</p>
                        <p>Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: DUE 11/22</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <img className='productItemImage' src="" alt="" />
                    <div>
                        <p className='productSpecs'>Lot:</p>
                        <p className='productSpecs'>Quantity:</p>
                        <p className='productSpecs'>THC%:</p>
                        <p className='productSpecs'>CBD%:</p>
                        <p className='productSpecs'>Total Cann. %:</p>
                    </div>
                    <div>
                        <p className='productInfo'>KHDTC2</p>
                        <p className='productInfo'>0L</p>
                        <p className='productInfo'>88.8%</p>
                        <p className='productInfo'>0.3%</p>
                        <p className='productInfo'>99.9%</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Description</p>
                        <p>Nam vitae sapien nulla. Fusce sit amet libero et tellus ultrices finibus feugiat eu elit. Curabitur euismod felis justo, sed accumsan tortor sodales vel. Sed finibus purus non massa efficitur tristique. Duis in arcu odio. Vivamus risus ex, viverra id molestie quis.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price:SOLD OUT</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Inventory
