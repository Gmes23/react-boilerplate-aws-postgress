import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

import { fetchArticles } from '../../actions/articles'


class UserProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {

        this.props.dispatch(fetchArticles())
    }

    render() {
        // the data was saved as an object originally to save time,
        // react wont render objects so we can stringify it to render
        // the articles saved
        console.log(this.props.items.items, 'this is teims')

        var items = [JSON.stringify(this.props.items.items)];

        let savedArticles = items.map((item) => {
            return <li key={item}>
                <div>{item}</div>
            </li>
        });
        return (
            <div>
                <h1>USER PROFILE</h1>
                <ul>
                    {savedArticles}
                    {/* {items} */}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    fetchArticles: () => dispatch(fetchArticles()),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);