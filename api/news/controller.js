// Exporting the controllers, or possible functions from an api request

const db = require('../../db/config')

module.exports = {
    res: (req, res, next) => {
        db.query(`SELECT * FROM products`, (db_err, db_res) => {
            console.log(db_err, 'this is the favorite controller api db_res')

            if( db_err) return next(db_err);
            res.json(db_res)
        }).catch(err=>next(err))
    },

    favorite: (req, res, next) => {
        //object gotten from shoppingCart
        //react component threw redux action
        const favoriteItem = [  req.body,
                                req.user.id ]

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
}