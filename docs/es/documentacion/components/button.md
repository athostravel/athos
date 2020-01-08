# Button

<Preview>
  <template slot="demo">
    <components-Button-Button /> 
  </template>

  <<< @/examples/components/Button/Button.vue
</Preview>

## Propiedades

| Nombre     | Tipo      | Parámetros                         | Descripción                                  | Por defecto |
|------------|-----------|------------------------------------|----------------------------------------------|-------------|
| `tag`      | `String`  |                                    | Etiqueta HTML del componente                 | `a`         |
| `href`     | `String`  |                                    | Enlace del botón                             | `#`         |
| `outlined` | `Boolean` |                                    | Muestra una apariencia alternativa del botón | `false`     |
| `bordered` | `Boolean` |                                    | Muestra una apariencia alternativa del botón | `false`     |
| `rounded`  | `Boolean` |                                    | Redondea el botón                            | `false`     |
| `disabled` | `Boolean` |                                    | Deshabilita el botón                         | `false`     |
| `color`    | `String`  | `primary`, `secondary`             | Cambia el color del botón                    | `undefined` |
| `size`     | `String`  | `tiny`, `small`, `medium`, `large` | Tamaño del botón                             | `undefined` |

## Slots

| Nombre    | Descripción        |
|-----------|--------------------|
| `default` | Slot del contenido |