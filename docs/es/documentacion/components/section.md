# Section

<Preview>
  <template slot="demo">
    <components-Section-Section />
  </template>

  <<< @/examples/components/Section/Section.vue
</Preview>

## Propiedades

| Nombre        | Tipo     | Parámetros | Descripción               | Por defecto |
|---------------|----------|------------|---------------------------|-------------|
| `title`       | `String` |            | Título de la sección      | `undefined` |
| `description` | `String` |            | Descripción de la sección | `undefined` |
| `border`      | `String` | `bottom`   | Añade borde a la sección  | `undefined` |

## Slots

| Nombre        | Descripción            | Por defecto                                                          |
|---------------|------------------------|----------------------------------------------------------------------|
| `default`     | Slot del contenido     |                                                                      |
| `title`       | Slot del título        | Componente [Text](./text.md) con el texto la propiedad `title`       |
| `description` | Slot de la descripción | Componente [Text](./text.md) con el texto la propiedad `description` |

## Configuración por defecto

```js
{
    title: {
        color: 'primary',
        weight: 'bold',
        size: 'coal',
        align: 'center'
    },
    description: {
        color: 'primary',
        weight: 'light',
        size: 'obsidian',
        align: 'center'
    }
}
```

### Referencias

| Clave         | Componente        |
|---------------|-------------------|
| `title`       | [Text](./text.md) |
| `description` | [Text](./text.md) |