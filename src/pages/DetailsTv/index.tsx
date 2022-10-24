import { AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { Pinwheel } from '@uiball/loaders';
import { DefaultUi, Player, Youtube } from '@vime/react';
import { format } from 'date-fns';

import { Header } from 'components/Header';

import { useTheme } from 'contexts/Theme';

import { getTVSeriesId, getVideoSerieId } from 'services/get/tv';

import styles from './Details.module.scss';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export function DetailsTv() {
  const { id } = useParams();
  const { theme } = useTheme();

  const { data, isLoading } = useQuery(
    ['detailsSeries', id],
    () => getTVSeriesId(id as string),
    {
      staleTime: 50000,
    },
  );

  const { data: video } = useQuery(
    ['video', id],
    () => getVideoSerieId(id as string),
    {
      staleTime: 50000,
    },
  );

  if (!video?.results) {
    return null;
  }

  console.log('vie', data);

  return (
    <>
      <div className={styles.wrapper} data-theme={theme}>
        <Header />
        {isLoading ? (
          <Pinwheel size={35} lineWeight={3.5} speed={1} color="#FFF" />
        ) : (
          <>
            <section>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <img
                    src={`${IMAGE_URL}${data?.backdrop_path}`}
                    alt={data?.title}
                    className={styles.background}
                  />
                </div>

                <div className={styles.title}>
                  <h1>{data?.name}</h1>
                  <span>
                    {data?.genres.map((genre) => genre.name).join(', ')}
                  </span>
                </div>
              </div>
            </section>
            <section>
              <div className={styles.containerDetail}>
                <img
                  src={`${IMAGE_URL}${data?.poster_path}`}
                  alt={data?.title}
                  className={styles.poster}
                />

                <div className={styles.description}>
                  <h3>{data?.tagline}</h3>
                  <br />
                  <p>{data?.overview}</p>
                  <br />
                  <div className={styles.rating}>
                    <AiOutlineStar size={18} color="#FFAD49" />
                    {data?.vote_average ? (
                      <p>{(data?.vote_average * 10).toFixed(0)}%</p>
                    ) : (
                      '-%'
                    )}
                  </div>
                  <br />

                  <p>Data</p>
                  <p>
                    {data?.first_air_date
                      ? format(new Date(data?.first_air_date), 'dd/MM/yyyy') ||
                        format(new Date(), 'dd/MM/yyyy')
                      : '-'}
                  </p>
                  <br />
                  <p>Generos</p>
                  <p>{data?.genres.map((genre) => genre.name).join(', ')}</p>
                </div>
              </div>
            </section>

            {video?.results.length > 0 && (
              <section>
                <div className={styles.streaming}>
                  <h2>Trailer</h2>
                  <Player>
                    <Youtube videoId={video?.results[0].key as string} />
                    <DefaultUi />
                  </Player>
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}
