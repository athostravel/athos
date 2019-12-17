---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "text",
          "type": "String",
          "parameters": ,
          "description": "if it exists, will print a literal",
          "default": "undefined"
        },
        {
          "name" : "before",
          "type" : "String",
          "parameters" : "",
          "description": "if it exists, it will paint a crossed out text",
          "default": "empty"
        },
        {
          "name" : "value",
          "type" : "String",
          "parameters" : "",
          "description": "Price to print",
          "default": "undefined"
        },
        {
          "name" : "currency",
          "type" : "String",
          "parameters" : "",
          "description": "Type of currency",
          "default": "€"
        },
        {
          "name" : "inline",
          "type" : "Boolean",
          "parameters" : "",
          "description": "Will add a class to display the component in one line",
          "default": "false"
        }                         
      ] 
    }
  ]
}
---

# Price

<Preview>
  <template slot="demo">
        <AtPrice v-bind="{text: 'Desde', before: '600', value: '480'}"/> 
  </template>
  
   ```vue
    <template>
        <div>
            <AtPrice v-bind="price"/>
        </div>
    </template>
    
    <script>
        export default {
            data() {
                return {
                    price: {
                        text: "Desde",
                        before: "300",
                        value: "199",
                        currency: "$",
                        inline: true
                    }
                }
            },
        }
    </script>
   ```
</Preview>
  
  
