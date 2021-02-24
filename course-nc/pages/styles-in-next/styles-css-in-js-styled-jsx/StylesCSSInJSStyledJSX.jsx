
/*
- Styled JSX es un sistema de la variente de CSS in JS,
- Fue creado y mantenido por Next, Vercel y Google
- Esta incluido en el propio framework de next, No es necesario
    hacer instalaciones adicionales (Muy recomendado su uso)
*/

const StylesCSSInJSStyledJSX = () => {
    return (
        <div className="div">
            <h2 className="h2"> Styles en Next con Styled JSX </h2>
            <button className="button"> EXITO </button>

            <style jsx>{`
                
                .div {
                    background-color: #b91bc7;
                }

                .h2 {
                    color: white;
                }

                .button {
                    background-color: #40e07d;
                    padding: 8px 18px;
                    color: white;
                    border-radius: 8px;
                    border: none;
                    outline: none;
                }

            `}</style>
        </div>
    )
}



export default StylesCSSInJSStyledJSX
