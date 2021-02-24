import Head from 'next/head'

// NC Components
import Prueba01 from '../components/prueba/prueba-01'

export default function Home() {
  return (
    <div>

      <Head>
        <title> Next </title>
      </Head>

      <main>
        
        <h2> ESTO ES NEXT </h2>

        <Prueba01 />
      </main>

      <section>

      </section>


      <footer>
        <h2> ESTE ES EL FOOTER DE NEXT </h2>
      </footer>
      
    </div>
    
  )
}
