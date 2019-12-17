---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "vertical",
          "type": "Boolean",
          "parameters": null,
          "description": "Add a class for display the component vertically",
          "default": "false"
        },
        {
          "name" : "icons",
          "type" : "Array",
          "parameters" : "",
          "description": "Array of icons classes",
          "default": "empty"
        }               
      ] 
    }
  ]
}
---

# Icon List

<Preview>
  <template slot="demo">
        <AtIconList/> 
  </template>

  ```vue
  <template>
      <div>
          <AtIconList v-bind="icon"/>
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


