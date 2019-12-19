---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "Nombre": "tag",
          "Tipo": "String",
          "Descripción": "Etiqueta HTML del componente",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "inverted",
          "Tipo" : "Boolean",
          "Descripción": "Invierte el botón con la caja",
          "Por defecto": "empty"
        },
        {
          "Nombre" : "button",
          "Tipo" : "Object",
          "Descripción": "Propiedades de Button",
          "Por defecto": "empty"
        },                      
        {
          "Nombre" : "price",
          "Tipo" : "Object",
          "Descripción": "Propiedades de Price",
          "Por defecto": "empty"
        }                      
      ] 
    }
  ]
}
---

# Price Button

<Preview>
  <template slot="demo">
    <components-PriceButton-PriceButton />
  </template>
  
  <<< @/examples/components/PriceButton/PriceButton.vue
</Preview>
  
## API

<Api />