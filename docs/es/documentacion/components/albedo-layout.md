# Albedo

<Preview>
  <template slot="demo">
    <components-AlbedoLayout-AlbedoLayout />
  </template>
  
  <<< @/examples/components/AlbedoLayout/AlbedoLayout.vue
</Preview>

## Propiedades

| Nombre      | Tipo      | Descripción                                     | Por defecto |
|-------------|-----------|-------------------------------------------------|-------------|
| `header`    | `Object`  | Propiedades del componente [Text](./text.md)    | `{}`        |
| `meta`      | `Object`  | Propiedades del componente [Text](./text.md)    | `{}`        |
| `items`     | `Array`   | Array con componentes [CardLeo](./card-leo.md)  | `[]`        |
| `component` | `Array`   | Nombre del componente a pintar                  | `undefined` |
            
### Configuración por defecto
```js
{
    header: {
        tag: 'h2',
        color: 'primary'
    },
    title: {
        tag: 'h3',
        color: 'secondary'
    }
}
```

#### Referencias

| Clave              | Componente            |
|--------------------|-----------------------|
| `header`           | [Text](./text.md)     |
| `title`            | [Text](./text.md)     |
