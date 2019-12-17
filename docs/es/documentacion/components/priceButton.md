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
        <AtPriceButton v-bind='[{"tag":"div","price":{"text":"desde","before":"400","value":"299"},"button":{"text":"ver","tag":"div"}}]'/> 
  </template>
  
   ```vue
    <template>
        <div>
            <AtPriceButton v-bind="config"/>
        </div>
    </template>
    
    <script>
        export default {
            data() {
                return {
                    config: {
                        tag: 'a',
                        price: {
                            text: "Desde",
                            before: "300",
                            value: "199",
                            currency: "$",
                            inline: true,
                            
                        },
                        button: {
                          tag: 'div',
                          text: 'ir'
                        } 
                    }     
                }
            }
        }
    </script>
   ```
</Preview>
  
