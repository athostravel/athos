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
          "description": "The id attribute specifies a unique id for an HTML element.",
          "default": "undefined"
        },
        {
          "name" : "name",
          "type" : "String",
          "parameters" : "null",
          "description": "The name attribute specifies the name of an <input> element. The name attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted. Note: Only form elements with a name attribute will have their values passed when submitting a form.",
          "default": "undefined"
        },    
        {
          "name" : "type",
          "type" : "String",
          "parameters" : "null",
          "description": "The type attribute specifies the type of <input> element to display.",
          "default": "text"
        },     
        {
          "name" : "label",
          "type" : "String",
          "parameters" : "null",
          "description": "The <label> tag defines a label for a <button>, <input>, <meter>, <output>, <progress>, <select>, or <textarea> element. The <label> element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the <label> element, it toggles the control. The for attribute of the <label> tag should be equal to the id attribute of the related element to bind them together.",
          "default": "undefined"
        },               
        {
          "name" : "placeholder",
          "type" : "String",
          "parameters" : "null",
          "description": "The placeholder attribute specifies a short hint that describes the expected value of an input field (e.g. a sample value or a short description of the expected format). The short hint is displayed in the input field before the user enters a value.",
          "default": "undefined"
        },            
        {
          "name" : "value",
          "type" : "String",
          "parameters" : "null",
          "description": "The value attribute specifies the value of an <input> element.",
          "default": "undefined"
        },            
        {
          "name" : "size",
          "type" : "String",
          "parameters" : "null",
          "description": "Input element size element.",
          "default": "undefined"
        },            
        {
          "name" : "max",
          "type" : "String",
          "parameters" : "null",
          "description": "The max attribute specifies the maximum value for an <input> element.",
          "default": "undefined"
        },            
        {
          "name" : "min",
          "type" : "String",
          "parameters" : "null",
          "description": "The min attribute specifies the maximum value for an <input> element.",
          "default": "undefined"
        },            
        {
          "name" : "readonly",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "When present, it specifies that an input field is read-only.",
          "default": "false"
        },            
        {
          "name" : "disabled",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "When present, it specifies that the <input> element should be disabled.",
          "default": "false"
        },            
        {
          "name" : "required",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "When present, it specifies that an input field must be filled out before submitting the form.",
          "default": "false"
        },            
        {
          "name" : "multiple",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "When present, it specifies that the user is allowed to enter more than one value in the <input> element. Note: The multiple attribute works with the following input types: email, and file.",
          "default": "false"
        },            
        {
          "name" : "checked",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "When present, it specifies that an <input> element should be pre-selected (checked) when the page loads. The checked attribute can be used with <input type='checkbox'> and <input type='radio'>. The checked attribute can also be set after the page load, with a JavaScript.",
          "default": "false"
        },            
        {
          "name" : "autocomplete",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "The autocomplete attribute specifies whether or not an input field should have autocomplete enabled. Autocomplete allows the browser to predict the value. When a user starts to type in a field, the browser should display options to fill in the field, based on earlier typed values. The autocomplete attribute works with the following <input> types: text, search, url, tel, email, password, datepickers, range, and color.",
          "default": "false"
        },
        {
          "name" : "icon",
          "type" : "String",
          "parameters" : "null",
          "description": "Icon that accompanies an input element.",
          "default": "undefined"
        },               
        {
          "name" : "iconAlign",
          "type" : "String",
          "parameters" : "null",
          "description": "Icon position.",
          "default": "undefined"
        },               
        {
          "name" : "iconDetail",
          "type" : "Boolean",
          "parameters" : "null",
          "description": "Icon detail.",
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
    <AtInput label="Lorem ipsum" placeholder="Lorem ipsum" />
  </template>
  
  ```vue
  <template>
    <AtInput v-bind="input"/>
  </template>
  
  <script>
      export default {
          data() {
              return {
                  input: {
                      label: "Lorem ipsum",
                      placeholder: "Lorem ipsum"
                  }
              }
          }
      }
  </script>
  ```
</Preview>


