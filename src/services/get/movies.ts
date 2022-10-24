import { Movies, MoviesId } from 'interfaces/Movies';
import { Trendings } from 'interfaces/Trendings';
import { Videos } from 'interfaces/Videos';

import { api, config } from 'services/api';

import { Search } from './../../interfaces/Search';

export async function getMovies() {
  const { data } = await api.get<Movies>(`/movie/popular${config}`);

  const results = data.results.map((result) => ({
    ...result,
    type: 'movie',
  }));

  return { results };
}

export async function getTrending() {
  const { data } = await api.get<Trendings>(`/trending/movie/week${config}`);

  const results = data.results;

  return { results };
}

export async function getMoviesId(movie_id: string) {
  const { data } = await api.get<MoviesId>(`/movie/${movie_id}${config}`);

  return data;
}

export async function getMultiSearch(query: string, page?: number) {
  if (!query) return;

  const { data } = await api.get<Search>(
    `/search/multi${config}&query=${query}&page=${page}`,
  );

  return data;
}

export async function getVideoId(movie_id: string) {
  const { data } = await api.get<Videos>(`/movie/${movie_id}/videos${config}`);

  const results = data.results;

  return { results };
}
