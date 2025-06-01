# Inventario del Congelador

Esta es una aplicación web desarrollada con [Next.js](https://nextjs.org) y con base de datos Mongo para llevar el control de los productos almacenados en tu congelador. Permite registrar, editar, eliminar y listar productos, así como importar y exportar datos en formato CSV y JSON. La app está pensada para ayudarte a evitar desperdicios y llevar un mejor control de tus alimentos congelados.

## Características principales

- **Agregar productos**: Registra nombre, peso, tipo y fecha de caducidad.
- **Editar y eliminar**: Modifica o elimina productos fácilmente.
- **Importar desde CSV**: Sube tu inventario desde un archivo CSV.
- **Exportar a JSON**: Descarga tu inventario en formato JSON.
- **PWA**: Instala la app en tu dispositivo móvil o escritorio.

## GitHub
Puedes encontrar el código fuente de esta aplicación en [GitHub](https://github.com/CurtoBrull/congelador-inventario).

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
