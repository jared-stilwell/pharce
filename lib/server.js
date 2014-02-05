var http = require('http');
var connect = require('connect');
var connect_php = require('connect-php');

module.exports = {

	start: function( config ) {
		var port = config.port || 9001;
		var staticDir = config.static || 'public';
		var baseDir = config.base || '.';

		var app = connect()
			.use(connect.logger('dev'))
			.use(connect.static( staticDir ))
			.use(connect_php( baseDir ))
			.use(function(req, res){
				// TODO: add proper 404 content here.
				res.end('page not found.\n');
			});

		http.createServer( app ).listen( port );

		console.info('\nServer started at http://localhost:' + port + '/');
		console.info(' - base directory = ' + baseDir + '/' );
		console.info(' - static assets = ' + staticDir + '/');

		console.log('\x1B[32m');
		console.info('                   ____');
		console.info('                _.\' :  `._');
		console.info('            .-.\'`.  ;   .\'`.-.');
		console.info('   __      / : ___\ ;  /___ ; \      __');
		console.info(' ,\'_ ""--.:__;".-.";: :".-.":__;.--"" _`,');
		console.info(' :\' `.t""--.. \'<@.`;_  \',@>` ..--""j.\' `;');
		console.info('      `:-.._J \'-.-\'L__ `-- \' L_..-;\'');
		console.info('        "-.__ ;  .-"  "-.  : __.-"    USING THE PHARCE YOU ARE!');
		console.info('            L \' /.------.\ \' J');
		console.info('             "-.   "--"   .-"');
		console.info('            __.l"-:_JL_;-";.__');
		console.info('         .-j/\'.;  ;""""  / .\'\"-.');
		console.log('\n \x1B[39m');
	}
};