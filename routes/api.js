const config = require('../config/config')();
const monk = require('monk');
const db = monk(config.mongoUrl);
const wrap = require('co-monk');
const parse = require('co-body');

var orders = wrap(db.get('orders'));

module.exports = function (app, route) {
    app.use(route.get('/api/orders', function *(next) {
        this.body = yield orders.find({});
    }));

    app.use(route.put('/api/orders', function *(next) {
        var order = yield parse(this);
        order.created_at = new Date;

        yield orders.insert(order);

        this.body = 'done';
    }));
};