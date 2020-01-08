# Price Button

<Preview>
  <template slot="demo">
    <components-PriceButton-PriceButton />
  </template>
  
  <<< @/examples/components/PriceButton/PriceButton.vue
</Preview>
  
## Propiedades

| Nombre     | Tipo      | Descripción                                      | Por defecto |
|------------|-----------|--------------------------------------------------|-------------|
| `tag`      | `String`  | Etiqueta HTML del componente                     | `a`         |
| `href`     | `String`  | Enlace del botón                                 | `#`         |
| `inverted` | `Boolean` | Invierte el botón con la caja                    | `false`     |
| `atButton` | `Object`  | Propiedades del componente [Button](./button.md) | [Propiedades por defecto](#propiedades-por-defecto)     |
| `atPrice`  | `Object`  | Propiedades del componente [Price](./price.md)   | [Propiedades por defecto](#propiedades-por-defecto)     |
| `atIcon`   | `Object`  | Propiedades del componente [Icon](./icon.md)     | [Propiedades por defecto](#propiedades-por-defecto)     |

### Propiedades por defecto

```js
{
    atPrice: {
        text: 'Desde'
    },
    atButton: {
        tag: 'div',
        color: 'secondary'
    },
    atIcon: {
        icon: 'angle-right'
    }
}
```