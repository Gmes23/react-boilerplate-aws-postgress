import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state={
      homeItems: [{
        id: '1',
        name:'item 1', 
        price: 'price',
        picture: 'picture',
      }]
    }
  }
  render() {

    console.log(this.state)
    return(
     
      <div> 
        <ul key={this.state.map(this)}/>
        // WELCOME HOME 

      </div>

    )
  }
}

export default Home
