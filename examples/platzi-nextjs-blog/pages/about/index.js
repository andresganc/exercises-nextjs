import React from "react";
import Layout from "../../components/layout"
import utilStyles from "../../styles/utils.module.css"

const About = () => {
    return (
        <Layout>
                  <section className={utilStyles.headingMd}>
        <p>
          Hola!, soy <strong>Nicolás Saporiti</strong>. Nací en Mendoza y dese el año 2005 vivo en Chile. Soy CEO de{" "}
          <a href="https://www.agrominera.cl/" target="_blank">
            Agrominera
          </a>
          , de profesión Licenciado en Administración y Magister en Dirección Financiera.
        </p>
        <p>
          Creo que la tecnología nos hará mejores personas. Actualmente estoy
          estudiando desarrollo web 💻 Javascript, React, Node y NextJS.
        </p>
        <p>
          Pensé <u>compartir notas</u> sobre mi experiencia personal aplicando
          tecnología en distintos ámbitos. No pretendo generar artículos técnicos,
          simplemente <u>posteo reflexiones personales</u> en este largo proceso de
          aprendizaje.
        </p>
        <p>
          <strong>Quizás alguna nota sea de tu interés!</strong>
        </p>
      </section>
        </Layout>
    )
}

export default About;