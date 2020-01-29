# Tips

<Preview>
  <template slot="demo">
    <components-Tips-Tips />
  </template>

  <<< @/examples/components/Tips/Tips.vue
</Preview>

## Propiedades

| Nombre       | Tipo      | Parámetros                                                           | Descripción                                   | Por defecto |
|--------------|-----------|-----------------------------------------------------------------------|-----------------------------------------------|-------------|
| `items`      | `Array`   |                                                                       | Array de componentes [Tip](./tip.md)          | `[]`        |
| `gap`        | `String`  | [Nombre de clases disponibles](../estilos/clases-de-utilidad/gaps.md) | Tamaño de separación del icono y el contenido | `basalt`    |
| `horizontal` | `Boolean` |                                                                       | Pone los tips en horizontal                   | `false`     |

## Configuración por defecto

```js
{
    tips: [],
    tip: {
        iconCard: {
            icon: {}
        },
        title: {},
        description: {}
    }
}
```

### Referencias

| Clave               | Componente                |
|---------------------|---------------------------|
| `tip.iconCard`      | [IconCard](./iconCard.md) |
| `tip.iconCard.icon` | [Icon](./icon.md)         |
| `tip.title`         | [Text](./text.md)         |
| `tip.description`   | [Text](./text.md)         |