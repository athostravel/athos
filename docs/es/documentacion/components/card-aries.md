# Card Aries

<Preview>
  <template slot="demo">
    <components-CardAries-CardAries />
  </template>

  <<< @/examples/components/CardAries/CardAries.vue
</Preview>

## Propiedades

| Nombre     | Tipo      | Descripción                                                                            | Por defecto |
|------------|-----------|----------------------------------------------------------------------------------------|-------------|
| `title`    | `String`  | Texto para el título                                                                   | `''`        |
| `image`    | `Object`  | Propiedades del componente [Picture](./picture.md)                                     | `{}`        |
| `quality`  | `Object`  | Propiedades del componente [Icon](./icon.md) y `count` como número de iconos a repetir | `{}`        |
| `price`    | `Object`  | Propiedades del componente [Price](./price.md)                                         | `{}`        |
| `inverted` | `Boolean` | Pone la imagen a la derecha                                                            | `false`     |

## Configuración por defecto
```js
{
    quality: {
        color: 'secondary',
        size: 'basalt'
    },
    title: {
        tag: 'div',
        size: 'diorite',
        color: 'primary'
    },
    price: {
        inline: true
    }
}
```

### Referencias

| Clave     | Componente          |
|-----------|---------------------|
| `quality` | [Icon](./icon.md)   |
| `title`   | [Text](./text.md)   |
| `price`   | [Price](./price.md) |