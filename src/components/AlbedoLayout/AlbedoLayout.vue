<template>
    <component :is="components.component">
        <div>
            <router-view :components.sync="components.component" />
        </div>
    </component>
</template>

<script>
    export default {
        name: 'AtAlbedoLayout',
        data() {
            return {
                components: {
                    component: 'AtCardAries'
                }
            }
        }
    }
</script>