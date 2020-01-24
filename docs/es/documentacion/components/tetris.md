# Tetris

<Preview>
  <template slot="demo">
    <components-Tetris-Tetris />
  </template>
  
  <<< @/examples/components/Tetris/Tetris.vue
</Preview>

## Propiedades

| Nombre    | Tipo     | Parámetros                                                            | Descripción                                      | Por defecto |
|-----------|----------|-----------------------------------------------------------------------|--------------------------------------------------|-------------|
| `items`   | `Array`  |                                                                       | Array de objetos con la información de cada item | `[]`        |
| `gap`     | `String` | [Nombre de clases disponibles](../estilos/clases-de-utilidad/gaps.md) | Separación entre items                           | `diorite`   |
| `variant` | `String` | `mosaic`                                                              | Cambia la disposición de los items               | `mosaic`    |