# Collapse

<Preview>
  <template slot="demo">
    <components-Collapse-Collapse />
  </template>
  
  <<< @/examples/components/Collapse/Collapse.vue
</Preview>

## Propiedades

| Nombre    | Tipo     | Descripción                                         |  Parámetros                | Por defecto |
|-----------|----------|-----------------------------------------------------|----------------------------|-------------|
| `header`  | `Object` | Texto del collapse                                  |                            | `undefined` |
| `Icon`    | `Object` | Icono del collapse                                  |                            | `undefined` |
| `content` | `Object` | Texto dentro del collapse                           |                            | `undefined` |
| `position`| `String` | Colocación del texto de la cabecera del collapse    | `left`, `right`, `center`  | `left`      |

## Slots

| Nombre    | Descripción                     |
|-----------|---------------------------------|
| `icon`    | Slot del icono del collapse     |
| `default` | Slot del contenido del collapse |

### Configuración por defecto

```js
{
  header: {
      color: 'primary',
      position: 'right',
      gap: 'dunite',
      weight: 'bold',
      inline: true
  },
  icon: {
      icon: 'heart'
  }
}
```

#### Referencias

| Clave                | Componente                  |
|----------------------|-----------------------------|
| `header`             | [IconCard](./icon-card.md)  |
| `header.icon`        | [IconCard](./icon-card.md)  |
| `header.color`       | [IconCard](./icon-card.md)  |
| `header.position`    | [IconCard](./icon-card.md)  |
| `header.gap`         | [IconCard](./icon-card.md)  |
| `header.weight`      | [IconCard](./icon-card.md)  |
| `header.inline`      | [IconCard](./icon-card.md)  |