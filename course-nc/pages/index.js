
import { Fragment } from 'react'
import Head from 'next/head'
<<<<<<< HEAD

// NC Components
import Prueba01 from '../components/prueba/prueba-01'
=======
import Link from 'next/link'

// NC Components
import GridContainer from '../components/grid-container/grid-container'
import FlexContainer from '../components/flex-container/flex-container'
import Typography from '../components/typography/typography'
import Avatar from '../components/avatar/avatar'
import Button from '../components/buttons/button'

// Icons
import House from '../public/house.svg'


>>>>>>> 5ed2a71a2743c2c140fffa56863b9200e07ee027

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


<<<<<<< HEAD
      <footer>
        <h2> ESTE ES EL FOOTER DE NEXT </h2>
      </footer>
      
    </div>
    
=======
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <body>
        
        {/* Menu */}
        <FlexContainer jcSpaceBetween bgGray700>
          <FlexContainer>
            <Typography textWhite bold> LOGO </Typography>
          </FlexContainer>

          <FlexContainer textWhite>
            <Link href="/"><Button round> Inicio </Button></Link>
            <Link href="/about"><Button round> Acerca de </Button></Link>
            <Link href="/routing-static"><Button round> Ruta estatica </Button></Link>
          </FlexContainer>

          <FlexContainer>
            <Typography textWhite bold> LOGIN </Typography>
          </FlexContainer>
        </FlexContainer>

        {/* Header */}
        <GridContainer bgBlue600 center >
          <Avatar src={House} circle sizeXXL/>
          <Typography h2 textWhite bold center> Static & Dinamic Routing </Typography>
          <Typography h3 textOrange600 bold center> HOME PAGE </Typography>
        </GridContainer>

        {/* Section */}
        <GridContainer bgGray400 center >
          <Typography h4 textWhite bold center> Static Routing </Typography>
          <Typography p2 textWhite center> Page index cargada automaticamente </Typography>
          <Typography p2 textWhite center> El routing estatico tiene un sistema llamado File System Routing,
                en el que solo es crear un archivo y luego llamar con el nombre del archivo en Link </Typography>
        </GridContainer>

      </body>

      <footer>

      </footer>

    </Fragment>

>>>>>>> 5ed2a71a2743c2c140fffa56863b9200e07ee027
  )
}
