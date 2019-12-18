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
          "description": "Tag HTML para el componente",
          "default": "<p>"
        },
        {
          "name": "background",
          "type": "Boolean",
          "parameters": ,
          "description": "Fondo para el texto",
          "default": "false"
        },
        {
          "name": "text",
          "type": "String",
          "parameters": ,
          "description": "Texto a mostrar",
          "default": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }                
      ] 
    }
  ]
}
---

# Text

<Preview>
  <template slot="demo">
        <AtText/> 
  </template>
  
   ```vue
    <template>
        <div>
            <AtText v-bind="text"/>
        </div>
    </template>
    
    <script>
        export default {
            data() {
                return {
                    text: {
                        tag: "<p>",
                        background: false,
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    }
                }
            }
        }
    </script>
   ```
</Preview>
  
  
