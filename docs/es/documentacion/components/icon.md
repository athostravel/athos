---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "icon",
          "Tipo": "String, Boolean",
          "Descripción": "Clase del icono a mostrar",
          "Por defecto": "false"
        },
        {
          "Nombre" : "tag",
          "Tipo" : "String",
          "Descripción": "Tag HTML del elemento",
          "Por defecto": "span"
        }               
      ] 
    }
  ]
}
---

# Icon

<Preview>
  <template slot="demo">
    <AtIcon icons="heart"/> 
  </template>

  ```vue
  <template>
      <AtIcon v-bind="icon"/>
  </template>
  
  <script>
      export default {
          data() {
              return {
                  icon: {
                      icon: "heart",
                      tag: "span"
                  }
              }
          },
      }
  </script>
  ```
</Preview>


