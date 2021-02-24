
import React, { Fragment } from 'react'

// Componentes
import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'


// Styles 
import styles from './assets/css/card-basic-07.module.css'


const cardBasic07 = () => {
    return (
        <Fragment>
            <GridContainer className={styles.gridcontainer_contenedor}  center>
            
                <GridContainer className={styles.gridc_bloque}>

                    <GridContainer className={styles.gridc_bloque_typography}>
                        <Typography className={styles.gridc_bloque_titulo} h2 textWhite center> Dolor sit </Typography>
                        <Typography className={styles.gridc_bloque_subt} p2 textWhite center> Lorem ipsum dolor </Typography>
                    </GridContainer>
                    
                </GridContainer>

                <GridContainer className={styles.gridc_bloque_text}>
                    <Typography p3 textGray500 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia voluptatem beatae, totam aut necessitatibus, fuga, odio vel ex corrupti provident commodi ratione consectetur distinctio? Qui, numquam illum.
                        Illo corporis, odit fugit, blanditiis vero quidem eius velit 
                    </Typography>

                </GridContainer>
                
                <br/>
                <hr/>

                <GridContainer>
                <FlexContainer className={styles.gridc_bloque_ct} jcCenter>
                        <Button circle className={styles.gridc_bloque_Bu} bgBlue300 textWhite> F </Button>
                        <Button circle className={styles.gridc_bloque_Bu} bgBlue600 textWhite> F </Button>
                        <Button circle className={styles.gridc_bloque_Bu} bgBlue900 textWhite> F </Button>
                        <Button circle className={styles.gridc_bloque_Bu} bgGray800 textWhite> F </Button>
                    </FlexContainer>
                </GridContainer>

            </GridContainer>



        </Fragment>
    )
}

export default cardBasic07
