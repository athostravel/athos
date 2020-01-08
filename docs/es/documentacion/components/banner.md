# Banner

<Preview>
  <template slot="demo">
    <components-Banner-Banner />
  </template>
  
  <<< @/examples/components/Banner/Banner.vue
</Preview>

## Propiedades

| Nombre      | Tipo      | Descripción                                        | Por defecto |
|-------------|-----------|----------------------------------------------------|-------------|
| `tag`       | `String`  | Etiqueta HTML del componente                       | `div`       |
| `href`      | `String`  | Enlace del componente                              | `undefined` |
| `shadow`    | `Boolean` | Sombra de la caja                                  | `false`     |
| `radius`    | `Boolean` | Border radius de la caja                           | `false`     |
| `overlay`   | `Boolean` | Capa de superposición sobre la imagen              | `false`     |
| `atPicture` | `Object`  | Propiedades del componente [Picture](./picture.md) | `empty`     |

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





