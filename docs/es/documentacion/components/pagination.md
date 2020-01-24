# Pagination

<Preview>
  <template slot="demo">
    <components-Pagination-Pagination />
  </template>
  
  <<< @/examples/components/Pagination/Pagination.vue
</Preview>
  
## Propiedades

| Nombre          | Tipo                | Descripción                                  | Por defecto |
|-----------------|---------------------|----------------------------------------------|-------------|
| `navFirst`      | `String`, `Boolean` | Opción para navegar a la primera página      | `false`     |
| `navLast`       | `String`, `Boolean` | Opción para navegar a la última página       | `false`     |
| `pages`         | `Array`             | Enlaces a mostrar en la páginación           | `[]`        |

### Configuración por defecto

```js
{
    navFirst: {
        type: [String, Boolean],
        default: false
    },
    navLast: {
        type: [String, Boolean],
        default: false
    },
    pages: {
        type: Array,
        default: () => []
    }
}
```

#### Referencias

| Clave              | Componente             |
|--------------------|------------------------|
| `navFirst.icon`    | [Icon](./icon.md)      |
| `navLast.icon`     | [Icon](./icon.md)      |
