var http = require('http');
var connect = require('connect');
var connect_php = require('connect-php');

module.exports = {

	start: function() {
		var app = connect()
			.use(connect.logger('dev'))
			.use(connect.static('public'))
			.use(connect_php('.'))
			.use(function(req, res){
				// TODO: add proper 404 content here.
				res.end('page not found.\n');
			});

		http.createServer( app ).listen( 9001 );
	}
};