import { useCategory } from 'contexts/Category';

import styles from './Category.module.scss';

interface CategoryProps {
  disabled?: boolean;
}

export function Category(props: CategoryProps) {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className={styles.container}>
      <div
        className={
          selectedCategory === 'all'
            ? styles.selectedCategory
            : styles.notSelectedCategory
        }
        onClick={props.disabled ? () => {} : () => setSelectedCategory('all')}
      >
        Tudo
      </div>
      <div
        className={
          selectedCategory === 'movies'
            ? styles.selectedCategory
            : styles.notSelectedCategory
        }
        onClick={
          props.disabled ? () => {} : () => setSelectedCategory('movies')
        }
      >
        Filmes
      </div>
      <div
        className={
          selectedCategory === 'tv'
            ? styles.selectedCategory
            : styles.notSelectedCategory
        }
        onClick={props.disabled ? () => {} : () => setSelectedCategory('tv')}
      >
        Séries
      </div>
    </div>
  );
}
