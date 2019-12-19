<template>
    <component
        :is="tag"
        class="c-icon"
        :class="
            [
                icon && `c-icon--${icon}`,
                {'c-icon--rounded': rounded},
                {'c-icon--has-bg': background}
            ]
        "
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
            },
            background: {
                type: Boolean,
                default: false
            },
            rounded: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  .c-icon {
    --c-icon-font-family: var(--font-family-icons);
    --c-icon-radius: var(--radius-circle);
    --c-icon-background: var(--color-primary);
    --c-icon-has-bg-color: #fff;
    --c-icon-color: currentColor;
    --c-icon-padding: #{em(8px)};
  }
</style>

<style lang="scss" scoped>
  .c-icon {
    display: inline-block;
    font-family: var(--c-icon-font-family) !important;
    color: var(--c-icon-color);

    &--has-bg {
      background-color: var(--c-icon-background);
      padding: var(--c-icon-padding);
      color: var(--c-icon-has-bg-color);
    }

    &--rounded {
      border-radius: var(--c-icon-radius);
    }
  }
</style>
