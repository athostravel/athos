# Heading

<Preview>
  <template slot="demo">
    <components-Heading-Heading />
  </template>

  <<< @/examples/components/Heading/Heading.vue
</Preview>

## Propiedades

| Nombre        | Tipo              | Descripción             | Por defecto |
|---------------|-------------------|-------------------------|-------------|
| `title`       | `String`          | Título del heading      | `undefined` |
| `description` | `String`, `Array` | Descripción del heading | `undefined` |

## Configuración por defecto

```js
{
    container: {},
    section: {
        title: {
            color: 'secondary'
        }
    }
}
```

### Referencias

| Clave                 | Componente                  |
|-----------------------|-----------------------------|
| `container`           | [Container](./container.md) |
| `section.title`       | [Text](./text.md)           |
| `section.description` | [Text](./text.md)           |