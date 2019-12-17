# Documentar un componente

Athos utiliza [vuepress](https://vuepress.vuejs.org/) para la documentación, en el enlace podrás leer como funciona.

## API

Para poder documentar la API de cada componente puedes utilizar el frontmatter de la siguiente manera:

```md
---
{
   "API":[
      {
         "title":"properties",
         "items":[
            {
               "name":"src",
               "type":"String",
               "parameters":null,
               "description":"Route for the default image",
               "default":"https://source.unsplash.com/random/1920x1080"
            },
            {
               "name":"alt",
               "type":"String",
               "parameters":"",
               "description":"Specifies an alternate text for an image",
               "default":"empty"
            }
         ]
      }
   ]
}
---

# My Component
```

Cada item de la `API` creará una pestaña con el nombre que aparezca en `title`. Los `items` se encargaran de crear la tabla donde las keys del objeto son los `th` y el value los `td`.