<template>
    <component
        :is="tag"
        :class="{'c-paragraph--has-bg': background}"
        class="c-paragraph"
    >
        <span class="c-paragraph__text">
            {{ text }}
        </span>
    </component>
</template>

<style lang="scss">
  .c-paragraph {
    --c-paragraph-background: none;
    --c-paragraph-padding: 0.5em;
    --c-paragraph-color: currentColor;
    --c-paragraph-font-size: 1em;
    --c-paragraph-margin: 0;
    --c-paragraph-line-height: 1.4;
    --c-paragraph-font-weight: 400;
  }
</style>

<style scoped lang="scss">
  .c-paragraph {
    color: var(--c-paragraph-color);
    margin: var(--c-paragraph-margin);
    background-color: var(--c-paragraph-background);

    &__text {
      font-weight: var(--c-paragraph-font-weight);
      font-size: var(--c-paragraph-font-size);
      line-height: var(--c-paragraph-line-height);
    }

    &--has-bg {
      background: var(--c-paragraph-background);
      padding: var(--c-paragraph-padding);
    }
  }
</style>

<script>
    export default {
        name: 'AtParagraph',
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
