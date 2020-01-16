<template>
    <component
        :is="tag"
        :class="{ 'c-text--has-bg': background }"
        class="c-text"
    >
        <span class="c-text__content">
            {{ text }}
        </span>
    </component>
</template>

<script>
    export default {
        name: 'AtText',
        props: {
            tag: {
                type: String,
                default: 'p'
            },
            background: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .c-text {
    --c-text-background: var(--color-shade-0);
    --c-text-padding: 0.5em;
    --c-text-color: currentColor;
    --c-text-font-size: 1em;
    --c-text-line-height: 1.4;
    --c-text-font-weight: 400;
  }
</style>

<style lang="scss" scoped>
  .c-text {
    color: var(--c-text-color);

    &__content {
      font-weight: var(--c-text-font-weight);
      font-size: var(--c-text-font-size);
      line-height: var(--c-text-line-height);
    }

    &--has-bg {
      background: var(--c-text-background);
      padding: var(--c-text-padding);
    }
  }
</style>
