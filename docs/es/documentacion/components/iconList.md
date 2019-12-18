---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre" : "icons",
          "Tipo" : "Array",
          "Descripción": "Array de objetos con los iconos",
          "Por defecto": "empty"
        },
        {
          "Nombre": "vertical",
          "Tipo": "Boolean",
          "Descripción": "Añade una clase para mostrarlo en vertical",
          "Por defecto": "false"
        }             
      ] 
    }
  ],
  "previewOptions": {
    "booleans": [
      'vertical'
    ],
    "selects": [
      {
        "prop": color,
        "label": Colors,
        "attrs": {
          "items": [
            'red',
            'blue'
          ]
        }
      }
    ]
  }
}
---

# Icon List

<Preview :options="$page.frontmatter.previewOptions">
  <template slot="demo" slot-scope="boolean">
    <AtIconList 
      :icons="[
        { icon: 'heart' },
        { icon: 'heart' },
        { icon: 'heart' }
      ]" 
      v-bind="boolean"
    /> 
  </template>

  ```vue
  <template>
      <AtIconList v-bind="iconList"/>
  </template>
  
  <script>
      export default {
          data() {
              return {
                  iconList: {
                    icons: [
                        { icon: 'heart' },
                        { icon: 'heart' },
                        { icon: 'heart' }
                    ]
                  }
              }
          },
      }
  </script>
  ```
</Preview>

<Preview>
  <template slot="demo">
    <AtIconList 
      :icons="[
        { icon: 'heart' },
        { icon: 'heart' },
        { icon: 'heart' }
      ]" 
      vertical
    /> 
  </template>

  ```vue
  <template>
      <AtIconList v-bind="iconList"/>
  </template>
  
  <script>
      export default {
          data() {
              return {
                  iconList: {
                    icons: [
                        { icon: 'heart' },
                        { icon: 'heart' },
                        { icon: 'heart' }
                    ],
                    vertical: true
                  }
              }
          },
      }
  </script>
  ```
</Preview>


