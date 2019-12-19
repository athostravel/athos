---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "tag",
          "type": "String",
          "parameters": ,
          "description": "Tag to the component",
          "default": "undefined"
        },
        {
          "name" : "inverted",
          "type" : "Boolean",
          "parameters" : "",
          "description": "Will add a class to display the component in inverted position",
          "default": "empty"
        },
        {
          "name" : "button",
          "type" : "Object",
          "parameters" : "",
          "description": "Button props",
          "default": "empty"
        },                      
        {
          "name" : "price",
          "type" : "Object",
          "parameters" : "",
          "description": "Price props",
          "default": "empty"
        }                      
      ] 
    }
  ]
}
---

# Price Button

<Preview>
  <template slot="demo">
    <components-PriceButton-PriceButton />
  </template>
  
  <<< @/examples/components/PriceButton/PriceButton.vue
</Preview>
  
## API

<Api />