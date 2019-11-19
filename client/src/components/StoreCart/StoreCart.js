import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from '../../store';

class StoreCart extends Component {
    constructor(props) {
        super(props);

        this.state ={
            cartItems:[]
        };
    }
    render() {
        console.log(this.state)
        return (
            <div> 
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return console.log(state)
    
}

export default connect(mapStatetoProps)(StoreCart);