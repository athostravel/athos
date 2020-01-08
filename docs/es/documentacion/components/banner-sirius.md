
# Banner Sirius

<Preview>
  <template slot="demo">
    <components-BannerSirius-BannerSirius />
  </template>
  
  <<< @/examples/components/BannerSirius/BannerSirius.vue
</Preview>


## Propiedades

| Nombre          | Tipo     | Descripción                                                                                                          | Por defecto                                         |
|-----------------|----------|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| `icons`         | `Array`  | Cada objeto del array hace referencia a las propiedades de los componentes [Button](./button.md) y [Icon](./icon.md) | [Items por defecto](#propiedades-por-defecto)       |
| `meta`          | `Object` | Propiedades del componente [Text](./text.md)                                                                         | [Propiedades por defecto](#propiedades-por-defecto) |
| `title`         | `Object` | Propiedades del componente [Text](./text.md)                                                                         | [Propiedades por defecto](#propiedades-por-defecto) |
| `atBanner`      | `Object` | Propiedades del componente [Banner](./banner.md)                                                                     | [Propiedades por defecto](#propiedades-por-defecto) |
| `atPriceButton` | `Object` | Propiedades del componente [PriceButton](./price-button.md)                                                          | `empty`                                             |

### Propiedades por defecto

```js
{
    title: { background: true },
    meta: { background: true },
    icons: [
        {
            atButton: {
                rounded: true,
                size: 'tiny'
            },
            atIcon: {
                icon: 'heart'
            }
        },
        {
            atButton: {
                rounded: true,
                size: 'tiny'
            },
            atIcon: {
                icon: 'heart'
            }
        }
    ],
    atBanner: {
        radius: true
    }
}
```
