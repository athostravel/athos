---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "tag",
          "Tipo": "String",
          "parameters": null,
          "description": "Tag HTML para el componente",
          "default": "div"
        },
        {
          "Nombre" : "href",
          "Tipo" : "String",
          "parameters" : "",
          "description": "Enlace del componente",
          "default": "undefined"
        },
        {
          "Nombre" : "align",
          "Tipo" : "String",
          "parameters" : "",
          "description": "Alineación horizontal",
          "default": "undefined"
        },
        {
          "Nombre" : "valign",
          "Tipo" : "String",
          "parameters" : "",
          "description": "Alineación vertical",
          "default": "undefined"
        },
        {
          "Nombre" : "shadow",
          "Tipo" : "Boolean",
          "parameters" : "",
          "description": "Box shadow de la caja",
          "default": "false"
        },
        {
          "Nombre" : "radius",
          "Tipo" : "Boolean",
          "parameters" : "",
          "description": "Border radius de la caja",
          "default": "false"
        },
        {
          "Nombre" : "overlay",
          "Tipo" : "Boolean",
          "parameters" : "",
          "description": "Capa de superposición sobre la imagen",
          "default": "false"
        },
        {
          "Nombre" : "picture",
          "Tipo" : "Object",
          "parameters" : "src,sources,alt,title",
          "description": "Props para el picture",
          "default": "empty"
        }                                                                 
      ] 
    }
  ]
}
---

# Banner

Componente base para crear componentes más complejos

<Preview>
  <template slot="demo">
    <components-Banner-Banner />
  </template>
  
  <<< @/examples/components/Banner/Banner.vue
</Preview>

## API

<Api />





