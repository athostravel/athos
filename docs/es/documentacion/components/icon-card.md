# Icon Card

<Preview>
  <template slot="demo">
    <components-IconCard-IconCard /> 
  </template>

  <<< @/examples/components/IconCard/IconCard.vue
</Preview>

## Propiedades

| Nombre     | Tipo     | Parámetros                                                                    | Descripción                                   | Por defecto |
|------------|----------|-------------------------------------------------------------------------------|-----------------------------------------------|-------------|
| `tag`      | `String` |                                                                               | Etiqueta HTML del componente                  | `div`       |
| `icon`     | `String` |                                                                               | Clase del icono a mostrar                     | `undefined` |
| `position` | `String` | `top`, `right`, `bottom`, `left`                                              | Posición del icono                            | `left`      |
| `align`    | `String` | `left`, `center`, `right`                                                     | Alineación del icono y contenido              | `left`      |
| `gap`      | `String` | `dunite`, `diorite`, `basalt`, `obsidian`, `tuff`, `pumice`, `scoria`, `coal` | Tamaño de separación del icono y el contenido | `undefined` |

## Slots

| Nombre    | Descripción        |
|-----------|--------------------|
| `default` | Slot del contenido |