import React, {Component} from 'react';

class StoreItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
              { id: '1', name: 'car', price: '232', picture: 'picturehehe' },
              { id: '2', name: 'shoes', price: '959', picture: 'picturetestwo' },
              { id: '3', name: 'purse', price: '1030', picture: 'picturetesthree' },
            ]
        }
    }

    render() {
        let items = this.state.items.map((item) => {
            return <li key={item.id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.picture}</div>
              <button>add to cart</button>
            </li>
          });
          return (
            <ul>
              {items}
            </ul>
          )
    }
}

export default StoreItems;