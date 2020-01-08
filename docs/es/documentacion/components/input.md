---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre" : "id",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Identificador del input",
          "Por defecto": "Si se define un label el id será el label transformando sin carácteres especiales. Si no está definido el label será undefined"
        },
        {
          "Nombre" : "name",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Nombre del input",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "type",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Especifica el tipo del input",
          "Por defecto": "text"
        },
        {
          "Nombre" : "label",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Texto para el label",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "value",
          "Tipo" : "String || Boolean || Array || Object",
          "Parámetros" : "",
          "Descripción": "Especifica el valor del input",
          "Por defecto": "undefined"
        },
        {
          "Nombre" : "disabled",
          "Tipo" : "Boolean",
          "Parámetros" : "",
          "Descripción": "Deshabilita el checkbox",
          "Por defecto": "false"
        },            
        {
          "Nombre" : "required",
          "Tipo" : "Boolean",
          "Parámetros" : "",
          "Descripción": "Indica que es obligatorio",
          "Por defecto": "false"
        },         
        {
          "Nombre" : "checked",
          "Tipo" : "Boolean",
          "Parámetros" : "",
          "Descripción": "Marca el checkbox",
          "Por defecto": "false"
        },              
        {
          "Nombre" : "placeholder",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Placeholder del input",
          "Por defecto": "undefined"
        },                
        {
          "Nombre" : "size",
          "Tipo" : "String",
          "Parámetros" : "tiny, small, medium, large",
          "Descripción": "Tamaño del componente",
          "Por defecto": "undefined"
        },            
        {
          "Nombre" : "max",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Valor máximo en caso de que el tipo de input lo permita",
          "Por defecto": "undefined"
        },            
        {
          "Nombre" : "min",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Valor mínimo en caso de que el tipo de input lo permita",
          "Por defecto": "undefined"
        },            
        {
          "Nombre" : "readonly",
          "Tipo" : "Boolean",
          "Parámetros" : "",
          "Descripción": "Activa el modo solo lectura",
          "Por defecto": "false"
        },              
        {
          "Nombre" : "multiple",
          "Tipo" : "Boolean",
          "Parámetros" : "",
          "Descripción": "Activa el modo multiple si el input es de tipo file",
          "Por defecto": "false"
        },               
        {
          "Nombre" : "autocomplete",
          "Tipo" : "Boolean",
          "Parámetros" : "",
          "Descripción": "Activa el modo autocomplete",
          "Por defecto": "false"
        },
        {
          "Nombre" : "icon",
          "Tipo" : "String",
          "Parámetros" : "",
          "Descripción": "Clase para el icono",
          "Por defecto": "undefined"
        },               
        {
          "Nombre" : "iconAlign",
          "Tipo" : "String",
          "Parámetros" : "left, right",
          "Descripción": "Posición del icono",
          "Por defecto": "right"
        },               
        {
          "Nombre" : "iconDetail",
          "Tipo" : "Boolean",
          "Parámetros" : "",
          "Descripción": "Pequeño borde vertical utilizado para separar el icono del valor del input",
          "Por defecto": "false"
        }
      ] 
    }
  ]
}
---

# Input

<Preview>
  <template slot="demo">
    <components-Input-Input />
  </template>
  
  <<< @/examples/components/Input/Input.vue
</Preview>

## API 

<Api />