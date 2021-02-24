
import React, { Fragment } from 'react'
import Link from 'next/link'

// NC Components
import GridContainer from '../../components/grid-container/grid-container'
import FlexContainer from '../../components/flex-container/flex-container'
import Typography from '../../components/typography/typography'
import Avatar from '../../components/avatar/avatar'
import Button from '../../components/buttons/button'

// Icons
import House from '../../public/house.svg'


const navigation = () => {
    return (
        <Fragment>
            
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
                <Typography h3 textOrange600 bold center> ROUTING STATIC PAGE </Typography>
            </GridContainer>

            {/* Section */}
            <GridContainer bgGray400 center >
                <Typography h4 textWhite bold center> Static Routing </Typography>
                <Typography p2 textWhite center> Pagina cargada con routing statico - El archivo fue creado en una carpeta llamada
                 con el mismo nombre de la ruta y el archivo llamdo index. </Typography>
                <Typography p2 textWhite center> El routing estatico tiene un sistema llamado File System Routing,
                en el que solo es crear un archivo y luego llamar con el nombre del archivo en Link </Typography>
            </GridContainer>

        </Fragment>
    )
}

export default navigation
