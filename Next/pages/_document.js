import Document, { Head, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en-GB">
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}