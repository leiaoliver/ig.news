<<<<<<< HEAD
import { AppProps } from "../../node_modules/next/app";
import { Header } from "../components/Header/index";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
=======
import {AppProps} from 'next/app';
import {Header} from '../components/Header/index';
import {SessionProvider} from 'next-auth/react';

import '../styles/global.scss';

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />;
    </SessionProvider>
>>>>>>> 3b7cf34520d5b7e4ead2905b2190fdb9c94314ac
  );
}

export default MyApp;
