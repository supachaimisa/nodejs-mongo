const foodRoute = require('./food.route')
const routes = (app) => {
    foodRoute(app)
}
module.exports = routes
