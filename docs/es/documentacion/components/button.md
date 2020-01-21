# Button

<Preview>
  <template slot="demo">
    <components-Button-Button /> 
  </template>

  <<< @/examples/components/Button/Button.vue
</Preview>

## Propiedades

| Nombre     | Tipo      | Parámetros                                        | Descripción                      | Por defecto |
|------------|-----------|---------------------------------------------------|----------------------------------|-------------|
| `tag`      | `String`  |                                                   | Etiqueta HTML del componente     | `a`         |
| `href`     | `String`  |                                                   | Enlace del botón                 | `#`         |
| `rounded`  | `Boolean` |                                                   | Redondea el botón                | `false`     |
| `radiused` | `Boolean` |                                                   | Añade un pequeño radio al botón  | `false`     |
| `disabled` | `Boolean` |                                                   | Deshabilita el botón             | `false`     |
| `icon`     | `Boolean` |                                                   | Para botones con icono sin texto | `false`     |
| `variant`  | `String`  | `text`, `outlined`, `bordered`                    | Cambia el aspecto del botón      | `undefined` |
| `color`    | `String`  | `primary`, `secondary`                            | Cambia el color del botón        | `undefined` |
| `size`     | `String`  | `dunite`, `diorite`, `basalt`, `obsidian`, `tuff` | Tamaño del botón                 | `undefined` |

## Slots

| Nombre    | Descripción        |
|-----------|--------------------|
| `default` | Slot del contenido |

