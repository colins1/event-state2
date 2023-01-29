import React from 'react';
//import PropTypes from 'prop-types';

function ListView (props) {
    const {products} = props
    let arrey =  products.map((product, i) =>
        <div key={i} className='poductSectorList'>
        <img src={product.img}/>
        <div className="title">
            <h2>{product.name}</h2>
            <p>{product.color}</p>
        </div>
        <div className="futer">
            <p>{product.price}</p>
            <button>ADD TO CART</button>
        </div>
    </div>
   )

    return (
        <div>
            {arrey}
        </div>
    )
}

export default ListView;