---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "icon",
          "Tipo": "String, Boolean",
          "Parámetros" : "undefined",
          "Descripción": "Clase del icono a mostrar",
          "Por defecto": "false"
        },
        {
          "Nombre" : "title",
          "Tipo" : "String",
          "Parámetros" : "undefined",
          "Descripción": "Añade un título que acompaña al icono",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "text",
          "Tipo" : "String",
          "Parámetros" : "undefined",
          "Descripción": "Añade un texto que acompaña al icono",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "align",
          "Tipo" : "String",
          "Parámetros" : "left, right, top, bottom",
          "Descripción": "Alinea el icono",
          "Por defecto": "left"
        }
      ] 
    }
  ]
}
---

# Card Icon

<Preview>
  <template slot="demo">
    <AtCardIcon icon="phone" title="15 años de Experiencia" text="En internet para que tu compra sea cómoda y segura" />
    <AtCardIcon icon="phone" title="15 años de Experiencia" text="En internet para que tu compra sea cómoda y segura" align="right" />
    <AtCardIcon icon="phone" title="15 años de Experiencia" text="En internet para que tu compra sea cómoda y segura" align="top" />
    <AtCardIcon icon="phone" title="15 años de Experiencia" text="En internet para que tu compra sea cómoda y segura" align="bottom" />
  </template>
  
  <<< @/examples/components/CardIcon/CardIcon.vue
</Preview>

## API

<Api />
