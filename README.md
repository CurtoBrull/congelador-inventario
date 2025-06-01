# Inventario del Congelador

Esta es una aplicación web desarrollada con [Next.js](https://nextjs.org) y una base de datos [MongoDB](https://www.mongodb.com/) para llevar el control de los productos almacenados en tu congelador. Permite registrar, editar, eliminar y listar productos, así como importar y exportar datos en formato CSV y JSON. La app está pensada para ayudarte a evitar desperdicios y llevar un mejor control de tus alimentos congelados.

## ¿Por qué nació esta app?

La idea de esta aplicación surgió por una necesidad real: durante mucho tiempo tuve un gran descontrol sobre lo que guardaba en mi arcón congelador. Muchas veces, al no recordar qué productos tenía, terminaba comprando cosas que ya estaban almacenadas, acumulando productos repetidos y desperdiciando espacio y comida. 
Esta herramienta nació para solucionar ese problema, permitiéndome saber en todo momento qué hay en el congelador y evitar compras innecesarias.

Habrá aplicaciones similares y mejores, pero qué mejor que poner en práctica los conocimientos adquiridos desarrollando una solución personalizada que se poco a poco se adapte exactamente a mis necesidades.

## Características principales

- **Agregar productos**: Registra nombre, peso, tipo y fecha de caducidad.
- **Editar y eliminar**: Modifica o elimina productos fácilmente.
- **Importar desde CSV**: Sube tu inventario desde un archivo CSV.
- **Exportar a JSON**: Descarga tu inventario en formato JSON.
- **PWA**: Instala la app en tu dispositivo móvil o escritorio.

## GitHub

Puedes encontrar el código fuente de esta aplicación en [GitHub](https://github.com/CurtoBrull/congelador-inventario).

## Technologías utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **MongoDB**: Base de datos NoSQL para almacenar los productos.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y responsivos.
- **TypeScript**: Lenguaje de programación que añade tipado a JavaScript.

## Paso a paso de la creación
1. **Planificación**: Definí las funcionalidades y el flujo de la aplicación.
2. **Configuración del entorno**: Instalé Next.js y configuré TypeScript.
3. **Diseño de la base de datos**: Creé el esquema de productos en MongoDB.
4. **Desarrollo de la API**: Implementé las rutas para manejar productos (CRUD).
5. **Interfaz de usuario**: Diseñé las páginas con Next.js y Tailwind CSS.
6. **Integración de funcionalidades**: Implementé la lógica para agregar, editar, eliminar e importar/exportar productos.
7. **Pruebas y ajustes**: Realicé pruebas para asegurarme de que todo funcionara correctamente.
8. **Despliegue**: Preparé la aplicación para producción y la desplegué en Vercel.
9. **Documentación**: Escribí la documentación para facilitar el uso y comprensión de la aplicación.
10. **Mantenimiento y mejoras**: Continuaré mejorando la aplicación según las necesidades que me vayan surgiendo.

### Primeros pasos en Next.js

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

Puedes comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que editas el archivo.

Esta aplicación utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente la fuente [Geist](https://vercel.com/font).

### Aprende más

- [Documentación de Next.js](https://nextjs.org/docs)
- [Tutorial interactivo de Next.js](https://nextjs.org/learn)
- [Repositorio en GitHub de Next.js](https://github.com/vercel/next.js)

### Despliegue en Vercel

La forma más sencilla de desplegar tu app Next.js es usando [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
