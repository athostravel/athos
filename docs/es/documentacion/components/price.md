---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "text",
          "Tipo": "String",
          "Parámetros" : "",
          "Descripción": "Añade un texto pequeño",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "before",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Añade un precio anterior al actual",
          "Por defecto": "empty"
        },
        {
          "Nombre" : "value",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Valor del precio",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "currency",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Tipo de moneda",
          "Por defecto": "€"
        },
        {
          "Nombre" : "align",
          "Tipo" : "String",
          "Parámetros" : "left, right",
          "Descripción": "Alinea el precio",
          "Por defecto": "right"
        },
        {
          "Nombre" : "inline",
          "Tipo" : "Boolean",
          "Parámetros" : "",
          "Descripción": "Pone el texto, el precio anterior y el precio en línea",
          "Por defecto": "false"
        }                         
      ] 
    }
  ]
}
---

# Price

<Preview>
  <template slot="demo">
    <components-Price-Price />
  </template>
  
  <<< @/examples/components/Price/Price.vue
</Preview>
  
## API

<Api />