import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/shoppingCart.js';
import axios from 'axios';

/*
  THIS GETS ITEMS FROM THE API AND RENDERS IT TO THE
  COMPONENT, SHOULD BE CHANGED AS REDUX SHOULD BE FETCHING 
  DATA FROM THE CONTROLLER ROUTE
*/

// class StoreItems extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             items: [
//               { id: '1', name: 'car', price: '232', picture: 'picturehehe' },
//               { id: '2', name: 'shoes', price: '959', picture: 'picturetestwo' },
//               { id: '3', name: 'purse', price: '1030', picture: 'picturetesthree' },
//             ]
//         }
//     }

//     handleClickAddToCart(item){
//         console.log(item)
//       addItem(item);
//     }
    
//     render() {
//         let items = this.state.items.map((item) => {
//             return <li key={item.id}>
//               <div>{item.name}</div>
//               <div>{item.price}</div>
//               <div>{item.picture}</div>
//               <button onClick={() => this.handleClickAddToCart(item)}>add to cart</button>
//             </li>
//           });
//           return (
//             <ul>
//               {items}
//             </ul>
//           )
//     }
// }

// // const mapDispatchToProps = (dispatch) => { 
// //   names : dispatch(actions.startGetNames()) 
// // }
// export default connect(null, {addItem})(StoreItems);


// right now axios gets an array of items 20, and then on click we set the new state 
// to all of this 20 items then we send all these items to the database with redux, 
// this should be changed so that only one item is end
class StoreItems extends Component {
  constructor(props){
      super(props);
      this.state = {
          items: []
      }
  }


  async componentDidMount() {
    // const response = axios.get('/api/nyt')
    const response = await axios.get('https://newsapi.org/v2/top-headlines' 
                        + '?sources=associated-press,entertainment-weekly' 
                        + '&apiKey=a693881ff8804807bbe20a00b7b14006')
    // console.log(response.data.articles)
    const items = response.data.articles
    this.setState({items: items }) // or this.setState({toDoItems})
  }

  handleClickAddToCart(item){
    // console.log(item)
    // this.props.fetchProducts(this.state)
    this.props.fetchProducts(item)

    console.log(item)
  }
  
  render() {
      let items = this.state.items.map((item) => {
          return <li key={item.url}>
            <div>{item.title}</div>
            <div>{item.author}</div>
            <div>{item.content}</div>
            <div>{item.urlToImage}</div>

            <button onClick={() => this.handleClickAddToCart(item)}>favorite</button>
          </li>
        });
        return (
          <ul>
            {items}
          </ul>
        )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  fetchProducts: (item) => dispatch(fetchProducts(item))
})

// const mapDispatchToProps = dispatch => ({
//   onClick: () => dispatch(fetchProducts(id))
// })


export default connect(mapStateToProps, mapDispatchToProps)(StoreItems);
