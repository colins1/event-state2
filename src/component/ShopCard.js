import React from 'react';
import PropTypes from 'prop-types';

function ShopCard (props) {
    const {products} = props
    let arreyProd = products.map((product, i) =>
        <div key={i} className='poductSectorCard' style={{ backgroundImage: `url("${product.img}")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className="title">
            <h2>{product.name}</h2>
            <p>{product.color}</p>
        </div>
        <div className="block-buy">
            <p>${product.price}</p>
            <button>ADD TO CART</button>
        </div>
    </div>
   )

    return (
        <div className='poductsSectorCard'>
            {arreyProd}
        </div>
    )
}

export default ShopCard;

ShopCard.propTypes = {
    products: PropTypes.array.isRequired
}