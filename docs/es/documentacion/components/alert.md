
# Alert

<Preview>
  <template slot="demo">
    <components-Alert-Alert />
  </template>
  
  <<< @/examples/components/Alert/Alert.vue
</Preview>

## Propiedades

| Nombre  | Tipo     | Descripción                                                 | Por defecto |
|---------|----------|-------------------------------------------------------------|-------------|
| `href`  | `String` | Url del botón                                               | `#`         |
| `meta`  | `String` | Texto pequeño                                               | `undefined` |
| `title` | `String` | Texto del título                                            | `undefined` |
| `video` | `String` | Url del vídeo                                               | `undefined` |
| `image` | `Object` | Propiedades del componente [Banner](./banner.md)            | `{}`        |
| `price` | `Object` | Propiedades del componente [PriceButton](./price-button.md) | `{}`        |

### Configuración por defecto

```js
{
    banner: { radius: true },
    video: {
        button: { rounded: true, size: 'tiny' },
        icon: { icon: 'heart' }
    },
    favourite: {
        enabled: true,
        button: { tag: 'button', rounded: true, size: 'tiny' },
        icon: { icon: 'heart' }
    },
    title: { background: true },
    meta: { background: true }
}
```

#### Referencias

| Clave              | Componente            |
|--------------------|-----------------------|
| `banner`           | [Banner](./banner.md) |
| `video.button`     | [Button](./button.md) |
| `video.icon`       | [Icon](./icon.md)     |
| `favourite.button` | [Button](./button.md) |
| `favourite.icon`   | [Icon](./icon.md)     |
| `title`            | [Text](./text.md)     |
| `meta`             | [Text](./text.md)     |