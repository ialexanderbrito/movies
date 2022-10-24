import { ResultMovies } from 'interfaces/Movies';
import { ResultSearch } from 'interfaces/Search';
import { ResultTrendings } from 'interfaces/Trendings';
import { ResultTVSeries } from 'interfaces/Tv';

import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Category } from 'components/Category';
import { Header } from 'components/Header';
import { SkeletonList } from 'components/SkeletonList';

import { useTheme } from 'contexts/Theme';

import { useHome } from 'hooks/Home';

import styles from './Home.module.scss';

export function Homepage() {
  const { theme } = useTheme();

  const {
    movies,
    trendings,
    series,
    allSearch,
    isLoadingSearch,
    isLoadingTVSeries,
    setSearch,
    page,
    setPage,
    selectedCategory,
    isLoadingMovies,
    isLoadingTrendings,
  } = useHome();

  return (
    <>
      <div className={styles.container} data-theme={theme}>
        <Header />
        <section>
          <div className={styles.home}>
            <h1>Filmes&Séries</h1>

            <p>
              Lista de filmes e séries baseada na API{' '}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noreferrer"
              >
                The Movie DB
              </a>{' '}
              as mais populares do momento e os recentes lançamentos. Você pode
              pesquisar seu filme ou série favorito.
            </p>
            <input
              type="text"
              className={styles.search}
              placeholder="Digite o nome da série ou filme"
              onChange={(e) => setSearch(e.target.value)}
              maxLength={50}
            />
          </div>
        </section>

        <section>
          <div className={styles.category}>
            {!allSearch ? (
              <Category />
            ) : (
              <>
                <Category disabled />
              </>
            )}
          </div>
        </section>

        {allSearch && (
          <section>
            <div className={styles.card}>
              {allSearch?.results.map((item: ResultSearch) => (
                <>
                  {isLoadingSearch ? (
                    <SkeletonList />
                  ) : (
                    <Card key={item.id} movies={item} />
                  )}
                </>
              ))}
            </div>
            <div className={styles.containerButton}>
              <Button
                disabled={page === 1}
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                Carregar menos
              </Button>

              <Button
                onClick={() => {
                  setPage(page + 1);
                }}
                disabled={allSearch.total_pages === page}
              >
                Carregar mais
              </Button>
            </div>
          </section>
        )}

        {selectedCategory === 'all' && !allSearch?.results && (
          <>
            <section>
              <div className={styles.card}>
                {trendings?.results.map((item: ResultTrendings) => (
                  <>
                    {isLoadingMovies ? (
                      <SkeletonList />
                    ) : (
                      <Card key={item.id} movies={item} />
                    )}
                  </>
                ))}
              </div>
            </section>

            <section>
              <div className={styles.trendings}>
                <h2>Os mais populares - Cinema</h2>
              </div>
              <div className={styles.card}>
                {movies?.results.map((item: ResultMovies) => (
                  <>
                    {isLoadingTrendings ? (
                      <SkeletonList />
                    ) : (
                      <Card key={item.id} movies={item} />
                    )}
                  </>
                ))}
              </div>
            </section>

            <section>
              <div className={styles.trendings}>
                <h2>Os mais populares - TV</h2>
              </div>
              <div className={styles.card}>
                {series?.results.map((item: ResultTVSeries) => (
                  <>
                    {isLoadingTVSeries ? (
                      <SkeletonList />
                    ) : (
                      <Card key={item.id} movies={item} />
                    )}
                  </>
                ))}
              </div>
            </section>
          </>
        )}

        {!allSearch && selectedCategory === 'movies' && (
          <section>
            <div className={styles.trendings}>
              <h2>Os mais populares - Cinema</h2>
            </div>
            <div className={styles.card}>
              {movies?.results.map((item: ResultMovies) => (
                <>
                  {isLoadingTrendings ? (
                    <SkeletonList />
                  ) : (
                    <Card key={item.id} movies={item} />
                  )}
                </>
              ))}
            </div>
          </section>
        )}

        {!allSearch && selectedCategory === 'tv' && (
          <section>
            <div className={styles.trendings}>
              <h2>Os mais populares - TV</h2>
            </div>
            <div className={styles.card}>
              {series?.results.map((item: ResultTVSeries) => (
                <>
                  {isLoadingTVSeries ? (
                    <SkeletonList />
                  ) : (
                    <Card key={item.id} movies={item} />
                  )}
                </>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
