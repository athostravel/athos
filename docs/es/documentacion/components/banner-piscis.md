# Banner Piscis

<Preview>
  <template slot="demo">
    <components-BannerPiscis-BannerPiscis />
  </template>
  
  <<< @/examples/components/BannerPiscis/BannerPiscis.vue
</Preview>

## Propiedades

| Nombre     | Tipo             | Descripción                                         | Por defecto |
|-------------------|-----------|-----------------------------------------------------|-------------|
| `banner`          | `Object`  | Propiedades del componente [Banner](./banner.md)    | `{}`        |
| `justifyContent`  | `String`  | Propiedades del componente [Banner](./banner.md)    | `bottom`    |
| `alignContent`    | `String`  | Propiedades del componente [Banner](./banner.md)    | `center`    |
| `overlay`         | `String`  | Ubicación del degradado                             | `bottom`    |
| `title`           | `Object`  | Propiedades del componente [Text](./text.md)        | `{}`        |
| `goButton`        | `Object`  | Propiedades del componente [Button](./button.md)    | `{}`        |

### Configuración por defecto

```js
{
    justifyContent: 'bottom',
    alignContent: 'center',
    overlay: 'bottom',
    goButton: {
        color: 'white',
        size: 'basalt',
        variant: 'casper'
    },
    title: {
        color: 'white',
        size: 'obsidian'
    }
}
```

#### Referencias

| Clave               | Componente                    |
|---------------------|-------------------------------|
| `banner`            | [Banner](./banner.md)         |
| `justifyContent`    | [BannerContent](./banner.md)  |
| `alignContent`      | [BannerContent](./banner.md)  |
| `goButton.color`    | [Button](./button.md)         |
| `goButton.size`     | [Button](./button.md)         |
| `goButton.variant`  | [Button](./button.md)         |
| `title.color`       | [Text](./text.md)             |
| `title.size`        | [Text](./text.md)             |
