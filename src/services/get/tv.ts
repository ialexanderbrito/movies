import { TVSeries, TVSeriesId } from 'interfaces/Tv';
import { Videos } from 'interfaces/Videos';

import { api, config } from 'services/api';

export async function getTVSeries() {
  const { data } = await api.get<TVSeries>(`/tv/popular${config}`);

  const results = data.results.map((result) => ({
    ...result,
    type: 'series',
  }));

  return { results };
}

export async function getTVSeriesId(tv_id: string) {
  const { data } = await api.get<TVSeriesId>(`/tv/${tv_id}${config}`);

  return data;
}

export async function getVideoSerieId(tv_id: string) {
  const { data } = await api.get<Videos>(`/tv/${tv_id}/videos${config}`);

  const results = data.results;

  return { results };
}
