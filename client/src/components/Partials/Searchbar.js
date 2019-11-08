import React, { Component } from 'react'
import { connect } from 'react-redux'

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
        this.handleSearchChange =  this.handleSearchChange.bind(this);
    }



    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form>
                    <input type="text" placeholder="Search" onChange={this.handleSearchChange} />
                </form>
            </div>
        )
    }
}

export default Searchbar