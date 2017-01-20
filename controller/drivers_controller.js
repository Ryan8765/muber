module.exports = {

	//es6 syntax - same as doing greeeting: () => {}
	greeting(req, res) {
		res.send({hi: 'there'});
	},
	//generally use the 'create' function name when creating a document.
	create(req, res) {
		console.log( req.body );
		res.send({hi: 'there'});
	}

};