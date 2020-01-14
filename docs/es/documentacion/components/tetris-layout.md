# Tetris Layout

<Preview>
  <template slot="demo">
    <components-TetrisLayout-TetrisLayout />
  </template>
  
  <<< @/examples/components/TetrisLayout/TetrisLayout.vue
</Preview>
  
## Propiedades

| Nombre     | Tipo               | Descripción                        | Por defecto |
|------------|--------------------|------------------------------------|-------------|
| `tag`      | `String`           | Etiqueta HTML del componente       | `a`         |
| `href`     | `String`           | Enlace del botón                   | `#`         |
| `text`     | `String`           | Añade un texto pequeño             | `Desde`     |
| `before`   | `String`           | Añade un precio anterior al actual | `undefined` |
| `value`    | `String`, `Number` | Valor del precio                   | `undefined` |
| `inverted` | `Boolean`          | Invierte el botón con la caja      | `false`     |

### Configuración por defecto

```js
{
    button: {
        tag: 'div',
        color: 'secondary'
    },
    icon: {
        icon: 'angle-right'
    }
}
```

#### Referencias

| Clave    | Componente            |
|----------|-----------------------|
| `button` | [Button](./button.md) |
| `icon`   | [Icon](./icon.md)     |