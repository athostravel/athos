# Picture

<Preview>
  <template slot="demo">
    <components-Picture-Picture />
  </template>

  <<< @/examples/components/Picture/Picture.vue
</Preview>

## Propiedades

| Nombre    | Tipo     | Descripción                    | Por defecto                                    |
|-----------|----------|--------------------------------|------------------------------------------------|
| `src`     | `String` | Url de la imagen               | `https://source.unsplash.com/random/1920x1080` |
| `alt`     | `String` | Texto alternativo de la imagen | `''`                                        |
| `title`   | `String` | Título de la imagen            | `undefined`                                    |
| `sources` | `Array`  | Listado de sources             | `undefined`                                    |

## Picture Source

El componente `PictureSource` se usa junto con el componente `Picture` para pintar los sources del picture.

### Propiedades

| Nombre   | Tipo     | Descripción                         | Por defecto |
|----------|----------|-------------------------------------|-------------|
| `srcset` | `String` | Url de la imagen                    | `''`     |
| `media`  | `String` | Tamaño en pixeles del la mediaquery | `undefined` |
| `shim`   | `String` | Imagen de 1x1px en base64           | `undefined` |



