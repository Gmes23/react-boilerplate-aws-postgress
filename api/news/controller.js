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
        const favoriteItem = req.body
        console.log(req.body)
        db.query(`INSERT INTO products(body, date_created)
                VALUES($1,  NOW())`, favoriteItem ,(db_err, db_res) => {
                    if( db_err) return next(db_err);
                    res.json(db_res.rows)
                }).catch(err=>next(err))
    }
}