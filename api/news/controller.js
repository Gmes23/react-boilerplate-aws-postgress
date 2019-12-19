// Exporting the controllers, or possible functions from an api request

module.exports = {
    res: (req, res, next) => {
        console.log('news-api-first route- got a respond from api');
    },
    favorite: (req, res, next) => {
        console.log( req, res, 'hit favorite')
    }
}