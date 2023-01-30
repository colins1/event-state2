import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import {products} from './Items';
import ShopCard from './ShopCard';
import ShopItem from './ShopItem';

class Store extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            icon: "view_list"
        }
        this.products = products;
    }

    render() {
        return (
            <div>
                <IconSwitch icon={this.state.icon} onSwitch={() => {this.state.icon == "view_list" ? this.setState({icon: "view_module"}) : this.setState({icon: "view_list"})}} />
                {this.state.icon === "view_module" ? <CardsView cards={<ShopCard products={this.products} />} /> : <ListView items={<ShopItem products={this.products} />} />}
            </div>
        )
    }
}

export default Store

Store.propTypes = {
    products: PropTypes.array.isRequired
}