import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedArticles: []
        }
    }

    async componentDidMount() {
        // const getArticles = await fetch('/api/news/savedArticles',
        // { 
        // credentials: 'include',
        //     headers: {
        //         'Content-Type': 'application/json'
        //      }, 
        // })
        //     .then(function(response) {
        //     console.log(JSON.stringify(response))
        //   });
        // console.log('this is getArticles from CDM in userProfilePage', getArticles)
        // const savedArticles = getArticles
        // this.setState({ savedArticles: savedArticles })
        const getArticles =  await fetch('http://localhost:3100/api/news/savedArticles',
        { 
            credentials: 'include',
            method: 'GET',
             headers: {
                 'Content-Type': 'application/json'
              }})
         .then(handleErrors)
         .then(res => res.json())
        // fetch('/news/savedArticles', { credentials: 'include' })
        // .then(res => res.json())
        function handleErrors(response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response;
          }
        
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

export default UserProfilePage