import React, { Fragment } from 'react'

// Componentes

import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'

//image
import Oficina from './assets/img/oficina.jpg'

//styles
import styles from './assets/css/card-basic-08.module.css'

const CardBasic08 = () => {
    return (
        <Fragment>

            <GridContainer className={styles.gc_contenedor} center>

                <FlexContainer className={styles.gc_contenedor_img}>
                    <img className={styles.gc_contenedor_bq_img} src={Oficina} alt="" />
                </FlexContainer>


                <GridContainer className={styles.gc_contenedor_pcipal} bgBlack>

                    <GridContainer className={styles.gc_contenedor_text}>
                        <Typography className={styles.gc_contenedor_st} h4 textWhite>amet consectetur </Typography>
                    </GridContainer>

                    <GridContainer className={styles.gc_contenedor_btext}>
                        <Typography className={styles.gc_contenedor_bloquep} p3 textGray500 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia voluptatem</Typography>
                        <Typography h3>Dolor sit</Typography>
                    </GridContainer>

                </GridContainer>

            </GridContainer>

        </Fragment>
    )
}

export default CardBasic08


