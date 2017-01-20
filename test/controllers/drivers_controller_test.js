//assert library for asserting tests are true/false. 
const assert  = require('assert');
//allows you to make API calls in tests. 
const request = require('supertest');
const app     = require('../../app');


describe('Drivers controller',  () => {
	it('Post to /api/drivers creates a new driver',  (done) => {
		request(app)
			.post('/api/drivers')
			.send({ email: 'test@test.com' })
			.end( () => {
				console.log('heo');
				done();
			});
	});
});