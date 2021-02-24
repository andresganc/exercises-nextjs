
/*
Los styles css en next se deben de poner en la raiz o la carpeta styles y se importarian en el archivo _app.js
trabajarian y afectaria globalmente, Con esto ultimo se debe tener especial cuidado porque pueden generar conflictos
con otros estilos 
*/


const stylesCSS = () => {
    return (
        <div className="div">
            <h2> Styles CSS in Next </h2>
        </div>
    )
}

export default stylesCSS
