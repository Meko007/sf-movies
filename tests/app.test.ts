import request from 'supertest';
import app from '../src/index';
import { connectDB } from '../src/config/db';
import mongoose from 'mongoose';

beforeAll(async () => {
	await connectDB();
});

afterAll(async () => {
	mongoose.disconnect();
});

describe('tests', () => {
	it('GET /', async () => {
		return request(app)
			.get('/')
			.expect(200)
			.expect('San Fran Movies');
	});

	it('GET /movies', async () => {
		const response = await request(app).get('/api/movies');
		expect(response.status).toBe(200);
		expect(response.type).toBe('application/json');
		expect(response.body).toBeDefined();
	});
});

