---
title: "Mi primer Post"
date: "2020-11-01"
author: "Nicolás Saporiti"
image: "https://i.imgur.com/0txPX12.jpg"
resume: "Primer post de Blog creado en React + Next.js"
---

Hola 👋 estás leyendo mi primer Post! Este Blog lo desarrollé en React + Next.js utilizando el siguiente [tutorial](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website).
Si te interesa, puedes ver el repositorio en mi [GitHub](https://github.com/nicosaporiti/nextjs-blog) y seguro tienes mejores aportes!

Los post son escritos en Markdown, utilizo [Typora](https://typora.io/) como editor que está muy bueno ya que es **verdaderamente minimalista**.

El blog utiliza 2 dependencias esenciales para utilizar Markdown (MD) y luego procesarlos. La primera es [gray-matter](https://www.npmjs.com/package/gray-matter) que parsea string a JSON. Por ejemplo este MD posee una cabecera con distintos datos como title, date, author e inclusive el link a imágenes que se utilizan en SEO.

La otra dependencia importante es [remark](https://www.npmjs.com/package/remark) que permite parsear y serializar los documentos MD a HTML y poder renderizarlos. Luego aplicando estilos globales en CSS puedes personalizar por completo tus documentos.

> La idea es disponer de un blog sencillo, estático, de gran perfomance para el usuario y utilizarlo como extensión de cualquier sitio web.

Para instalar el proyecto debes:

Copiar el repositorio de GitHub

`git clone https://github.com/nicosaporiti/nextjs-blog.git`


Instalar las dependencias


`npm install`


El proyecto está realizado en:

- React 17.0.1
- Next 10.0.0
- Dependencias date-fns, gray-matter y remark

Comandos para modo desarrollo


`npm run dev`

### Realizar deploy del Blog

Te recomiendo que abras una cuenta en [Vercel](https://vercel.com/login) y conectes el proyecto mediante GitHub para que cualquier deploy que realices en la rama principal se actualice directamente. Puedes redireccionar un subdominio de tu sitio a los servidores de Vercel y tener hosting del proyecto. El redireccionamiento es muy sencillo utilizando el administrador de DNS de tu hosting y creando un CNAME con los datos que te indica Vercel.

Si quieres hacer deploy local y directamente subir tu proyecto a otros alojamientos como [Netlify](https://www.netlify.com/) ejecuta el siguiente comando:

`npm run deploy`

Next creará una carpeta llamada **out** dentro de tu repositorio, lo único que debes hacer es arrastrarla a la creación de nuevos proyectos de Netlify y ya tendrás tu blog corriendo.

Este proyecto utiliza getStaticProps y genera un SSG que básicamente es un sitio estático en HTML + JSON. Por lo tanto cada vez que crees un post, debes colocar los documentos en la carpeta posts y correr el comando de deploy para actualizar todo el blog.

Poco a poco iré agregando algunos features, por ejemplo comencé con el contador de palabras que calcula el tiempo de lectura.

### Esto es una imagen aleatoria de [Lorem Picsum](https://picsum.photos/)

![Imagen aleatoria](https://picsum.photos/400/300)


Gracias por leer! 😄