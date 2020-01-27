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
| `header`  | `Object` | Propiedades del componente [Text](./text.md)           |                            | `undefined` |
| `Icon`    | `Object` | Propiedades del componente [Icon](./icon.md)           |                            | `undefined` |
| `content` | `Object` | Contenido dentro del slot del collapse                 |                            | `undefined` |
| `align`   | `String` | Colocación del texto de la cabecera del collapse       | `left`, `right`, `center`  | `left`      |

## Slots

| Nombre    | Descripción                     |
|-----------|---------------------------------|
| `icon`    | Slot del icono del collapse     |
| `default` | Slot del contenido del collapse |

### Configuración por defecto

```js
{
    header: {
        position: 'right',
        gap: 'dunite',
        inline: true
    },
    title: {
        color: 'primary',
        position: 'right',
        weight: 'bold'
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