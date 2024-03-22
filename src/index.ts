import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './config/db';
import movies from './routes/movie.route';
import swaggerDocs from './utils/swagger';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
	credentials: true,
}));
app.use('/api', movies);

const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
	res.status(200).send('San Fran Movies');
});

app.listen(port, async () => {
	console.log(`server is listening on port ${port}`);
	await connectDB();
	swaggerDocs(app, port as number);
});

export default app;