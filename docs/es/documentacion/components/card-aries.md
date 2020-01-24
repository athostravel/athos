# Card Aries

<Preview>
  <template slot="demo">
    <components-CardAries-CardAries />
  </template>

  <<< @/examples/components/CardAries/CardAries.vue
</Preview>

## Propiedades

| Nombre      | Tipo                | Descripción                                                     | Por defecto  |
|-------------|---------------------|-----------------------------------------------------------------|--------------|
| `inverted`  | `Boolean`           | Para poner la imagen a la derecha                               | `false`      |
| `image`     | `Object`            | Propiedades del componente [Banner](./banner.md)                | `{}`         |
| `title`     | `Object`            | Propiedades del componente [Text](./text.md)                    | `{}`         |
| `category`  | `Object`            | Propiedades del componente [Icon](./icon.md)                    | `{}`         |
| `price`     | `Object`            | Propiedades del componente [Price](./price.md)                  | `{}`         |

### Configuración por defecto
```js
{
    category: {
        icon: 'heart',
        color: 'secondary',
        size: 'basalt'
    },
    price: {
        inline: true
    },
    title: {
        tag: 'h3',
        size: 'diorite'
    }
}
```

#### Referencias

| Clave              | Componente            |
|--------------------|-----------------------|
| `category.icon`    | [Text](./text.md)     |
| `category.color`   | [Text](./text.md)     |
| `category.size`    | [Text](./text.md)     |
| `price.inline`     | [Price](./price.md)   |
| `title.tag`        | [Text](./text.md)     |
| `title.size`       | [Text](./text.md)     |