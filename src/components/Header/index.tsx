<<<<<<< HEAD
import {SignInButton} from "../SigninButton/index";
import styles from "./styles.module.scss";
=======
import Link from 'next/link';
import {useRouter} from 'next/router';
import {ActiveLink} from '../ActiveLink';

import {SignInButton} from '../SignInButton/index';

import styles from './styles.module.scss';
>>>>>>> 3b7cf34520d5b7e4ead2905b2190fdb9c94314ac

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
<<<<<<< HEAD
          <a className={styles.active}>Home</a>
          <a>Posts</a>
=======
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
>>>>>>> 3b7cf34520d5b7e4ead2905b2190fdb9c94314ac
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
