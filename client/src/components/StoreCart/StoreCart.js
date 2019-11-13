import React, { Component } from 'react';

class StoreCart extends Component {
    constructor() {
        super();
        this.state ={
            cart: [{}]
        }
    }

    render() {
        return (
            <button> Storecart </button>
        )
    }
}

export default StoreCart;