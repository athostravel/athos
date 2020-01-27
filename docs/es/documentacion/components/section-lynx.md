# SectionLynx

<Preview>
  <template slot="demo">
    <components-SectionLynx-SectionLynx />
  </template>

  <<< @/examples/components/SectionLynx/SectionLynx.vue
</Preview>

## Propiedades

| Nombre  | Tipo     | Parámetros | Descripción                                      | Por defecto |
|---------|----------|------------|--------------------------------------------------|-------------|
| `title` | `String` |            | Título de la sección                             | `undefined` |
| `items` | `Array`  |            | Array de objetos con la información de cada item | `[]`        |

### Configuración por defecto

```js
{
    section: {
        border: 'bottom'
    },
    title: {
        color: 'primary',
        weight: 'bold',
        size: 'coal',
        align: 'center'
    },
    tetris: {}
}
```

#### Referencias

| Clave     | Componente              |
|-----------|-------------------------|
| `section` | [Section](./section.md) |
| `title`   | [Text](./text.md)       |
| `tetris`  | [Tetris](./tetris.md)   |