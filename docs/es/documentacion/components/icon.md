---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "icon",
          "type": "String, Boolean",
          "parameters": null,
          "description": "Class of the icon to display",
          "default": "undefined"
        },
        {
          "name" : "tag",
          "type" : "String",
          "parameters" : "",
          "description": "Specifies a tag for the element",
          "default": "span"
        }               
      ] 
    }
  ]
}
---

# Icon

<Preview>
  <template slot="demo">
        <AtIcon/> 
  </template>

  ```vue
  <template>
      <div>
          <AtIcon v-bind="icon"/>
      </div>
  </template>
  
  <script>
      export default {
          data() {
              return {
                  icon: {
                      icon: "c-icon-star",
                      tag: "div"
                  }
              }
          },
      }
  </script>

  ```
</Preview>


