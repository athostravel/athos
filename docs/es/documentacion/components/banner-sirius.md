
# Banner Sirius

<Preview>
  <template slot="demo">
    <components-BannerSirius-BannerSirius />
  </template>
  
  <<< @/examples/components/BannerSirius/BannerSirius.vue
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
    banner: {
        radius: true,
        ratio: {
            width: 4,
            height: 3
        }
    },
    video: {
        button: {
            rounded: true,
            icon: true,
            size: 'diorite',
            variant: 'ghost',
            color: 'secondary'
        },
        icon: {
            icon: 'heart'
        }
    },
    favourite: {
        enabled: true,
        button: {
            tag: 'button',
            rounded: true,
            icon: true,
            size: 'diorite',
            variant: 'ghost',
            color: 'secondary'
        },
        icon: {
            icon: 'heart'
        }
    },
    title: {
        bgColor: 'white',
        text: {
            size: 'diorite',
            color: 'primary'
        }
    },
    meta: {
        bgColor: 'primary',
        text: {
            size: 'dacite',
            color: 'white'
        }
    },
    priceButton: {
        radiused: true
    }
}
```

#### Referencias

| Clave              | Componente                       |
|--------------------|----------------------------------|
| `banner`           | [Banner](./banner.md)            |
| `video.button`     | [Button](./button.md)            |
| `video.icon`       | [Icon](./icon.md)                |
| `favourite.button` | [Button](./button.md)            |
| `favourite.icon`   | [Icon](./icon.md)                |
| `title.text`       | [Text](./text.md)                |
| `meta.text`        | [Text](./text.md)                |
| `priceButton`      | [PriceButton](./price-button.md) |