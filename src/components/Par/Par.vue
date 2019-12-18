<template>
    <component
        :is="tag"
        :class="{'c-par--has-bg': background}"
        class="c-par"
    >
        <span class="c-par__text">
            {{ text }}
        </span>
    </component>
</template>

<style lang="scss">
  :root {
    --c-par-background: #c6c6c6;
    --c-par-padding: 0.5em;
    --c-par-color: currentColor;
    --c-par-font-size: 1em;
    --c-par-margin: 0;
    --c-par-line-height: 1.4;
    --c-par-font-weight: 400;
  }
</style>

<style scoped lang="scss">
  .c-par {
    color: var(--c-par-color);
    margin: var(--c-par-margin);

    &__text {
      font-weight: var(--c-par-font-weight);
      font-size: var(--c-par-font-size);
      line-height: var(--c-par-line-height);
    }

    &--has-bg {
      background: var(--c-par-background);
      padding: var(--c-par-padding);
    }
  }
</style>

<script>
    export default {
        name: 'AtPar',
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
                default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        }
    }
</script>
