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
          "description": "Texto que acompaña al checkbox.",
          "default": "undefined"
        },
        {
          "name" : "value",
          "type" : "String",
          "description": "Especifica el valor del checkbox.",
          "default": "undefined"
        },
        {
          "name" : "disabled",
          "type" : "Boolean",
          "description": "Sirve para deshabilitar el checkbox.",
          "default": "false"
        },            
        {
          "name" : "required",
          "type" : "Boolean",
          "description": "Indica que es obligatorio marcar el checkbox antes de enviar el formulario.",
          "default": "false"
        },         
        {
          "name" : "checked",
          "type" : "Boolean",
          "description": "Cuando se carga la página el checkbox se mostrará marcado.",
          "default": "false"
        }
      ] 
    }
  ]
}
---

# CheckBox

<Preview>
  <template slot="demo">
    <AtCheckbox type="checkbox" id="check" name="check" label="Checkbox" />
  </template>
  
  ```vue
  <template>
    <AtCheckbox type="checkbox" id="check" name="check" label="Checkbox" />
  </template>
  
  <script>
      export default {
          data() {
              return {
                  checkbox: {
                      id: "check",
                      name: "check",
                      label: "Checkbox"
                  }
              }
          }
      }
  </script>
  ```
</Preview>


