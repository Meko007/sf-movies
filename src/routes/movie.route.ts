import { Router } from 'express';
import { getMovies } from '../controllers/movie.controller';

const router = Router();

/**
 * @openapi
 * /api/movies:
 *  get:
 *     tags:
 *       - Movies
 *     description: Returns a paginated list of movies
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search query to filter movies
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/movies', getMovies);

export default router;