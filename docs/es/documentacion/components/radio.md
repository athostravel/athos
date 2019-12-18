---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name" : "id",
          "type" : "String",
          "description": "Identificador único dentro del DOM.",
          "default": "undefined"
        },
        {
          "name" : "name",
          "type" : "String",
          "description": "Especifica el nombre del elemento.",
          "default": "undefined"
        },
        {
          "name" : "type",
          "type" : "String",
          "description": "Especifica el tipo de elemento.",
          "default": "text"
        },
        {
          "name" : "label",
          "type" : "String",
          "description": "Texto que acompaña al radio.",
          "default": "undefined"
        },
        {
          "name" : "value",
          "type" : "String",
          "description": "Especifica el valor del radio.",
          "default": "undefined"
        },
        {
          "name" : "disabled",
          "type" : "Boolean",
          "description": "Sirve para deshabilitar el radio.",
          "default": "false"
        },            
        {
          "name" : "required",
          "type" : "Boolean",
          "description": "Indica que es obligatorio marcar el radio antes de enviar el formulario.",
          "default": "false"
        },         
        {
          "name" : "checked",
          "type" : "Boolean",
          "description": "Cuando se carga la página el radio se mostrará marcado.",
          "default": "false"
        }
      ] 
    }
  ]
}
---

# Radio

<Preview>
  <template slot="demo">
    <AtRadio type="radio" id="radio" name="radio" label="Radio" />
  </template>
  
  ```vue
  <template>
    <AtRadio type="radio" id="radio" name="radio" label="Radio" />
  </template>
  
  <script>
      export default {
          data() {
              return {
                  radio: {
                      id: "radio",
                      name: "radio",
                      label: "Radio"
                  }
              }
          }
      }
  </script>
  ```
</Preview>


