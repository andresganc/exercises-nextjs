
import Head from 'next/head'
import Link from 'next/link'

// NC Components
import Div from '../components/div'
import H2 from '../components/h2'
import Button from '../components/button'

// Course NC
import LinkBasic from '../01-basic/link/link-basic.tsx'


export default function Home() {
  return (
    <div>

      <Head>
        <title> Next </title>
      </Head>

      <main>

        <LinkBasic />

      </main>

      <section>

      </section>


      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <body>

        

      </body>

      <footer>

      </footer>
    </div>
  )
}
