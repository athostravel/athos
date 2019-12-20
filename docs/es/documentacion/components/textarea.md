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
          "name" : "label",
          "type" : "String",
          "description": "Texto que acompaña al textarea.",
          "default": "undefined"
        },               
        {
          "name" : "placeholder",
          "type" : "String",
          "description": "Este atributo da una pista breve del valor esperado dentro de un campo de texto.",
          "default": "undefined"
        },
        {
          "name" : "size",
          "type" : "String",
          "description": "Tamaño del elemento <input>.",
          "default": "undefined"
        },
        {
          "name" : "readonly",
          "type" : "Boolean",
          "description": "Especifica que ese elemento es de solo lectura.",
          "default": "false"
        },            
        {
          "name" : "disabled",
          "type" : "Boolean",
          "description": "Sirve para deshabilitar el textarea.",
          "default": "false"
        },            
        {
          "name" : "required",
          "type" : "Boolean",
          "description": "Indica que es obligatorio marcar el textarea antes de enviar el formulario.",
          "default": "false"
        },            
        {
          "name" : "rows",
          "type" : "String",
          "description": "Número de filas del textarea.",
          "default": "false"
        },            
        {
          "name" : "cols",
          "type" : "String",
          "description": "Nº de columnas del textarea.",
          "default": "false"
        }
      ] 
    }
  ]
}
---

# TextArea

<Preview>
  <template slot="demo">
    <AtTextarea placeholder="Message" label="Message" />
    <AtTextarea placeholder="Message" label="Message" size="tiny" />
    <AtTextarea placeholder="Message" label="Message" size="small" />
    <AtTextarea placeholder="Message" label="Message" />
    <AtTextarea placeholder="Message" label="Message" size="medium" />
    <AtTextarea placeholder="Message" label="Message" size="large" />
  </template>
  
  ```vue
  <template>
    <AtTextarea placeholder="Message" label="Message" />
    <AtTextarea placeholder="Message" label="Message" size="tiny" />
    <AtTextarea placeholder="Message" label="Message" size="small" />
    <AtTextarea placeholder="Message" label="Message" />
    <AtTextarea placeholder="Message" label="Message" size="medium" />
    <AtTextarea placeholder="Message" label="Message" size="large" />
  </template>
  
  <script>
      export default {
          data() {
              return {
                  textarea: {
                      label: "Fullname",
                      placeholder: "Fullname"
                  }
              }
          }
      }
  </script>
  ```
</Preview>


