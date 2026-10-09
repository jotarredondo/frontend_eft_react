# Gaming Store - EFT Desarrollo Frontend I

Proyecto desarrollado para la Evaluación Final Transversal de la asignatura
Desarrollo Frontend I (PFY2201).

Gaming Store es una tienda web de videojuegos y consolas desarrollada con React,
JavaScript, Bootstrap 5 y CSS.

La aplicación permite visualizar productos cargados dinámicamente desde un archivo
JSON, filtrarlos por categoría, agregarlos o eliminarlos de un carrito de compras
y utilizar un formulario de contacto con validación.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Bootstrap 5
- JSON
- Git
- GitHub
- GitHub Pages

---

## Funcionalidades

### Catálogo de productos

Los productos se cargan dinámicamente desde el archivo:

public/data/productos.json

Cada producto contiene:

- Nombre
- Categoría
- Descripción
- Precio normal
- Precio oferta
- Imagen

La carga de los productos se realiza mediante fetch y useEffect.

---

### Filtro por categoría

La aplicación permite filtrar los productos mediante las siguientes categorías:

- Todos
- Consolas
- Videojuegos

El filtro utiliza el estado de React para actualizar automáticamente los productos
mostrados en pantalla.

---

### Carrito de compras

El usuario puede:

- Agregar productos al carrito.
- Visualizar la cantidad de productos agregados.
- Visualizar el precio total.
- Eliminar productos del carrito.
- Visualizar un mensaje cuando el carrito está vacío.

Cuando un producto ya se encuentra agregado, el botón cambia a:

En el carrito

evitando agregar el mismo producto nuevamente.

---

### Formulario de contacto

El sitio incluye un formulario con los siguientes campos:

- Nombre
- Correo electrónico
- Mensaje

El formulario valida que los campos estén completos y que el correo electrónico
tenga un formato válido.

Si existe un error se muestra un mensaje al usuario.

Cuando los datos son correctos se muestra un mensaje indicando que el formulario
fue enviado correctamente.

---

### Carrusel

La página incluye un carrusel de imágenes controlado mediante estado de React.

El usuario puede navegar entre las imágenes utilizando los botones anterior y
siguiente.

---

## React

La aplicación está dividida en componentes para facilitar la organización y
mantenimiento del código.

Principales componentes:

- Navbar
- Carousel
- CategoryFilter
- ProductList
- ProductCard
- Cart
- ContactForm
- Footer

Se utilizan:

- useState
- useEffect
- Props
- Renderizado condicional
- Eventos
- map
- filter
- reduce
- fetch

---

## Bootstrap 5

Bootstrap 5 se utiliza para mejorar la estructura visual y responsividad del sitio.

Se utiliza en elementos como:

- Barra de navegación responsive.
- Sistema de grillas.
- Tarjetas de productos.
- Botones.
- Formulario.
- Alertas.
- Carrito.
- Footer.

El sitio se adapta a distintos tamaños de pantalla utilizando el sistema de grillas
responsive de Bootstrap.

---

## Estructura del proyecto

frontend_eft_react/
├── public/
│   ├── data/
│   │   └── productos.json
│   └── img/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Carousel.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.jsx
└── README.md

---

## Instalación

Para ejecutar el proyecto localmente es necesario tener instalado Node.js.

Clonar el repositorio:

git clone https://github.com/jotarredondo/frontend_eft_react.git

Ingresar a la carpeta del proyecto:

cd frontend_eft_react

Instalar las dependencias:

npm install

Ejecutar el servidor de desarrollo:

npm run dev

Vite mostrará en la terminal la dirección local donde se encuentra disponible
la aplicación.

---

## Compilar el proyecto

Para generar la versión de producción:

npm run build

Los archivos compilados serán generados dentro de la carpeta:

dist/

---

## Despliegue

El proyecto se encuentra desplegado utilizando GitHub Pages.

Sitio web:

https://jotarredondo.github.io/frontend_eft_react/

Repositorio:

https://github.com/jotarredondo/frontend_eft_react

---

## Uso

1. Ingresar al sitio web.
2. Revisar los productos disponibles.
3. Utilizar los botones de categoría para filtrar los productos.
4. Presionar Agregar al carrito para seleccionar un producto.
5. Revisar el carrito y su precio total.
6. Utilizar el botón Eliminar para quitar un producto.
7. Completar el formulario de contacto.
8. Navegar entre las distintas secciones utilizando la barra de navegación.

---

## Autor

Jose Arredondo
