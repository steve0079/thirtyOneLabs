import React, { Fragment, useContext, useEffect } from 'react'
import AgeContext from '../../context/age/ageContext'

import PG from '../../images/pg-icon.svg'
import NA from '../../images/noAdd-icon.svg'
import C3 from '../../images/catIII-icon.svg'
import THCP from '../../images/thcpotent-icon.svg'
import T7 from '../../images/type7-icon.svg'
import Product1 from '../../images/PHTC5.jpg'
import Product2 from '../../images/PHTC6.jpg'
import Product3 from '../../images/MAXBC2.jpg'
import Product4 from '../../images/SZSBC1.jpg'

import './Inventory.css';

const Inventory = () => {
    const ageContext = useContext(AgeContext)

    const { isAgeVerified } = ageContext;

    useEffect(() => {
        document.title = 'Inventory | ThirtyOneLabs'
        isAgeVerified()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <div className="inventoryHeaderContainer">
                <div className="iconContainer">
                    <div><img src={PG} alt="" className="icon" /></div>
                    <div><img src={T7} alt="" className="icon" /></div>
                    <div><img src={THCP} alt="" className="icon" /></div>
                    <div><img src={C3} alt="" className="icon" /></div>
                    <div><img src={NA} alt="" className="icon" /></div>
                    <div className="iconTitle">Premium-grade<br />THC distillate</div>
                    <div className="iconTitle">Type 7<br />Extraction</div>
                    <div className="iconTitle">THC Potency<br />90%+</div>
                    <div className="iconTitle">Category III<br />compdivant</div>
                    <div className="iconTitle">No additives</div>
                </div>
            </div>
            <h2 className="productTitle">Our Inventory</h2>
            <div>
                <div className="productContainer">
                    <div className="productImageContainer">
                        <img className='productItemImage' src={Product1} alt="" />
                    </div>
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
                        <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem eum eveniet saepe sed obcaecati nulla, earum suscipit amet ab tenetur praesentium at, odit doloribus nobis eius qui sunt temporibus, non sint harum voluptates rerum dignissimos iure. Repudiandae, ullam repellat?</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $6,595/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <div className="productImageContainer">
                        <img className='productItemImage' src={Product2} alt="" />
                    </div>
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
                        <p className='productDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, voluptatum maiores. Perspiciatis ratione facilis placeat quae eius accusamus. Praesentium aspernatur tempore, sunt esse qui veniam corporis molestias laborum autem porro dolorem odit delectus perferendis, nostrum et commodi at doloribus eligendi, minima dicta perspiciatis quasi. Aliquid illo delectus, similique quaerat blanditiis sunt, praesentium perferendis placeat quibusdam, facilis earum!</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $6,575/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <div className="productImageContainer">
                        <img className='productItemImage' src={Product3} alt="" />
                    </div>
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
                        <p className='productDescription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, at tenetur rem illo ea dignissimos quibusdam harum sunt quo aut minus molestiae sint ipsum atque similique aliquid facilis nam beatae delectus expedita porro? Aliquid expedita quibusdam rerum esse impedit consequuntur quam libero.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $6,455/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <div className="productImageContainer">
                        <img className='productItemImage' src={Product4} alt="" />
                    </div>
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
                        <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque ea et doloremque nostrum adipisci officiis fugiat, fugit repudiandae qui! Sint, ipsa! Corrupti voluptatibus consectetur animi, consequuntur cumque iste blanditiis mollitia eos at eaque voluptatem.</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $6,220/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <div className="productImageContainer">
                        <img className='productItemImage' src={Product1} alt="" />
                    </div>
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
                        <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic ipsa animi asperiores velit id eligendi, in quam nisi perferendis illo vitae alias veritatis temporibus amet. Exercitationem hic facere, magni enim eos tempore numquam ipsam? Ipsum mollitia vel illum? Consequuntur!</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: $5,680/L</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <div className="productImageContainer">
                        <img className='productItemImage' src={Product2} alt="" />
                    </div>
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
                        <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perferendis facilis ipsa, minus sit beatae, ratione repudiandae enim ipsum nesciunt facere maxime! Praesentium doloremque earum et ea beatae delectus dolores pariatur nobis soluta? Omnis vero, reiciendis qui facere suscipit doloribus inventore sit expedita ad aliquid at. Vel deserunt impedit omnis!</p>
                    </div>
                    <div>
                        <p className='productSpecs'>Price: DUE 11/22</p>
                        <button className="btn btn-danger">Add to List</button>
                    </div>
                    <div className="productImageContainer">
                        <img className='productItemImage' src={Product3} alt="" />
                    </div>
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
                        <p className='productDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptates magni! Blanditiis iusto quis, facere ipsam delectus inventore est? Sapiente delectus cupiditate deleniti obcaecati officia recusandae magni aspernatur, aliquam accusamus!</p>
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
