---
{
  "API": [
    {
      "title": "Propiedades",
      "items": [
        {
          "Nombre": "atSwitch",
          "Tipo": "Object",
          "Descripción": "Propiedades del componente Switch",
          "Por defecto": "empty"
        },
        {
          "Nombre": "checkedText",
          "Tipo": "String",
          "Descripción": "Texto a mostrar cuando el switch esté activo",
          "Por defecto": "Si"
        },
        {
          "Nombre": "uncheckedText",
          "Tipo": "String",
          "Descripción": "Texto a mostrar cuando el switch esté inactivo",
          "Por defecto": "No"
        }                
      ] 
    }
  ]
}
---

# Switch Orion

<Preview>
  <template slot="demo">
    <components-SwitchOrion-SwitchOrion />
  </template>
  
  <<< @/examples/components/SwitchOrion/SwitchOrion.vue
</Preview>

## Propiedades

| Nombre          | Tipo     | Descripción                                      | Por defecto |
|-----------------|----------|--------------------------------------------------|-------------|
| `checkedText`   | `String` | Texto a mostrar cuando el switch esté activo     | Si          |
| `uncheckedText` | `String` | Texto a mostrar cuando el switch esté inactivo   | No          |
| `atSwitch`      | `Object` | Propiedades del componente [Switch](./switch.md) | `empty`     |