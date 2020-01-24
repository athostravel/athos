# Arcus

<Preview>
  <template slot="demo">
    <components-ArcusLayout-ArcusLayout />
  </template>
  
  <<< @/examples/components/ArcusLayout/ArcusLayout.vue
</Preview>

## Propiedades

| Nombre      | Tipo      | Descripción                                                             | Por defecto |
|-------------|-----------|-------------------------------------------------------------------------|-------------|
| `header`    | `Object`  | Propiedades del componente [Text](./text.md)                            | `{}`        |
| `meta`      | `Object`  | Propiedades del componente [Text](./text.md)                            | `{}`        |
| `items`     | `Array`   | Array con componentes [CardLeo](./card-leo.md)                          | `[]`        |
| `cards`     | `Array`   | Array con la configuración de los componentes [CardLeo](./card-leo.md)  | `[]`        |
| `component` | `Array`   | Nombre del componente a pintar                                          | `undefined` |
            
### Configuración por defecto
```js
{
    header: {
        color: 'primary',
        size: 'scoria',
        tag: 'h2',
        weight: 'bold'
    },
    title: {
        color: 'secondary',
        tag: 'h3',
        size: 'basalt',
        weight: 'bold'
    }
}
```

#### Referencias

| Clave              | Componente            |
|--------------------|-----------------------|
| `header`           | [Text](./text.md)     |
| `title`            | [Text](./text.md)     |
