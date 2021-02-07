
/*
-Los Styles en Next con CSS Modules son mas aconsejables que los styles globales
CSS Modules tiene un sistema que evita los conflictos entre estilos, Renombrando
las clases aleatoriamente
*/

// Styles
import styles from './css/styles.module.css'

const stylesModulesCSS = () => {
    return (
        <div className={ styles.div }>
            <h2 className={ styles.h2 }> Styles en Next con CSS Modules </h2>
            <button className={ styles.button }> EXITO </button>            
        </div>
    )
}

export default stylesModulesCSS

