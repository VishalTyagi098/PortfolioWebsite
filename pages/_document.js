import { Html, Head, Main, NextScript } from 'next/document'

// this is A custom Document that can update the <html> and <body> tags used to render a Page. This file is only rendered on the server, so event handlers like onClick cannot be used in _document.
// we made this to import font links

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}