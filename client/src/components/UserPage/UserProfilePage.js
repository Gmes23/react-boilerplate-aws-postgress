import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

import { getProducts } from '../../actions/shoppingCart'


class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedArticles: []
        }
    }

    async componentDidMount() {
        fetch('/api/news/')
        .then(response => console.log(response.json(), 'this is response frorom CDM line 18'))

        this.props.dispatch(getProducts())
        console.log(this.props, 'this is props from CDM of userprofilepage componentx')
    }

    render() {
    //   let savedArticles = this.state.savedArticles.map((item) => {
    //       return <li key={item.url}>
    //         <div>{savedArticles}</div>
    //         {/* <div>{item.author}</div>
    //         <div>{item.content}</div>
    //         <div>{item.urlToImage}</div> */}

    //         <button onClick={() => this.handleClickAddToCart(item)}>favorite</button>
    //       </li>
    //     });
        return (
            <div>
                <h1>USER PROFILE</h1>
          <ul>

            {/* {savedArticles} */}
          </ul>
          </div>

        )
    }
}

const mapStateToProps = state => ({
    products: state
  });

// const mapDispatchToProps = dispatch => ({
//     getProducts: () => dispatch(getProducts())
// })

export default connect(mapStateToProps)(UserProfilePage);