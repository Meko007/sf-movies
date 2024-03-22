import { connect } from 'mongoose';
import 'dotenv/config';

const mongo = process.env.MONGO_URI as string;

export const connectDB = async () => {
	await connect(mongo)
		.then(() => {
			console.log('connected to MongoDB');
		}).catch((error) => {
			console.log(error);
		});
};