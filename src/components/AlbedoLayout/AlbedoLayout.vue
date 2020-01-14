<template>
    <component :is="layout.component">
        <router-view :layout.sync="layout.component"/>
    </component>
</template>

<script>
    export default {
        name: 'AtAlbedoLayout',
        data() {
            return {
                layout: {
                    component: 'AtCardAries'
                }
            }
        }
    }
</script>