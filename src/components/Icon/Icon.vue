<template>
    <component :is="tag" class="c-icon" :class="icon && `c-icon--${icon}`">
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'AtIcon',
        props: {
            icon: {
                type: [String, Boolean],
                default: false
            },
            tag: {
                type: String,
                default: 'span'
            }
        }
    }
</script>

<style lang="scss">
  .c-icon {
    --c-icon-font-family: var(--font-family-icons);
  }
</style>

<style lang="scss" scoped>
  .c-icon {
    display: inline-block;
    font-family: var(--c-icon-font-family) !important;
  }
</style>
