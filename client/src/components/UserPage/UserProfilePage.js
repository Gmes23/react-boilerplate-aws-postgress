import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchArticles, deleteArticles } from '../../actions/articles'
// import deleteArticles from '../../actions/articles'



class UserProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    // this might need to be change to component did update
    async componentDidMount() {

        this.props.dispatch(fetchArticles())
    }

    handleClickDeleteItem(item) {
        // console.log(item, ' this is handleCLickDeleteItem')
        this.props.deleteArticles(item)
    }

    render() {
        // the data was saved as an object originally to save time,
        // react wont render objects so we can stringify it to render
        // the articles saved
        console.log(this.props.items.items, 'this is items')

        var items = this.props.items.items;

        let savedArticles = items.map((item) => {
            return <li key={item.pid}>
                    <div>{item.body}</div>
                    <button onClick={() => this.handleClickDeleteItem(item)}>DELETE</button>

                  </li>
        });

        // var items = [JSON.stringify(this.props.items.items)];

        // let savedArticles = items.map((item) => {
        //     return <li key={item.date_created}>
        //       <div>{item.author}</div>
        //       <div>{item.body}</div>
        //       <button onClick={() => this.handleClickDeleteItem(item)}>DELETE</button>
  
        //     </li>
        //   });
        return (
            <div>
                <h1>USER PROFILE</h1>
                <ul>
                    {savedArticles}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      fetchArticles: () => dispatch(fetchArticles()),
      deleteArticles: item => {
        console.log(item)
        dispatch(deleteArticles(item))},
        dispatch
    }
  }

//   const mapDispatchToProps = (dispatch, item) => {
//     return {
//       handleClickDeleteIteme: () => {
//         dispatch(deleteArticles(item));
//       },
//       fetchArticles: () => dispatch(fetchArticles()),
//       dispatch

//     };
//   };

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);