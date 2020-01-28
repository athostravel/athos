# Tip

<Preview>
  <template slot="demo">
    <components-Tip-Tip />
  </template>

  <<< @/examples/components/Tip/Tip.vue
</Preview>

## Propiedades

| Nombre        | Tipo     | Descripción               | Por defecto |
|---------------|----------|---------------------------|-------------|
| `icon`        | `String` | Clase del icono a mostrar | `undefined` |
| `title`       | `String` | Título del tip            | `undefined` |
| `description` | `String` | Descripción del tip       | `undefined` |

## Slots

| Nombre        | Descripción            | Por defecto                                                          |
|---------------|------------------------|----------------------------------------------------------------------|
| `title`       | Slot del título        | Componente [Text](./text.md) con el texto la propiedad `title`       |
| `description` | Slot de la descripción | Componente [Text](./text.md) con el texto la propiedad `description` |

## Configuración por defecto

```js
{
    iconCard: {
        gap: 'diorite',
        icon: {
            size: 'pumice',
            color: 'secondary'
        }
    },
    title: {
        color: 'primary',
        size: 'diorite',
        weight: 'bold'
    },
    description: {
        color: 'primary',
        size: 'dacite'
    }
}
```

### Referencias

| Clave           | Componente                |
|-----------------|---------------------------|
| `iconCard`      | [IconCard](./iconCard.md) |
| `iconCard.icon` | [Icon](./icon.md)         |
| `title`         | [Text](./text.md)         |
| `description`   | [Text](./text.md)         |