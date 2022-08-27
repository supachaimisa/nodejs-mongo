const { get, create, update, del } = require('../controllers/food.controller')

const foodRoute = (app) => {
app.route('/food')
.get(get)
.post(create)
.put(update)
.delete(del)
}
module.exports = foodRoute