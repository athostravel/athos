# Crear un componente

Para crear un componente (se aplica también a páginas y layouts) deberemos seguir la siguiente estructura:

```
├── src
│   ├── components
│   │   └── MyComponent
│   │   │   ├── MyComponent.vue
│   │   │   └── index.js
│   ├── layouts
│   │   └── MyLayout
│   │   │   ├── MyLayout.vue
│   │   │   └── index.js
│   ├── pages
│   │   └── MyPage
│   │   │   ├── MyPage.vue
│   │   │   └── index.js
│   ├── ...
```

::: tip
Cuando nos referimos a componentes también estamos hablando de páginas y layouts. Todo son componentes, pero es una manera de categorizarlos.
:::

## Preparar el componente para la librería

Una vez creados los archivos deberemos preparar el componente para ser exportado en la librería. Para ello en el `index.js` añadimos:

```js
import MyComponent from './MyComponent.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, MyComponent)
    }
}

use(Plugin)

export default Plugin
```

También tendremos que importar y exportar este `index.js` al `index.js` correspondiente de la carpeta padre, en este caso estaría en `src/components/index.js`. Podemos hacerlo de la siguiente manera:

```js
export { default as MyComponent } from '@components/MyComponent'
```

### Componentes anidados

En el caso que necesitemos crear un componente que a su vez necesite de otro pero el conjunto se considera como uno seguiremos la siguiente estructura:

```
├── src
│   ├── components
│   │   └── Tabs
│   │   │   ├── Tab.vue
│   │   │   ├── Tabs.vue
│   │   │   └── index.js
│   ├── ...
```

A la hora de exportarlo en el `index.js` sería suficiente añadir otro `registerComponent`:

```js
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Tab)
        registerComponent(Vue, Tabs)
    }
}

use(Plugin)

export default Plugin
```

## Plantilla del componente

El archivo `.vue` seguiría este formato:

```vue
<template>
    <div class="c-my-component">
        <!-- Code -->
    </div>
</template>

<script>
    export default {
        name: 'AtMyComponent'
    }
</script>

<style lang="scss">
  .c-my-component {
    --c-my-component-color: var(--color-primary);
  }
</style>

<style lang="scss" scoped>
  .c-my-component {
    color: var(--c-my-component-color);
  }
</style>
```

- Todos los componentes deberán llevar un `name` en formato CamelCase empezando por `At` y seguido por el nombre del componente.
- Todas las clases para los componentes deberán empezar por `c-` seguido del nombre. Todo minúsculas y con guiones medios.
- En caso de usar variables, deberá haber dos `styles`. En el primero irá la clase del componente con las variables locales sin el atributo `scope` y en el segundo los estilos del componente con el atributo `scope`.
- Los nombres de las variables deberán empezar por `c-` seguido de nombre del componente, seguido de la propiedad de css que aplicará.  