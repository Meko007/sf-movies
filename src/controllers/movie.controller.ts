import { Request, Response } from 'express';
import MovieModel from '../models/movie.model';

export const getMovies = async (req: Request, res: Response) => {
	try {
		const { page = 1, search } = req.query;
		const skip = (Number(page) - 1) * 20;

		const searchQuery = search ? {
			$and: [
				{ title: { $regex: new RegExp(search as string, 'i') } },
			]
		} : {};

		const movies = await MovieModel.find(searchQuery, '-_id -createdAt -updatedAt -__v')
			.skip(skip)
			.limit(20);

		res.status(200).json(movies);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};