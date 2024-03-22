import { model, Schema } from 'mongoose';

const movieSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		releaseYear: {
			type: Number,
			required: true,
		},
		location: {
			type: String,
			default: 'N/A',
		},
		funFact: {
			type: String,
			default: 'N/A',
		},
		productionCompany: {
			type: [String],
			required: true,
		},
		distributor: {
			type: [String],
			default: ['N/A'],
		},
		director: {
			type: [String],
			required: true,
		},
		writer: {
			type: [String],
			required: true,
		},
		actors: {
			type: [String],
			required: true,
		},
		state: {
			type: String,
			default: 'CA',
		},
		city: {
			type: String,
			default: 'San Francisco',
		},
		point: {
			type: {
				type: String,
				enum: ['Point'],
				required: true,
			},
			coordinates: {
				type: [Number],
				required: true,
			},
		},
	},
	{ timestamps: true }
);

const MovieModel = model('Movie', movieSchema);

export default MovieModel;