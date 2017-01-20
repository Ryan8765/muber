const DriversController = require('../controller/drivers_controller');

module.exports =  (app) => {


	app.get('/api',  DriversController.greeting);


	//creates the drivers
	app.post('/api/drivers', DriversController.create);


};