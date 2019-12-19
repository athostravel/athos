---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "tag",
          "type": "String",
          "parameters": null,
          "description": "Tag HTML para el componente",
          "default": "div"
        },
        {
          "name" : "href",
          "type" : "String",
          "parameters" : "",
          "description": "Enlace del componente",
          "default": "undefined"
        },
        {
          "name" : "align",
          "type" : "String",
          "parameters" : "",
          "description": "Alineación horizontal",
          "default": "undefined"
        },
        {
          "name" : "valign",
          "type" : "String",
          "parameters" : "",
          "description": "Alineación vertical",
          "default": "undefined"
        },
        {
          "name" : "shadow",
          "type" : "Boolean",
          "parameters" : "",
          "description": "Box shadow de la caja",
          "default": "false"
        },
        {
          "name" : "radius",
          "type" : "Boolean",
          "parameters" : "",
          "description": "Border radius de la caja",
          "default": "false"
        },
        {
          "name" : "overlay",
          "type" : "Boolean",
          "parameters" : "",
          "description": "Capa de superposición sobre la imagen",
          "default": "false"
        },
        {
          "name" : "picture",
          "type" : "Object",
          "parameters" : "src,sources,alt,title",
          "description": "Props para el picture",
          "default": "empty"
        }                                                                 
      ] 
    }
  ]
}
---

# Banner Sirius


<Preview>
  <template slot="demo">
    <components-BannerSirius-BannerSirius />
  </template>
  
  <<< @/examples/components/BannerSirius/BannerSirius.vue
</Preview>
  


