<template>
    <component
        :is="tag"
        class="c-icon"
        :class="icon && `c-icon--${icon}`"
    >
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
    --c-icon-size: 1em;
    --c-icon-font-family: var(--font-family-icons);
    --c-icon-color: currentColor;
  }
</style>

<style lang="scss" scoped>
  .c-icon {
    display: inline-block;
    font-family: var(--c-icon-font-family) !important; /* Important is necessary */
    color: var(--c-icon-color);
    font-size: var(--c-icon-size);

    &--tiny {
      --c-icon-size: 0.6668em;
    }

    &--small {
      --c-icon-size: 0.8336em;
    }

    &--medium {
      --c-icon-size: 1.1668em;
    }

    &--large {
      --c-icon-size: 1.3334em;
    }
  }
</style>
