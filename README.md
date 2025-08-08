🛒 "Hoy Trabajas" - Aplicación de Gestión de Presupuesto

Este proyecto es una aplicación web creada para el challenge técnico "Hoy Trabajas". La aplicación fue desarrollada utilizando Next.js para manejar tanto el frontend como el backend, cumpliendo con el requisito principal de no usar una base de datos.

✨ Descripción del Proyecto

El objetivo de la aplicación es recibir un presupuesto y, a partir de él, determinar cuáles son los productos (o "items") más óptimos para comprar. Además de cumplir con este requisito, me extralimité al retornar el total del presupuesto solicitado y el excedente después de la compra, considerando que cada producto es único y no tiene stock.

La arquitectura fue pensada para ser completamente autónoma, usando Next.js para gestionar la lógica del servidor (el backend) y la interfaz de usuario (el frontend) en el mismo entorno. Se eligió esta tecnología porque facilitaba el trabajo en ambos lados y porque era la opción sugerida para el challenge.

🚀 Backend y API

El backend cumple con los requisitos del challenge sin necesidad de una base de datos.

Devuelve una lista de productos: Provee un conjunto de objetos JSON que representan los productos disponibles.

Endpoints: Se han configurado dos endpoints con propósitos específicos:

/api/items: Endpoint principal para obtener la lista de productos.

/api/cart: Endpoint para gestionar la información del carrito, aunque en este caso se limita al cálculo del presupuesto.

🛠️ Tecnologías y Librerías Utilizadas

Next.js: Framework de React para el desarrollo full-stack. Aunque se utiliza por sus capacidades de routing y APIs, no se implementó Server-Side Rendering (SSR) ya que no fue un requisito del challenge.

TypeScript: Para añadir robustez, mejorar la legibilidad y detectar errores de tipado en una etapa temprana del desarrollo.

Zustand: Para una gestión de estado global y persistencia de datos en el frontend, manteniendo el código limpio y conciso.

SWR: Librería para la obtención y gestión de datos, optimizando las llamadas al backend y mejorando la experiencia de usuario.

Tailwind CSS: Un framework CSS de primera clase que agiliza la construcción de la interfaz de usuario con clases utilitarias, facilitando el diseño responsivo.

React Hook Form: Para un manejo simplificado de formularios, incluyendo validación y gestión de estado.

React: La librería base para la creación de componentes reutilizables y el uso eficiente del Virtual DOM para actualizaciones rápidas.

⚙️ Scripts Disponibles

Para ejecutar y gestionar el proyecto, puedes usar los siguientes comandos:

npm run dev: Inicia el servidor de desarrollo utilizando Turbopack, lo que proporciona un entorno de desarrollo más rápido y optimizado.

npm run build: Prepara la aplicación para un entorno de producción, transpilando y comprimiendo todo el código.

npm run start: Ejecuta la aplicación en modo de producción, a partir del build previamente generado.

npm run lint: Ejecuta pruebas y análisis de código para identificar y optimizar el código.

🌐 Despliegue

Esta aplicación está diseñada para ser desplegada en el ambiente gratuito de Vercel, aprovechando su integración directa con repositorios de GitHub para proyectos basados en Next.js.


Autor: Martín Torres
P/D: Texto enriquecido con ayuda de GEMINI AI.