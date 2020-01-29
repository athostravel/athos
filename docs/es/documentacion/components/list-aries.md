# List Aries

<Preview>
  <template slot="demo">
    <components-ListAries-ListAries /> 
  </template>

  <<< @/examples/components/ListAries/ListAries.vue
</Preview>

## Propiedades

| Nombre  | Tipo     | Descripción                                       | Por defecto |
|---------|----------|---------------------------------------------------|-------------|
| `title` | `String` | Texto para el título                              | `undefined` |
| `items` | `Array`  | Array de componentes [CardAries](./card-aries.md) | `[]`        |

## Configuración por defecto

```js
{
    title: {
        tag: 'div',
        color: 'secondary',
        size: 'obsidian',
        align: 'center'
    },
    cardAries: {},
    items: []
}
```

### Referencias

| Clave       | Componente                   |
|-------------|------------------------------|
| `title`     | [Text](./text.md)            |
| `cardAries` | [CardAries](./card-aries.md) |