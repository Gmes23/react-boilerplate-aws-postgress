import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArticles, deleteArticles } from '../../actions/articles'

class UserProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        this.props.dispatch(fetchArticles())
    }

    handleClickDeleteItem(item) {
        this.props.deleteArticles(item);
        this.props.dispatch(fetchArticles())
    }


    render() {


        var items = this.props.items.items;

        let savedArticles = items.map((item) => {
            return <li key={item.pid}>
                    <div>{item.body}</div>
                    <button onClick={() => this.handleClickDeleteItem(item)}> DELETE </button>
                </li>
        });


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
        fetchArticles: () => dispatch(fetchArticles()),
        deleteArticles: item => {
            dispatch(deleteArticles(item))
        },
        dispatch
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);