const assert = require('assert');
//this is a library used to make fake api calls (get, post, delete etc) for running test within mocha. 
const request = require('supertest');
const app = require('../app');


describe('The express app',  () => {


	it('handles a GET requrest to /api',  (done) => {
		request(app)
			.get('/api')
			.end( (err, response) => {
				assert(response.body.hi === 'there');
				done();
			});
	});

});