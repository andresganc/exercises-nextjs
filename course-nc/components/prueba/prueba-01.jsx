
import Logo from './assets/img/logo-nc.png'

// Styles
import Styles from './assets/css/prueba-01.module.css'

function Prueba01() {
    return (
        <div className={Styles.div}>
            <div className={Styles.div__contImg}>
                <img className={Styles.div__img} src={Logo} alt=""/>
            </div>

            <div className={Styles.cont__contTexto}>
                <h2> ESTO ES UN COMPONENTE EN NEXT </h2> 
            </div>
        </div>
    )
}

export default Prueba01








