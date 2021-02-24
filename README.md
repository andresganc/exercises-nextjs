# CURSO-NEXTJS
Curso Next.js NC

## TABLA DE CONTENIDO


### Create Next app

    - Crear proyecto

        $ npx create-next-app my-app


### Ejecutar my app

    - Entrar al poyecto y ejecutar

        $ cd my-app

        $ npm run dev


### Images

    - Se debe instalar la libreria next-images para trabajar con imagenes SVG

        $ npm i next-images

        - Despues de instalar se debe crear un archivo en la raiz llamado next.config.js y escribir las siguiente lineas de codigo

        const withImages = require('next-images')
        module.exports = withImages({})


