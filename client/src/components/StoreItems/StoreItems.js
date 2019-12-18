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


  async componentDidMount() {
    // const response = axios.get('/api/nyt')
    const response = await axios.get('https://newsapi.org/v2/top-headlines' 
                        + '?sources=associated-press,entertainment-weekly' 
                        + '&apiKey=a693881ff8804807bbe20a00b7b14006')
    console.log(response.data.articles)
    const items = response.data.articles
    this.setState({items: items}) // or this.setState({toDoItems})
  }

  handleClickAddToCart(item){
      console.log(this.state)
    // addItem(item);
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

// const mapDispatchToProps = (dispatch) => { 
//   names : dispatch(actions.startGetNames()) 
// }
export default connect(null, {addItem})(StoreItems);
