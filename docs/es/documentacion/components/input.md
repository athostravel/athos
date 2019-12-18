---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name" : "id",
          "type" : "String",
          "parameters" : "null",
          "description": "El atributo id especifica una identificación única para un elemento HTML.",
          "default": "undefined"
        },
        {
          "name" : "name",
          "type" : "String",
          "parameters" : "null",
          "description": "El atributo de nombre especifica el nombre de un elemento <input>. El atributo de nombre se usa para hacer referencia a elementos en un JavaScript o para hacer referencia a datos de formulario después de enviar un formulario. Nota: Solo los elementos de formulario con un atributo de nombre tendrán sus valores pasados ​​al enviar un formulario.",
          "default": "undefined"
        },    
        {
          "name" : "type",
          "type" : "String",
          "parameters" : "null",
          "description": "El atributo type especifica el tipo de elemento <input> a mostrar.",
          "default": "text"
        },     
        {
          "name" : "label",
          "type" : "String",
          "parameters" : "null",
          "description": "La etiqueta <label> define una etiqueta para un elemento <button>, <input>, <meter>, <output>, <progress>, <select> o <textarea>. El elemento <label> no se representa como algo especial para el usuario. Sin embargo, proporciona una mejora de usabilidad para los usuarios del mouse, porque si el usuario hace clic en el texto dentro del elemento <label>, alterna el control. El atributo for de la etiqueta <label> debe ser igual al atributo id del elemento relacionado para unirlos.",
          "default": "undefined"
        },               
        {
          "name" : "placeholder",
          "type" : "String",
          "parameters" : "null",
          "description": "Este atributo da una pista breve del valor esperado dentro de un campo de texto.",
          "default": "undefined"
        },            
        {
          "name" : "value",
          "type" : "String",
          "parameters" : "null",
          "description": "El atributo value especifica el valor de un elemento <input>.",
          "default": "undefined"
        },            
        {
          "name" : "size",
          "type" : "String",
          "parameters" : "null",
          "description": "Tamaño del elemento <input>.",
          "default": "undefined"
        },            
        {
          "name" : "max",
          "type" : "String",
          "parameters" : "null",
          "description": "El atributo max especifica el valor máximo para un elemento <input>.",
          "default": "undefined"
        },            
        {
          "name" : "min",
          "type" : "String",
          "parameters" : "null",
          "description": "El atributo min especifica el valor mínimo para un elemento <input>.",
          "default": "undefined"
        },            
        {
          "name" : "readonly",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "Cuando está presente, especifica que ese elemento <input> es de solo lectura.",
          "default": "false"
        },            
        {
          "name" : "disabled",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "Cuando está presente, especifica que el elemento <input> debe estar deshabilitado.",
          "default": "false"
        },            
        {
          "name" : "required",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "Cuando está presente, especifica que se debe completar un campo de entrada antes de enviar el formulario.",
          "default": "false"
        },            
        {
          "name" : "multiple",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "Cuando está presente, especifica que el usuario puede ingresar más de un valor en el elemento <input>. El atributo múltiple funciona con los siguientes types de <input>: email y file.",
          "default": "false"
        },            
        {
          "name" : "checked",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "Cuando está presente, especifica que un elemento <input> se debe preseleccionar (marcar) cuando se carga la página. El atributo marcado se puede usar con <input type = 'checkbox'> y <input type = 'radio'>. El atributo marcado también se puede establecer después de la carga de la página, con un JavaScript.",
          "default": "false"
        },            
        {
          "name" : "autocomplete",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "El atributo autocompletar especifica si un campo de entrada debe tener autocompletado habilitado o no. Autocompletar permite al navegador predecir el valor. Cuando un usuario comienza a escribir en un campo, el navegador debe mostrar opciones para completar el campo, en función de los valores escritos anteriormente. El atributo de autocompletar funciona con los siguientes tipos de <input>: text, search, url, tel, email, password, datepickers, range, and color.",
          "default": "false"
        },
        {
          "name" : "icon",
          "type" : "String",
          "parameters" : "null",
          "description": "Icono que acompaña a un elemento de entrada.",
          "default": "undefined"
        },               
        {
          "name" : "iconAlign",
          "type" : "String",
          "parameters" : "null",
          "description": "Posición del icono dentro del <input>.",
          "default": "undefined"
        },               
        {
          "name" : "iconDetail",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "Pequeño borde vertical utilizado para separar el icono del valor del input.",
          "default": "false"
        }
      ] 
    }
  ]
}
---

# Input

<Preview>
  <template slot="demo">
    <AtInput />
    <AtInput label="Fullname" placeholder="Fullname" />
    <AtInput label="Fullname" placeholder="Fullname" value="Antonio Banderas" />
    <AtInput label="Input disabled" placeholder="Input disabled" value="Antonio Banderas" disabled />
    <AtInput label="Input readonly" placeholder="Input readonly" value="Antonio Banderas" readonly />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-detail />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" icon-detail />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="tiny" icon="phone" icon-align="left" icon-detail />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="small" icon="phone" icon-align="left" icon-detail />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" icon-detail />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="medium" icon="phone" icon-align="left" icon-detail />
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="large" icon="phone" icon-align="left" icon-detail />
  </template>
  
  ```vue
  <template>
    
    <AtInput />

    <AtInput label="Fullname" placeholder="Fullname" />

    <AtInput label="Fullname" placeholder="Fullname" value="Antonio Banderas" />

    <AtInput label="Input disabled" placeholder="Input disabled" value="Antonio Banderas" disabled />

    <AtInput label="Input readonly" placeholder="Input readonly" value="Antonio Banderas" readonly />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" />
  
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-detail />
 
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" icon-detail />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="tiny" icon="phone" icon-align="left" icon-detail />
    
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="small" icon="phone" icon-align="left" icon-detail />
    
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" icon-detail />
    
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="medium" icon="phone" icon-align="left" icon-detail />
    
    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="large" icon="phone" icon-align="left" icon-detail />
  </template>
  
  <script>
      export default {
          data() {
              return {
                  input: {
                      label: "Fullname",
                      placeholder: "Fullname"
                  }
              }
          }
      }
  </script>
  ```
</Preview>


