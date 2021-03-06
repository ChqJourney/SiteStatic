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
        <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKD4BGQZ37"></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-TKD4BGQZ37');`
            }}
          />
        </Head>
        <body className='font-sans antialiased text-gray-600 dark:bg-gray-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument