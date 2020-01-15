# Price

<Preview>
  <template slot="demo">
    <components-Price-Price />
  </template>
  
  <<< @/examples/components/Price/Price.vue
</Preview>
  
## Propiedades

| Nombre     | Tipo                | Parámetros      | Descripción                                            | Por defecto |
|------------|---------------------|-----------------|--------------------------------------------------------|-------------|
| `text`     | `String`            |                 | Añade un texto pequeño                                 | `undefined` |
| `before`   | `String`            |                 | Añade un precio anterior al actual                     | `undefined` |
| `value`    | `Number`, `Boolean` |                 | Valor del precio                                       | `undefined` |
| `currency` | `String`            |                 | Tipo de moneda                                         | `€`         |
| `align`    | `String`            | `left`, `right` | Alinea el precio                                       | `right`     |
| `inline`   | `Boolean`           |                 | Pone el texto, el precio anterior y el precio en línea | `false`     |