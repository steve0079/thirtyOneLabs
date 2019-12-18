import React, { useEffect } from 'react'
import './OurProduct.css'
import THCDist from '../../images/NLMLAB8b.jpg'
import Prod1 from '../../images/NLMLAB_2_1200x.jpg'
import Prod2 from '../../images/NLMLAB_6_1200x.jpg'
import Prod3 from '../../images/NLMLAB5b.jpg'
import Prod4 from '../../images/NLMLAB_10_1200x.jpg'



const OurProduct = () => {

    useEffect(() => {
        document.title = 'Our Product | ThirtyOneLabs'
    })
    return (
        <div>
            <div className="OurProductContainer">
                <h2 className="product-section-title">We Fuel your Brand</h2>
                <p className="productbody">Our goal is to remove the risk, uncertainty and frustration from the procurement and product development process so that you can focus on what you do best… building your brand.</p>
            </div>
            <div className="thcDistillateContainer">
                <img src={THCDist} alt="" className="thcDistillateImage" />
                <div>
                    <h2 className="product-section-title left">THC distillate</h2>
                    <p className="productbody left">Our cannabis-derived THC distillate is the foundation for industry leading vape, edible, tincture, and topical brands. Easy to formulate, high potency, and consistent color. Current inventory, pricing, Certificates of Analysis, and supply contracts available upon request.</p>
                    <p className="productbody left"><strong>Potency 90%+ THC | No Additives |  Category III Compliant</strong></p>
                    <a href="/inventory"><button className="btn btn-danger">Our Inventory</button></a>
                </div>
            </div>
            <div className="ourProductImageContainer">
                <img src={Prod1} alt="" className="ourProductItemImage" />
                <img src={Prod2} alt="" className="ourProductItemImage" />
                <img src={Prod3} alt="" className="ourProductItemImage" />
                <img src={Prod4} alt="" className="ourProductItemImage" />
            </div>
        </div>
    )
}

export default OurProduct
