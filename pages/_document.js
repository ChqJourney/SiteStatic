import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
            
        </Head>
        <body className='font-sans antialiased text-gray-600 min-h-full'>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument