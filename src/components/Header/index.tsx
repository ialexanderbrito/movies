import { Link } from 'react-router-dom';

import logo from 'assets/logo.png';

import { useCategory } from 'contexts/Category';

import styles from './Header.module.scss';

export function Header() {
  const { setSelectedCategory } = useCategory();

  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="#movies" onClick={() => setSelectedCategory('movies')}>
              Filmes
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#series" onClick={() => setSelectedCategory('tv')}>
              Séries
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="">Outros</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
