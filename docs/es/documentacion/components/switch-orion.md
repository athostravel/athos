---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "atSwitch",
          "Tipo": "Object",
          "Descripción": "Propiedades del componente Switch",
          "Por defecto": "empty"
        },
        {
          "Nombre": "checkedText",
          "Tipo": "String",
          "Descripción": "Texto a mostrar cuando el switch esté activo",
          "Por defecto": "Si"
        },
        {
          "Nombre": "uncheckedText",
          "Tipo": "String",
          "Descripción": "Texto a mostrar cuando el switch esté inactivo",
          "Por defecto": "No"
        }                
      ] 
    }
  ]
}
---

# Switch Orion

<Preview>
  <template slot="demo">
    <components-SwitchOrion-SwitchOrion />
  </template>
  
  <<< @/examples/components/SwitchOrion/SwitchOrion.vue
</Preview>

## Propiedades

| Nombre          | Tipo                                   | Descripción                                                                                                                                             | Por defecto |
|-----------------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| `checkedText`   | `String`                               | Texto a mostrar cuando el switch esté activo                                                                                                            | `Si`        |
| `uncheckedText` | `String`                               | Texto a mostrar cuando el switch esté inactivo                                                                                                          | `No`        |
| `id`            | `String`                               | Identificador del input. Si se define un label el id será el label transformando sin carácteres especiales. Si no está definido el label será undefined | `undefined` |
| `name`          | `String`                               | Nombre del input                                                                                                                                        | `undefined` |
| `value`         | `String`, `Boolean`, `Array`, `Object` | Especifica el valor del input                                                                                                                           | `undefined` |
| `disabled`      | `Boolean`                              | Deshabilita el checkbox                                                                                                                                 | `false`     |
| `required`      | `Boolean`                              | Indica que es obligatorio                                                                                                                               | `false`     |
| `checked`       | `Boolean`                              | Marca el checkbox                                                                                                                                       | `false`     |