<<<<<<< HEAD
import Document, {
  Head,
  Html,
  Main,
  NextScript
} from "../../node_modules/next/document";
=======
import Document, {Html, Head, Main, NextScript} from 'next/document';
>>>>>>> 3b7cf34520d5b7e4ead2905b2190fdb9c94314ac

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
