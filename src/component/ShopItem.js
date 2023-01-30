import React from 'react';
import PropTypes from 'prop-types';

function ShopItem (props) {
    const {products} = props
    let arreyProd = products.map((product, i) =>
        <div key={i} className='poductSectorList'>
        <img src={product.img} className="imgList"/>
        <h2>{product.name}</h2>
        <p>{product.color}</p>
        <p>${product.price}</p>
        <button>ADD TO CART</button>
    </div>
   )

    return (
        <div className='poductsSectorList'>
            {arreyProd}
        </div>
    )
}

export default ShopItem;

ShopItem.propTypes = {
    products: PropTypes.array.isRequired
}