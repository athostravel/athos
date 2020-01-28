# Icon

<Preview>
  <template slot="demo">
    <components-Icon-Icon /> 
  </template>

  <<< @/examples/components/Icon/Icon.vue
</Preview>

## Propiedades

| Nombre  | Tipo                | Parámetros                                                               | Descripción                  | Por defecto |
|---------|---------------------|--------------------------------------------------------------------------|------------------------------|-------------|
| `tag`   | `String`            |                                                                          | Etiqueta HTML del componente | `span`      |
| `icon`  | `String`, `Boolean` |                                                                          | Clase del icono a mostrar    | `false`     |
| `size`  | `String`            | `diorite`, `basalt`, `obsidian`, `tuff`, `pumice`                        | Tamaño del icono             | `undefined` |
| `color` | `String`            | [Nombre de clases disponibles](../estilos/clases-de-utilidad/colores.md) | Color del icono              | `undefined` |