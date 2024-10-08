# Prueba Técnica SkyMedicAI

Este proyecto es una aplicación web para visualizar películas utilizando la API de The Movie Database (TMDb). La aplicación permite explorar películas populares, filtrar por categorías y cambiar el idioma de las películas. Se utiliza `Next.js` para el renderizado del lado del servidor y `shadcn` para gestionar la interfaz de usuario.

## Tecnologías Utilizadas

- **Next.js:** Framework para aplicaciones React que proporciona renderizado del lado del servidor.
- **JavaScript:** Lenguaje que añade tipado estático.
- **Tailwind CSS:** Framework de diseño que proporciona clases utilitarias para crear interfaces responsivas y personalizadas.
- **shadcn:** Biblioteca de componentes UI para gestionar la interfaz de usuario.
- **TMDb API:** API para obtener información sobre películas, géneros y configuraciones de idiomas.
- **React:** Biblioteca para construir interfaces de usuario.

## Instalación

1. **Clona el repositorio:**

   `git clone https://github.com/JuanJoJaraba/PruebaTecnicaSkyMedicAI.git`
   
2. **Navega al Directorio del Proyecto:**

   `cd PruebaTecnicaSkyMedicAI`

3. **Instala las Dependencias:**

   `npm install`

4. **Configura Variables de Entorno**

   1. Crea un archivo `.env` en la raíz del proyecto.
   2. Copia el contenido de `.env.example` en tu archivo `.env`.
   3. Reemplaza `your_tmdb_api_key_here` con tu bearer token de TMDb.

5. **Ejecuta el Proyecto**

   `npm run dev`

   La aplicación estará disponible en http://localhost:3000.

## Uso

- **Buscar Películas:** Usa la barra de búsqueda para encontrar películas por título.
- **Filtrar por Categoría:** Selecciona una categoría en el menú desplegable para filtrar las películas.
- **Seleccionar Idioma:** Cambia el idioma desde el menú desplegable para ver películas en el idioma seleccionado.
- **Ver Detalles:** Haz clic en una película para abrir el modal con detalles adicionales.

