---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "tag",
          "type": "String",
          "description": "Tag HTML para el componente",
          "default": "<p>"
        },
        {
          "name": "background",
          "type": "Boolean",
          "description": "Fondo para el texto",
          "default": "false"
        },
        {
          "name": "text",
          "type": "String",
          "description": "Texto a mostrar",
          "default": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }                
      ] 
    }
  ]
}
---

# Paragraph


<Preview>
  <template slot="demo">
    <components-Paragraph-Paragraph/> 
  </template>

  <<< @/examples/components/Paragraph/Paragraph.vue
</Preview>

## API

<Api />
