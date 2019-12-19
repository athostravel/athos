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
    <AtBannerSirius v-bind='[
                               {
                                  banner:{
                                     overlay:false,
                                     radius:false,
                                     shadow:false,
                                  },
                                  picture: {
                                    src: "https://source.unsplash.com/random/200x200"
                                  },
                                  price:{
                                     text:"desde",
                                     before:"400",
                                     value:"299"
                                  },
                                  button:{
                                     text:"ver",
                                     tag:"div"
                                  },
                                  title: "Punta Cana y Playa Bávaro",
                                  meta: "9 días y 7 noches",
                                  textTag: "div"
                               }
                            ]'/> 
  </template>

  ```vue
  <template>
      <div>
          <AtBannerSirius v-bind="banner"/>
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
                  title: "Punta Cana y Playa Bávaro",
                  meta: "9 días y 7 noches",
                  banner: {
                    overlay: false,
                    shadow: true,
                    radius: false
                  }, 
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


