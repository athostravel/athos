---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "src",
          "Tipo": "String",
          "Descripción": "Url de la imagen",
          "Por defecto": "https://source.unsplash.com/random/1920x1080"
        },
        {
          "Nombre" : "alt",
          "Tipo" : "String",
          "Descripción": "Texto alternativo de la imagen",
          "Por defecto": "empty"
        },
        {
          "Nombre" : "title",
          "Tipo" : "String",
          "Descripción": "Título de la imagen",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "sources",
          "Tipo" : "Array",
          "Descripción": "Listado de sources",
          "Por defecto": "undefined"
        }                
      ] 
    }
  ],
  "APIPictureSource": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "srcset",
          "Tipo": "String",
          "Descripción": "Url de la imagen",
          "Por defecto": "empty"
        },
        {
          "Nombre": "srcset",
          "Tipo": "media",
          "Descripción": "Tamaño en pixeles del la mediaquery",
          "Por defecto": "undefined"
        },
        {
          "Nombre": "shim",
          "Tipo": "String",
          "Descripción": "Imagen en base64",
          "Por defecto": "undefined"
        }
      ]
    }
  ]
}
---

# Picture

<Preview>
  <template slot="demo">
    <components-Picture-Picture />
  </template>

  <<< @/examples/components/Picture/Picture.vue
</Preview>

## API 

<Api />

## Picture Source

El componente `PictureSource` se usa junto con el componente `Picture` para pintar los sources del picture.

### API

<Api :data="$page.frontmatter.APIPictureSource" />



