import React, { Fragment } from 'react'

// Componentes

import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'

//image
import Desarrollo from './assets/img/desarrollador-web.jpg'

//styles
import styles from './assets/css/card-basic-06.module.css'

const CardBasic06 = () => {
    return (
        <Fragment>

            <GridContainer className={styles.gc_contenedor} center>

                <FlexContainer className={styles.gc_contenedor_img}>
                    <img className={styles.gc_contenedor_bq_img} src={Desarrollo} alt="" />
                </FlexContainer>


                <GridContainer className={styles.gridc_contenedor_ti}>
                <GridContainer className={styles.gc_contenedor_text}>
                    <Typography className={styles.gc_contenedor_tg} h3 textBlack bold center> ipsum dolor</Typography>
                    <Typography className={styles.gc_contenedor_st} h4 textIndigo500 bold center>amet consectetur </Typography>
                    <Typography className={styles.gridc_bloque_tipog} p3 textGray500 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia voluptatem Suscipit repellat similique quia voluptatem</Typography>
                </GridContainer>

                <FlexContainer className={styles.gridc_bloque_button} jcCenter>
                    <Button circle className={styles.gridc_bloque_cbu} bgIndigo900 textWhite> F </Button>
                    <Button circle className={styles.gridc_bloque_cbu} bgBlue300 textWhite> F </Button>
                    <Button circle className={styles.gridc_bloque_cbu} bgPink300 textWhite> F </Button>
                </FlexContainer>

                <GridContainer className={styles.gridc_bloque_tipo} bgGray100 textGray500 center>
                    <Typography className={styles.gridc_bloque_ttext}>2 days ago</Typography>
                </GridContainer>

            </GridContainer>

            </GridContainer>

        </Fragment>
    )
}

export default CardBasic06

