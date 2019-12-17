---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name" : "label",
          "type" : "String",
          "parameters" : "null",
          "description": "Definition for a element.",
          "default": "undefined"
        },               
        {
          "name" : "placeholder",
          "type" : "String",
          "parameters" : "null",
          "description": "Describes the expected value of a element.",
          "default": "undefined"
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


