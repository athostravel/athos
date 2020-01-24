# Banner

<Preview>
  <template slot="demo">
    <components-Banner-Banner />
  </template>
  
  <<< @/examples/components/Banner/Banner.vue
</Preview>

## Propiedades

| Nombre    | Tipo      | Descripción                           | Por defecto                                    |
|-----------|-----------|---------------------------------------|------------------------------------------------|
| `tag`     | `String`  | Etiqueta HTML del componente          | `div`                                          |
| `href`    | `String`  | Enlace del componente                 | `undefined`                                    |
| `src`     | `String`  | Url de la imagen                      | `https://source.unsplash.com/random/1920x1080` |
| `alt`     | `String`  | Texto alternativo de la imagen        | `''`                                           |
| `title`   | `String`  | Título de la imagen                   | `undefined`                                    |
| `sources` | `Array`   | Listado de sources                    | `undefined`                                    |
| `shadow`  | `Boolean` | Sombra de la caja                     | `false`                                        |
| `radius`  | `Boolean` | Border radius de la caja              | `false`                                        |
| `filter`  | `Boolean` | Filtro para aplicar en la imagen      | `false`                                        |
| `overlay` | `Boolean` | Capa de superposición sobre la imagen | `false`                                        |

## Slots

| Nombre    | Descripción        |
|-----------|--------------------|
| `default` | Slot del contenido |

## Banner Content

El componente `BannerContent` se usa junto con el componente `Banner` para meter contenido.

### Slots

| Nombre    | Descripción        |
|-----------|--------------------|
| `default` | Slot del contenido |





