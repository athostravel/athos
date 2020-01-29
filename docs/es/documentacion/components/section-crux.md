# SectionCrux

<Preview>
  <template slot="demo">
    <components-SectionCrux-SectionCrux />
  </template>

  <<< @/examples/components/SectionCrux/SectionCrux.vue
</Preview>

## Propiedades

| Nombre  | Tipo    | Descripción                                                      | Por defecto |
|---------|---------|------------------------------------------------------------------|-------------|
| `items` | `Array` | Array de objetos con la información de cada item [Tip](./tip.md) | `[]`        |

## Configuración por defecto

```js
{
    container: {},
    section: {},
    tips: {
        horizontal: true,
        gap: 'coal',
        tip: {}
    }
}
```

### Referencias

| Clave       | Componente                  |
|-------------|-----------------------------|
| `container` | [Container](./container.md) |
| `section`   | [Section](./section.md)     |
| `tips`      | [Tips](./tips.md)           |
| `tips.tip`  | [Tip](./tip.md)             |