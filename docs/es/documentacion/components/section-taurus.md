# Section Taurus

<Preview>
  <template slot="demo">
    <components-SectionTaurus-SectionTaurus />
  </template>

  <<< @/examples/components/SectionTaurus/SectionTaurus.vue
</Preview>

## Propiedades

| Nombre        | Tipo     | Descripción                                      | Por defecto |
|---------------|----------|--------------------------------------------------|-------------|
| `title`       | `String` | Título de la sección                             | `undefined` |
| `description` | `String` | Descripción de la sección                        | `undefined` |
| `items`       | `Array`  | Array de objetos con la información de cada item | `[]`        |

## Configuración por defecto

```js
{
    container: {},
    section: {},
    lists: [],
    list: {}
}
```

### Referencias

| Clave            | Componente                   |
|------------------|------------------------------|
| `container`      | [Container](./container.md)  |
| `section`        | [Section](./section.md)      |
| `lists`          | [ListAries](./list-aries.md) |
| `list`           | [ListAries](./list-aries.md) |
| `list.cardAries` | [CardAries](./card-aries.md) |