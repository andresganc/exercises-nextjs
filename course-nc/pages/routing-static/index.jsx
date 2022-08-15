
import Link from 'next/link'

// NC Components
import Div from '../components/div'
import H2 from '../components/h2'
import Button from '../components/button'

// Icons
import House from '../../public/house.svg'


const navigation = () => {
    return (
        <Fragment>

            <Div displayFlex jcSpaceBetween bgGray700>
                <Div displayFlex>
                    <H2 textWhite bold> LOGO </H2>
                </Div>

                <Div displayFlex textWhite>
                    <Link href="/"><Button round> Inicio </Button></Link>
                    <Link href="/about"><Button round> Acerca de </Button></Link>
                    <Link href="/routing-static"><Button round> Ruta estatica </Button></Link>
                </Div>

                <Div displayFlex>
                    <H2 textWhite bold> LOGIN </H2>
                </Div>
            </Div>

            {/* Header */}
            <Div displayGrid bgBlue600 center >
                <H2 h2 textWhite bold center> Static & Dinamic Routing </H2>
                <H2 h3 textOrange600 bold center> HOME PAGE </H2>
            </Div>

            {/* Section */}
            <Div displayGrid bgGray400 center >
                <H2 h4 textWhite bold center> Static Routing </H2>
                <H2 p2 textWhite center> Page index cargada automaticamente </H2>
                <H2 p2 textWhite center> El routing estatico tiene un sistema llamado File System Routing,
                    en el que solo es crear un archivo y luego llamar con el nombre del archivo en Link </H2>
            </Div>

        </Fragment>
    )
}

export default navigation
