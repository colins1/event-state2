import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import {products} from './Items';

class Store extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            icon: "view_list"
          }
    }

    render() {
        retuen (
            <div>
                <IconSwitch icon={this.state.icon} onSwitch={this.state.icon == "view_list" ? this.setState({icon: "view_module"}) : this.setState({icon: "view_list"})} />
                {this.state.icon === "view_module" ? <CardsView cards={<ShopCard products={products} />} /> : 
                <ListView items={<ShopItem products={products} />} />
                }
            </div>
        )
    }
}

export default Store