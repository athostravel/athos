---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre" : "id",
          "Tipo" : "String",
          "Descripción": "Identificador del input",
          "Por defecto": "Si se define un label el id será el label transformando sin carácteres especiales. Si no está definido el label será undefined"
        },
        {
          "Nombre" : "name",
          "Tipo" : "String",
          "Descripción": "Nombre del input",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "type",
          "Tipo" : "String",
          "Descripción": "Especifica el tipo del input",
          "Por defecto": "checkbox"
        },
        {
          "Nombre" : "label",
          "Tipo" : "String",
          "Descripción": "Texto para el label",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "value",
          "Tipo" : "String || Boolean || Array || Object",
          "Descripción": "Especifica el valor del input",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "disabled",
          "Tipo" : "Boolean",
          "Descripción": "Deshabilita el checkbox",
          "Por defecto": "false"
        },            
        {
          "Nombre" : "required",
          "Tipo" : "Boolean",
          "Descripción": "Indica que es obligatorio",
          "Por defecto": "false"
        },         
        {
          "Nombre" : "checked",
          "Tipo" : "Boolean",
          "Descripción": "Marca el checkbox",
          "Por defecto": "false"
        }
      ] 
    }
  ]
}
---

# Radio

<Preview>
  <template slot="demo">
    <components-Radio-Radio />
  </template>

  <<< @/examples/components/Radio/Radio.vue
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
| `checked`  | `Boolean`                              | Marca el radio                                                                                                                                          | `false`     |


