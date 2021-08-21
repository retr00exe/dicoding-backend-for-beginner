const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
	const server = Hapi.server({
		port: process.env.PORT || 5000,
		host:
			process.env.NODE_ENV === 'development'
				? '127.0.0.1'
				: process.env.HOSTNAME,
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	});

	server.route(routes);

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
