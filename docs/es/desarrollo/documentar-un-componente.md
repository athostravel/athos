# Documentar un componente

Athos utiliza [vuepress](https://vuepress.vuejs.org/) para la documentación, en el enlace podrás leer como funciona.

## API

Para poder documentar la API de cada componente puedes utilizar el frontmatter de la siguiente manera:

```md
---
{
   "API":[
      {
         "title":"Propiedades",
         "items":[
            {
               "Nombre": "src",
               "Tipo": "String",
               "Parámetros": "",
               "Descripción":"Url de la imagen",
               "Por defecto":"https://source.unsplash.com/random/1920x1080"
            },
            {
               "Nombre": "alt",
               "Tipo": "String",
               "Parámetros": "",
               "Descripción": "Texto alternativo de la imagen",
               "Por defecto": "empty"
            }
         ]
      }
   ]
}
---

# My Component
```

Cada item de la `API` creará una pestaña con el nombre que aparezca en `title`. Los `items` se encargaran de crear la tabla donde las keys del objeto son los `th` y el value los `td`. Una vez definido el objecto podemos llamar al componente de la siguiente manera:

```md
<Api />
```

En caso de necesitar otro componente con diferente información bastaría con añadir otro objeto en el frontmatter y pasarselo al componente `Api` mediante `:data`:

```md
---
{
  "API" [],
  "otherAPI":[
    {
      "title":"Propiedades",
      "items":[
        {
          "Nombre": "src",
          "Tipo": "String",
          "Parámetros": "",
          "Descripción":"Url de la imagen",
          "Por defecto":"https://source.unsplash.com/random/1920x1080"
        },
        {
          "Nombre": "alt",
          "Tipo": "String",
          "Parámetros": "",
          "Descripción": "Texto alternativo de la imagen",
          "Por defecto": "empty"
        }
      ]
    }
  ]
}
---

<Api :data="$page.frontmatter.otherAPI" />
```