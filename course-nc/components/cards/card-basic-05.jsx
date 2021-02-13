import React, { Fragment } from 'react'

// Componentes
import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'

//img
import Computador from './assets/img/computador.png'
import Tarjetas from './assets/img/cafe.png'
import Cafe from './assets/img/tarjetas.png'


// Styles 
import styles from './assets/css/card-basic-05.module.css'


const cardBasic05 = () => {
    return (
        <Fragment>
            <GridContainer className={styles.gridc_contenedor} center>

                <GridContainer className={styles.gridc_contenedor_bloque} center>
                    <FlexContainer className={styles.gridc_contenedor_bq_img}>
                        <img src={Computador} alt="" />
                    </FlexContainer>
                </GridContainer>

                <GridContainer className={styles.gridc_contenedor_bq}>
                    <GridContainer className={styles.gridc_contenedor_btext}>
                        <Typography className={styles.gridc_contenedor_btitulo} h4 textBlack bold >sit amet</Typography>
                        <Typography className={styles.gridc_contenedor_btextp} p3 textGray500>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia</Typography>
                    </GridContainer>

                    <FlexContainer className={styles.flexContainer_button}>
                        <Button bgLightBlueA700 textWhite >ipsum dolor</Button>
                    </FlexContainer>
                </GridContainer>

            </GridContainer>

        </Fragment>
    )
}

export default cardBasic05