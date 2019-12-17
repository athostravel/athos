<template>
    <source
        :srcset="shim"
        :data-src="srcset"
        :media="`(min-width: ${media})`"
    >
</template>

<script>
    export default {
        name: 'AtPictureSource',
        props: {
            srcset: {
                type: String,
                default: ''
            },
            media: {
                type: String,
                default: undefined
            },
            lazy: {
                type: Boolean,
                default: true
            },
            shim: {
                type: String,
                default: undefined
            }
        }
    }
</script>
