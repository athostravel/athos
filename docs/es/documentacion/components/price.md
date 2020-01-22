# Price

<Preview>
  <template slot="demo">
    <components-Price-Price />
  </template>
  
  <<< @/examples/components/Price/Price.vue
</Preview>
  
## Propiedades

| Nombre     | Tipo                | Parámetros                                                               | Descripción                                            | Por defecto |
|------------|---------------------|--------------------------------------------------------------------------|--------------------------------------------------------|-------------|
| `text`     | `String`            |                                                                          | Añade un texto pequeño                                 | `undefined` |
| `before`   | `String`            |                                                                          | Añade un precio anterior al actual                     | `undefined` |
| `value`    | `Number`, `Boolean` |                                                                          | Valor del precio                                       | `undefined` |
| `currency` | `String`            |                                                                          | Tipo de moneda                                         | `€`         |
| `align`    | `String`            | `left`, `center`, `right`                                                | Alinea el precio                                       | `right`     |
| `inline`   | `Boolean`           |                                                                          | Pone el texto, el precio anterior y el precio en línea | `false`     |
| `color`    | `String`            | [Nombre de clases disponibles](../estilos/clases-de-utilidad/colores.md) | Color del texto y precios                              | `primary`   |