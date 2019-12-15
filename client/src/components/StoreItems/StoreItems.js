import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/shoppingCart.js';
import axios from 'axios';


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



class StoreItems extends Component {
  constructor(props){
      super(props);
      this.state = {
          items: []
      }
  }


  componentDidMount() {
    const response = axios.get('/api/nyt')
    console.log(response)
    // const items = response.data
    // this.setState({items: items}) // or this.setState({toDoItems})
  }

  handleClickAddToCart(item){
      console.log(item)
    // addItem(item);
  }
  
  render() {
      let items = this.state.items.map((item) => {
          return <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.picture}</div>
            <button onClick={() => this.handleClickAddToCart(item)}>add to cart</button>
          </li>
        });
        return (
          <ul>
            {items}
          </ul>
        )
  }
}

// const mapDispatchToProps = (dispatch) => { 
//   names : dispatch(actions.startGetNames()) 
// }
export default connect(null, {addItem})(StoreItems);
