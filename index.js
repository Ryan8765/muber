const app = require('./app');

//tells the app what port to listen to.  It is listening for requests coming in on port 3050.
app.listen(3050,  () => {
	console.log( 'Running on port 3050' );
});


