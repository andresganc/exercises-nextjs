
import Head from 'next/head'
import Link from 'next/link'

// NC Components Base
import Div from '../components/div'
import H4 from '../components/h4'
import Button from '../components/button'

// Menu
import Menu from './_menu'

export default function Home() {
  return (
    <div>

      <Head>
        <title> Next </title>
      </Head>

      <body>

        <main>

        <Div displayFlex jcCenter>
          <H4> COURSE NC - NEXTJS </H4>
        </Div>

        <Menu />

        </main>

      </body>

      <footer>

      </footer>
    </div>
  )
}
