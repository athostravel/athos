
# Instalación

Actualmente dispones de dos maneras de usar Athos:

## CDN

Comienza un proyecto rápidamente usando un CDN y deja que Athos haga la magia.

```html
!DOCTYPE html>
<html>
<head>
    <link href="https://unpkg.com/athos/dist/css/athos.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
    <div id="app">
        <at-button>Hello World</at-button>
    </div>

    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/athos/dist/athos.min.js"></script>
    <script>
        new Vue({
            el: '#app'
        })
    </script>
</body>
</html>
```

## NPM

```bash
npm install athos --save-dev
```

Una vez instalado:

```js
import Vue from 'vue'
import App from './App.vue'
import Athos from 'athos'
import 'athos/dist/css/athos.css'

Vue.config.productionTip = false
Vue.use(Athos)

new Vue({
  render: h => h(App),
}).$mount('#app')
```