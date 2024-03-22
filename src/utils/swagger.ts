import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { version } from '../../package.json';

const options: swaggerJsdoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'SF Movies',
			version,
		},
	},
	apis: ['./src/routes/movie.route.ts', './src/models/movie.model.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app: Express, port: number) => {
	app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

	app.get('docs.json', (req: Request, res: Response) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(swaggerSpec);
	});
};

export default swaggerDocs;