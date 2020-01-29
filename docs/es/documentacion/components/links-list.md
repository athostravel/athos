# Links List

<Preview>
  <template slot="demo">
    <components-LinksList-LinksList />
  </template>
  
  <<< @/examples/components/LinksList/LinksList.vue
</Preview>

## Propiedades

| Nombre        | Tipo      | Descripción                                                                         | Parámetros        | Por defecto |
|---------------|-----------|-------------------------------------------------------------------------------------|-------------------|-------------|
| `symbol`      | `String`  | Caracter utilizado para separar un listado horizontal o decorar un listado vertical |                   | `|`         |
| `symbolColor` | `String`  | Color del caracter utilizado para separar o decorar                                 |                   | `secondary` |
| `vertical`    | `Boolean` | Cambia la horientación del listado                                                  |                   | `false`     |
| `position`    | `String`  | Posición de los enlaces                                                             | `right`, `center` | `left`      |
| `items`       | `Array`   | Array de objetos con los enlaces                                                    |                   | `[]`        |

### Configuración por defecto

```js
{
  symbol: {
      type: String,
      default: '|'
  },
  symbolColor: {
      type: String,
      default: 'secondary'
  },
  vertical: {
      type: Boolean,
      default: false
  },
  position: {
      type: String,
      default: 'left'
  },
  items: {
      type: Array,
      default: () => []
  }
}
```


## Slots

| Nombre      | Descripción        |
|-------------|--------------------|
| `default`   | Slot por defecto   |
