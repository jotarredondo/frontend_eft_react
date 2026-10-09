# Gaming Store React - Semana 8

Proyecto desarrollado para la asignatura Desarrollo Frontend I (PFY2201).

La aplicación corresponde a la evolución del eCommerce desarrollado en semanas anteriores, incorporando nuevas funcionalidades en React mediante useState, useEffect y renderizado condicional.

## Objetivo de la actividad

Aplicar y optimizar funcionalidades clave en React utilizando componentes funcionales, gestión de estados, efectos secundarios y renderizado condicional.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- Node.js
- npm
- gh-pages

## Funcionalidades implementadas

- Carga dinámica del catálogo desde un archivo JSON local.
- Uso de useEffect para obtener los productos al iniciar la aplicación.
- Uso de useState para gestionar:
    - catálogo de productos
    - carrito de compras
    - estado de carga
    - estado de error
    - carrusel de imágenes
- Listado de productos con:
    - nombre
    - descripción
    - imagen
    - precio normal
    - precio oferta
- Carrito de compras con:
    - agregar productos
    - eliminar productos
    - contador total de productos
    - cálculo automático del total
- Renderizado condicional para:
    - mostrar mensaje de carga
    - mostrar mensaje de error
    - mostrar mensaje cuando el carrito está vacío
    - cambiar el botón "Agregar al carrito" por "En el carrito"
- Carrusel interactivo desarrollado con useState.
- Diseño responsive mediante CSS.

## Conceptos de React aplicados

- Componentes funcionales
- Props
- useState
- useEffect
- Eventos onClick
- Renderizado condicional
- Renderizado de listas con map()
- Comunicación entre componentes mediante props
- Manejo de estado
- Consumo de datos con fetch

## Estructura principal del proyecto

src/
├── components/
│   ├── Cart.jsx
│   ├── Carousel.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
├── data/
│   └── productos.json
└── img/
├── ps5.jpg
├── xbox.jpg
├── switch.jpg
├── fc26.jpg
├── minecraft.jpg
└── mariokart.jpg

## Instalación

Clonar el repositorio:

git clone https://github.com/jotarredondo/gaming_store_react

Ingresar al proyecto:

cd gaming_store_react

Instalar dependencias:

npm install

Ejecutar el proyecto:

npm run dev

## Build de producción

Para generar la versión de producción:

npm run build

## Despliegue

El proyecto utiliza gh-pages para su publicación en GitHub Pages.

Para desplegar la aplicación:

npm run deploy

Repositorio:
https://github.com/jotarredondo/gaming_store_react

GitHub Pages:
https://jotarredondo.github.io/gaming_store_react/

## Autor

Jose Arredondo