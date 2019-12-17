---
{
  "API": [
    {
      "title": "properties",
      "items": [
        {
          "name": "src",
          "type": "String",
          "parameters": null,
          "description": "Route for the default image",
          "default": "https://source.unsplash.com/random/1920x1080"
        },
        {
          "name" : "alt",
          "type" : "String",
          "parameters" : "",
          "description": "Specifies an alternate text for an image",
          "default": "empty"
        },
        {
          "name" : "title",
          "type" : "String",
          "parameters" : "",
          "description": "Specifies an title text for an image",
          "default": "undefined"
        },
        {
          "name" : "sources",
          "type" : "Array",
          "parameters" : "srcset, media",
          "description": "List of sources by resolution",
          "default": "undefined"
        }                
      ] 
    }
  ]
}
---

# Picture

<Preview>
  <template slot="demo">
        <AtButton v-bind="{
            sources: [
                {srcset: 'https://source.unsplash.com/random/600x400', media: '480px'},
                {srcset: 'https://source.unsplash.com/random/320x200', media: '320px'}
            ]
        }"/> 
  </template>

  ```vue
  <template>
      <div>
          <AtPicture v-bind="picture"/>
      </div>
  </template>
  
  <script>
      export default {
          data() {
              return {
                  picture: {
                      title: "Titulo",
                      alt: "Alt",
                      src: "https://source.unsplash.com/random/1920x1080",
                      sources: [
                          {srcset: 'https://source.unsplash.com/random/600x400', media: '480px'},
                          {srcset: 'https://source.unsplash.com/random/320x200', media: '320px'}
                      ]
                  }
              }
          },
      }
  </script>

  ```
</Preview>


