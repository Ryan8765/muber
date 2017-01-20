const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({

	email: {
		type: String,
		required: true
	},
	driving: {
		type: Boolean,
		//defaults driving status is false, if this property isn't filled in.
		default: false
	}

});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
