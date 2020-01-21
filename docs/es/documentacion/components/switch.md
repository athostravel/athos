# Switch

<Preview>
  <template slot="demo">
    <components-Switch-Switch />
  </template>
  
  <<< @/examples/components/Switch/Switch.vue
</Preview>

## Propiedades

| Nombre     | Tipo                                   | Descripción                                                                                                                                             | Por defecto |
|------------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `id`       | `String`                               | Identificador del input. Si se define un label el id será el label transformando sin carácteres especiales. Si no está definido el label será undefined | `undefined` |
| `name`     | `String`                               | Nombre del input                                                                                                                                        | `undefined` |
| `type`     | `String`                               | Especifica el tipo del input                                                                                                                            | `checkbox`  |
| `label`    | `String`                               | Texto para el label                                                                                                                                     | `undefined` |
| `value`    | `String`, `Boolean`, `Array`, `Object` | Especifica el valor del input                                                                                                                           | `undefined` |
| `disabled` | `Boolean`                              | Deshabilita el checkbox                                                                                                                                 | `false`     |
| `required` | `Boolean`                              | Indica que es obligatorio                                                                                                                               | `false`     |
| `checked`  | `Boolean`                              | Marca el checkbox                                                                                                                                       | `false`     |

## Slots

| Nombre      | Descripción                                                  |
|-------------|--------------------------------------------------------------|
| `checked`   | Slot que muestra el contenido cuando el input está checked   |
| `unchecked` | Slot que muestra el contenido cuando el input está unchecked |

