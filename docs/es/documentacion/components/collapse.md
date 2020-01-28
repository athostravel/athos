# Collapse

<Preview>
  <template slot="demo">
    <components-Collapse-Collapse />
  </template>
  
  <<< @/examples/components/Collapse/Collapse.vue
</Preview>

## Propiedades

| Nombre    | Tipo     | Descripción                                            |  Parámetros                | Por defecto |
|-----------|----------|--------------------------------------------------------|----------------------------|-------------|
| `header`  | `Object` | Propiedades del componente [IconCard](./icon-card.md)  |                            | `undefined` |
| `title`   | `Object` | Propiedades del componente [Text](./text.md)           |                            | `undefined` |
| `content` | `Object` | Contenido dentro del slot del collapse                 |                            | `undefined` |
| `align`   | `String` | Colocación del texto de la cabecera del collapse       | `left`, `right`, `center`  | `left`      |
| `symbol`  | `Object` | Propiedades del componente [Icon](./icon.md)           |                            | `undefined` |

## Slots

| Nombre    | Descripción                     |
|-----------|---------------------------------|
| `default` | Slot del contenido del collapse |

### Configuración por defecto

```js
{
  header: {
      align: 'center',
      gap: 'dunite',
      inline: true
  },
  title: {
      color: 'primary',
      position: 'right',
      weight: 'bold'
  },
  symbol: {
      enabled: true,
      button: { variant: 'icon', color: 'secondary', rounded: true, icon: true, size: 'dunite' },
      icon: { icon: 'heart', align: 'right' }
  }
}
```

#### Referencias

| Clave                | Componente                  |
|----------------------|-----------------------------|
| `header`             | [IconCard](./icon-card.md)  |
| `header.icon`        | [IconCard](./icon-card.md)  |
| `header.color`       | [IconCard](./icon-card.md)  |
| `header.align`       | [IconCard](./icon-card.md)  |
| `header.gap`         | [IconCard](./icon-card.md)  |
| `header.weight`      | [IconCard](./icon-card.md)  |
| `header.inline`      | [IconCard](./icon-card.md)  |