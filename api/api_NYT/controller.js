// Exporting the controllers, or possible functions from an api request

module.exports = {
    res: (req, res, next ) => {
        console.log('got a respong from api');
    }
}