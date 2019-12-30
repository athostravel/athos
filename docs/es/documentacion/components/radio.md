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

## API

<Api/>


