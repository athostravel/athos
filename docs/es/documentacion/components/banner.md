---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "tag",
          "Tipo": "String",
          "Descripción": "Etiqueta HTML para el componente",
          "Por defecto": "div"
        },
        {
          "Nombre" : "href",
          "Tipo" : "String",
          "Descripción": "Enlace del componente",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "shadow",
          "Tipo" : "Boolean",
          "Descripción": "Sombra de la caja",
          "Por defecto": "false"
        },
        {
          "Nombre" : "radius",
          "Tipo" : "Boolean",
          "Descripción": "Border radius de la caja",
          "Por defecto": "false"
        },
        {
          "Nombre" : "overlay",
          "Tipo" : "Boolean",
          "Descripción": "Capa de superposición sobre la imagen",
          "Por defecto": "false"
        },
        {
          "Nombre" : "picture",
          "Tipo" : "Object",
          "Descripción": "Propiedades del componente Picture",
          "Por defecto": "empty"
        }                                                                 
      ] 
    },
    {
      "title": "Slots",
      "items": [
        {
          "Nombre" : "default",
          "Descripción": "Slot por defecto"
        }
      ]
    }
  ],
  "APIBannerContent": [
    {
      "title": "Slots",
      "items": [
        {
          "Nombre" : "default",
          "Descripción": "Slot del contenido"
        }
      ]
    }
  ]
}
---

# Banner

<Preview>
  <template slot="demo">
    <components-Banner-Banner />
  </template>
  
  <<< @/examples/components/Banner/Banner.vue
</Preview>

## API

<Api />

## Banner Content

El componente `BannerContent` se usa junto con el componente `Banner` para meter contenido.

### API

<Api :data="$page.frontmatter.APIBannerContent" />





