import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import noCoverImg from 'assets/no-cover.jpg';
import { ResultTrendings } from 'interfaces/Trendings';
import { ResultTVSeries } from 'interfaces/Tv';

import styles from './Card.module.scss';

interface TrendingProps {
  movies: ResultTrendings | ResultTVSeries;
}

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export function Card(props: TrendingProps) {
  return (
    <div className={styles.card}>
      <div className={styles.rating}>
        <AiOutlineStar size={18} color="#FFAD49" />
        {props.movies.vote_average ? (
          <p>{(props.movies.vote_average * 10).toFixed(0)}%</p>
        ) : (
          '-%'
        )}
      </div>
      {props.movies.title !== undefined ? (
        <Link to={`/movie/${props.movies.id}`}>
          <img
            src={
              props.movies.poster_path
                ? `${IMAGE_URL}${props.movies.poster_path}`
                : noCoverImg
            }
            alt={props.movies.title || props.movies.name}
            className={styles.image}
          />
        </Link>
      ) : (
        <Link to={`/series/${props.movies.id}`}>
          <img
            src={
              props.movies.poster_path
                ? `${IMAGE_URL}${props.movies.poster_path}`
                : noCoverImg
            }
            alt={props.movies.title || props.movies.name}
            className={styles.image}
          />
        </Link>
      )}
      <h3>{props.movies.title || props.movies.name}</h3>
    </div>
  );
}
