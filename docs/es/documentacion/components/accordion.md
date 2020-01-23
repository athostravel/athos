# Accordion Component

<Preview>
  <template slot="demo">
    <components-Accordion-Accordion />
  </template>
  
  <<< @/examples/components/Accordion/Accordion.vue
</Preview>

## Propiedades

| Nombre    | Tipo     | Descripción                                                 | Por defecto |
|-----------|----------|-------------------------------------------------------------|-------------|
| `header`  | `Object` | Url del botón                                               | `undefined` |
| `content` | `Object` | Texto                                                       | `undefined` |

## Slots

| Nombre    | Descripción        |
|-----------|--------------------|
| `default` | Slot del contenido |

### Configuración por defecto

```js
{
  header: {
      icon: 'heart',
      color: 'primary',
      position: 'right',
      gap: 'dunite',
      weight: 'bold',
      inline: true
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