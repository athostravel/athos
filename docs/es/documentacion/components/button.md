---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "tag",
          "type": "String",
          "parameters": null,
          "description": "Tag for the component",
          "default": "a"
        },
        {
          "name" : "text",
          "type" : "String",
          "parameters" : "",
          "description": "Text to display",
          "default": "undefined"
        },
        {
          "name" : "href",
          "type" : "String",
          "parameters" : "",
          "description": "Reference for the button",
          "default": "#"
        },
        {
          "name" : "icon",
          "type" : "String, Boolean",
          "parameters" : "",
          "description": "Icon to display near the text",
          "default": "undefined"
        },
        {
          "name" : "iconAlign",
          "type" : "String",
          "parameters" : "",
          "description": "Position of the icon",
          "default": "left"
        },
        {
          "name" : "outlined",
          "type" : "Boolean",
          "parameters" : "",
          "description": "Button without background",
          "default": "false"
        },
        {
          "name" : "casper",
          "type" : "Boolean",
          "parameters" : "",
          "description": "Button without background",
          "default": "false"
        },
        {
          "name" : "size",
          "type" : "String",
          "parameters" : "",
          "description": "Button size",
          "default": "undefined"
        },
        {
          "name" : "disabled",
          "type" : "Boolean",
          "parameters" : "",
          "description": "Disables the button",
          "default": "false"
        }                                                             
      ] 
    }
  ]
}
---

# Button

<Preview>
  <template slot="demo">
        <AtButton text="Click me !"/> 
  </template>

  ```vue
  <template>
      <div>
          <AtButton v-bind="button"/>
      </div>
  </template>
  
  <script>
      export default {
          data() {
              return {
                  button: {
                      tag: "button",
                      text: "Click Me!",
                      href: "https://www.google.es",
                      icon: "c-icon-arrow",
                      iconAlign: "right",
                      outlined: false,
                      casper: false,
                      size: "tiny",
                      disabled: false
                  }
              }
          }
      }
  </script>

  ```
</Preview>


