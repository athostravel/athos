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
    <AtInput />
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
                      label: "Fullname",
                      placeholder: "Fullname"
                  }
              }
          }
      }
  </script>

  ```
</Preview>


