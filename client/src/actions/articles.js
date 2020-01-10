// This is the saveArticles actions and reducer, here only user that are auth
// can save articles to their page, and only logged in user can see their saved 
// articles

export function fetchArticles() {
    return (dispatch) => {
       
        dispatch(fetchArticlesBegin());
        return fetch('/api/savedArticles',
            {
                credentials: 'include',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(handleErrors)
            .then(res => res.json())
            .then(articles => {
                dispatch(fetchArticlesSuccess(articles));
                return articles;
            })
            .catch(error => dispatch(fetchArticlesFailure(error)));
    };
}


export function deleteArticles(item) {
    return (dispatch) => {
        
            dispatch(fetchArticlesBegin());
            return fetch('/api/deleteArticles',
                {
                    credentials: 'include',
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ item })
                })
                .then(handleErrors)
                .then(res => res.json())
                .then(articles => {
                    dispatch(fetchArticlesSuccess(articles));
                    return articles;
                })
                .catch(error => dispatch(fetchArticlesFailure(error)));
    };
}

//   Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesBegin = () => ({
    type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = articles => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles }
});

export const fetchArticlesFailure = error => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: { error }
});


const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLES_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_ARTICLES_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload.articles,
            };

        case FETCH_ARTICLES_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.articles.error,
                items: []
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}