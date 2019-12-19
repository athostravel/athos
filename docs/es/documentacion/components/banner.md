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

# Banner

Componente Banner simple, base para crear componentes más complejos

<Preview>
  <template slot="demo">
    <AtBanner v-bind='[{"tag": "article","shadow": true,"overlay":true}]'/> 
  </template>

  ```vue
  <template>
      <div>
          <AtBanner v-bind="banner"/>
      </div>
  </template>
  
<script>
    export default {
        data() {
            return {
              banner: {
                  tag: 'a',
                  href: 'https://www.google.es',
                  align: 'center',
                  valign: 'center',
                  shadow: false,
                  radius: false,
                  overlay: false,
                  picture: {
                      src: 'https://source.unsplash.com/random/1920x1080',
                      sources: [
                          {srcset: 'https://source.unsplash.com/random/600x400', media: '480px'},
                          {srcset: 'https://source.unsplash.com/random/320x200', media: '320px'}
                      ]
                  }
              }
            }
        }
    }
</script>
  ```
</Preview>


