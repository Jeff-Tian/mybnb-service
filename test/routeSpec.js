'use strict';

var superagent = require('supertest');
var app = require('../app');

function request() {
    return superagent(app.listen());
}

describe('Routes', function () {
    describe('GET /', function () {
        it('should return 200', function (done) {
            request()
                .get('/')
                .expect(200, done);
        });
    });

    describe('GET /api/orders', function () {
        it('should return 200', function (done) {
            request()
                .get('/api/orders')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});