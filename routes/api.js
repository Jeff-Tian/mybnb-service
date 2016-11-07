const config = require('../config/config')();
const monk = require('monk');
const db = monk(config.mongoUrl);
const wrap = require('co-monk');
const parse = require('co-body');
const Order = require('../BLL/order');

var orders = wrap(db.get('orders'));

module.exports = function (app, route) {
    app.use(route.get('/api/connection', function*(next) {
        this.body = require('../config/config')().mongoUrl;
    }));

    app.use(route.get('/api/orders', function *(next) {
        this.body = yield orders.find({});
    }));

    app.use(route.put('/api/orders', function *(next) {
        var order = yield parse(this);
        order.status = Order.status.pending;
        order.created_at = new Date;

        this.body = yield orders.insert(order);
    }));
};