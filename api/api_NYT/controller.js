// Exporting the controllers, or possible functions from an api request

module.exports = {
    res: (req, res, next ) => {
        console.log('nyt-api-first route- got a respond from api');
    }
}