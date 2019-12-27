// Exporting the controllers, or possible functions from an api request

// this needs to be move to its seperate file 
const db = require('../../db/config')

module.exports = {
    res: (req, res, next) => {
        console.log('news-api-first route- got a respond from api');
    },
    // favorite: (req, res, next) => {
    //     console.log( res.body , 'hit favorite')
    //     next();
    //     // console.log( res.locals, 'hit favorite')
    // },

    favorite: (req, res, next) => {
        //object gotten from shoppingCart
        //react component threw redux action
        const favoriteItem = [  req.body,
                                req.user.id ]
        // const favoriteItem = ['bodytest', 1]
        // console.log(req.body, res, 'this is res ')
        // console.log(req.user.id, 'this is res from favorite route ')

        //reasearch db. none, db.one. db.query
        db.none(`INSERT INTO products (
                    body, user_id, date_created 
                    ) VALUES ( 
                        $1, $2,  NOW()
                    )`, favoriteItem, (db_err, db_res) => {
                    if( db_err) return next(db_err);
                    res.json(db_res)
                    console.log(db_res, 'this is the favorite controller api db_res')
                }).catch(err=>next(err))
    },

    // right now we will user db.query to get our user saved
    // articles however when we want different items multiple times
    // we should only query the db once therefore we should use
    // task instead
    /*
    All methods underneath use method query, which allocates and releases the connection, so chaining them directly will result in poor connection usage, compromising performance and scalability.

Instead, you should use method task, which allocates and releases the connection only once, providing a connection context well suited for executing multiple queries at once:
*/
    savedArticles: (req, res, next) => {
        const userSaveArticles = [
            36
        ]

            // (
        //      body, user_id, date_created
        //      ) 
        db.query(`SELECT * FROM products WHERE user_id=36;`, (db_err, db_res) => {
                if( db_err) return next(db_err);
                res.json(db_res)
                console.log(db_res, 'this is the get saved user articles respond')
            }).catch(err=>next(err))
    }


}