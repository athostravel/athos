---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "title",
          "type": "String",
          "parameters": ,
          "description": "Title of the component",
          "default": "undefined"
        },
        {
          "name": "titleTag",
          "type": "String",
          "parameters": ,
          "description": "Tag for the title of the component",
          "default": "h3"
        },        
        {
          "name" : "text",
          "type" : "Array",
          "parameters" : "",
          "description": "Array of paragraph",
          "default": "empty"
        },
        {
          "name" : "icon",
          "type" : "String",
          "parameters" : "",
          "description": "Icon to add near the title",
          "default": "false"
        },
        {
          "name" : "align",
          "type" : "String",
          "parameters" : "",
          "description": "Align of the text",
          "default": "undefined"
        }                                                          
      ] 
    }
  ]
}
---

# Heading

<Preview>
  <template slot="demo">
        <AtHeading v-bind='[{"title": "Título"},{"icon": "heart"},{"text": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]}]'/> 
  </template>

  ```vue
  <template>
      <div>
          <AtHeading v-bind="heading"/>
      </div>
  </template>
  
  <script>
      export default {
          data() {
              return {
                  heading: {
                      title: "button",
                      titleTag: "h1",
                      text: "Heading title example",
                      icon: "c-icon-heart",
                      align: "right"
                  }
              }
          }
      }
  </script>

  ```
</Preview>


