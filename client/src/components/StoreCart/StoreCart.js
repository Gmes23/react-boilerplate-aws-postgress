import React, { Component } from 'react';
import { connect } from 'react-redux'

class StoreCart extends Component {
    constructor(props) {
        super(props);
    }

    createListItems() {
        return console.log(this.props.cartItems)
    }
 
    render() {
        console.log(this.state)
        return (
            <div> 
                {this.createListItems()}
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return { 
        cartItems: state.storeCart
    }
}

export default connect(mapStatetoProps)(StoreCart);