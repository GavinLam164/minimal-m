import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="/static/css/swiper.css" />
        </Head>
        <body style={{ margin: 0 , background: 'white'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
