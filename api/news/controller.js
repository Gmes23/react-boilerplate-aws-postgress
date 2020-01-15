// Exporting the controllers, or possible functions from an api request

const db = require('../../db/config')

module.exports = {
    favorite: (req, res, next) => {
        
        const favoriteItem = [  req.body,
                                req.user.id ]

        db.none(`INSERT INTO products (
                    body, user_id, date_created 
                    ) VALUES ( 
                        $1, $2,  NOW()
                    )`, favoriteItem, (db_err, db_res) => {
                    if( db_err) return next(db_err);
                    res.json(db_res)
                }).catch(err=>next(err))
    },
}