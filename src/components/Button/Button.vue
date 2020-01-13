<template>
    <component
        :is="tag"
        class="c-button"
        :href="tag === 'a' && href"
        :class="{
            'c-button--outlined' : outlined,
            'c-button--bordered' : bordered,
            'c-button--rounded' : rounded,
            'c-button--radiused' : radiused,
            'c-button--filled' : filled,
            'c-button--icon' : icon,
            'c-button--is-disabled' : disabled,
            'c-button--primary' : color === 'primary',
            'c-button--secondary' : color === 'secondary',
            'c-button--diorite' : size === 'diorite',
            'c-button--basalt' : size === 'basalt',
            'c-button--obsidian' : size === 'obsidian',
            'c-button--tuff' : size === 'tuff'
        }"
        :disabled="tag === 'button' && disabled"
    >
        <span class="c-button__content">
            <span class="c-button__box">
                <slot />
            </span>
        </span>
    </component>
</template>

<script>
    import Icon from '@components/Icon/Icon.vue'

    export default {
        name: 'AtButton',
        components: {
            Icon
        },
        props: {
            tag: {
                type: String,
                default: 'a'
            },
            href: {
                type: String,
                default: '#'
            },
            outlined: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: false
            },
            rounded: {
                type: Boolean,
                default: false
            },
            radiused: {
                type: Boolean,
                default: false
            },
            icon: {
                type: Boolean,
                default: false
            },
            filled: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: undefined
            },
            size: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .c-button {
    --c-button-size: #{em(16px)};
    --c-button-text-align: center;
    --c-button-font-size: #{em(16px)};
    --c-button-font-weight: 400;
    --c-button-text-transform: uppercase;
    --c-button-padding: #{em(8px) em(16px)};
    --c-button-border-radius: 0;
    --c-button-border-style: solid;
    --c-button-border-width: 1px;
    --c-button-min-height: #{em(40px)};
    --c-button-min-width: var(--c-button-min-height);
    --c-button-inner-padding: 0;
    --c-button-inner-border-radius: 0;
    --c-button-overlay-start-width: 104%;

    // Colors
    --c-button-color: var(--color-neutral);
    --c-button-background-color: transparent;
    --c-button-border-color: transparent;
    --c-button-overlay-color: hsl(var(--color-neutral-hue), var(--color-neutral-saturation), 95%);

    // Colors Hover
    --c-button-color-hover: var(--color-neutral);
    --c-button-background-color-hover: transparent;
    --c-button-border-color-hover: transparent;
  }
</style>

<style lang="scss" scoped>
  @mixin c-button-hover($this) {
    &:active:not(:disabled):not(#{$this}--is-disabled),
    &:focus:not(:disabled):not(#{$this}--is-disabled),
    &:hover:not(:disabled):not(#{$this}--is-disabled) {
      @content;
    }
  }

  .c-button {
    $this: &;

    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    font-size: var(--c-button-size);
    border-style: var(--c-button-border-style);
    border-width: var(--c-button-border-width);
    border-color: var(--c-button-border-color);
    border-radius: var(--c-button-border-radius);
    min-height: var(--c-button-min-height);
    min-width: var(--c-button-min-width);
    padding: var(--c-button-inner-padding);

    &__content {
      flex-grow: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: var(--c-button-color);
      text-align: var(--c-button-text-align);
      background-color: var(--c-button-background-color);
      text-transform: var(--c-button-text-transform);
      padding: var(--c-button-padding);
      font-weight: var(--c-button-font-weight);
      border-radius: var(--c-button-inner-border-radius);
      z-index: 1;
      transition: all 0.3s;

      &::before {
        content: "";
        display: block;
        left: 50%;
        top: 50%;
        width: var(--c-button-overlay-start-width);
        height: 104%;
        transform: translate(-50%, -50%);
        position: absolute;
        opacity: 0;
        z-index: 2;
        transition: all 0.3s;
        background-color: var(--c-button-overlay-color);
      }
    }

    &__box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 3;
      font-size: var(--c-button-font-size);
    }

    @include c-button-hover($this) {
      border-color: var(--c-button-border-color-hover);

      #{$this}__content {
        color: var(--c-button-color-hover);
        background-color: var(--c-button-background-color-hover);

        &::before {
          width: 104%;
          opacity: 1;
        }
      }
    }

    &--is-disabled,
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    // Colors
    &--primary {
      --c-button-color: var(--color-primary);
      --c-button-color-hover: var(--color-primary);
      --c-button-overlay-color: hsl(var(--color-primary-hue), var(--color-primary-saturation), 95%);
      --c-button-border-color-hover: var(--c-button-overlay-color);
    }

    // Types
    &--filled {
      --c-button-background-color: red;
    }

    &--outlined {
      --c-button-overlay-start-width: 0;
      --c-button-color-hover: var(--color-shade-0);
      --c-button-border-color: var(--c-button-color);
      --c-button-border-color-hover: var(--c-button-color);
      --c-button-overlay-color: var(--c-button-color);
    }

    &--rounded {
      --c-button-border-radius: calc(var(--c-button-min-height) / 2);
    }

    // Sizes
    &--diorite {
      --c-button-size: #{em(12px)};
    }

    &--basalt {
      --c-button-size: #{em(14px)};
    }

    &--obsidian {
      --c-button-size: #{em(18px)};
    }

    &--tuff {
      --c-button-size: #{em(20px)};
    }
  }
</style>
