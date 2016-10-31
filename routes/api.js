const config = require('../config/config')();
const monk = require('monk');
const db = monk(config.mongoUrl);
const wrap = require('co-monk');

var orders = wrap(db.get('orders'));

module.exports = function (app, route) {
    app.use(route.get('/api/orders', function *(next) {
        if ('GET' !== this.method) return yield next;
        this.body = yield orders.find({});
    }));
};