import React, { Component } from 'react'
import { connect } from 'react-redux'

class Searchbar extends Component {
    state = {
        initialSearch: [],

    }

    
    render() {
        console.log(this.state)
        return (
            <div>
                <form>
                    <input type="text" placeholder="search bar" onChange={this.state} />
                </form>
            </div>
        )
    }
}

export default Searchbar