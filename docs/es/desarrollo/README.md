# Instalación

1. Clonar el repositorio `git clone -b develop --single-branch https://github.com/avoristravel/athos.git`.
2. Instalar dependecias `npm install`.
3. Lanzar el servidor `npm run dev`.

## Comandos disponibles

- Lanzar el servidor: `npm run dev`.
- Compilar la librería de componentes y los estilos: `npm run build`.
- Compilar la documentación: `npm run build:docs`.
- Compilar el scss: `npm run build:styles`, ya lo hace el `npm run build`.
- Compilar el scss de los temas: `npm run build:styleThemes`, ya lo hace el `npm run build`.
- Pasa el autoprefixer a los css: `npm run autoprefixer`, ya lo hace el `npm run build`.
- Pasa el linter: `npm run linter`, ya lo hace el `npm run build`.