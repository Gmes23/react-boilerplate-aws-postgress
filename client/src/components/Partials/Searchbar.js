import React, { Component } from 'react'

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchSubmit: ''
        }
        this.handleSearchChange =  this.handleSearchChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }

    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            searchSubmit: this.state.search
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" placeholder="Search" onChange={this.handleSearchChange} />
                </form>
            </div>
        )
    }
}

export default Searchbar