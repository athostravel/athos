<template>
    <component
        :is="tag"
        class="c-button"
        :href="tag === 'a' && href"
        :class="{
            'c-button--outlined' : variant === 'outlined',
            'c-button--bordered' : variant === 'bordered',
            'c-button--text' : variant === 'text',
            'c-button--casper' : variant === 'casper',
            'c-button--ghost' : variant === 'ghost',
            'c-button--rounded' : rounded,
            'c-button--radiused' : radiused,
            'c-button--icon' : icon,
            'c-button--is-disabled' : disabled,
            'c-button--white' : color === 'white',
            'c-button--primary' : color === 'primary',
            'c-button--secondary' : color === 'secondary',
            'c-button--dunite' : size === 'dunite',
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
            variant: {
                type: String,
                default: undefined
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
    --c-button-text-transform: uppercase;
    --c-button-padding: #{rem(4px) em(16px)};
    --c-button-border-radius: 0;
    --c-button-border-style: solid;
    --c-button-border-width: 0;
    --c-button-min-height: #{em(40px)};
    --c-button-min-width: var(--c-button-min-height);
    --c-button-inner-padding: 0;
    --c-button-inner-border-radius: 0;
    --c-button-overlay-start-width: 0;

    // Colors
    --c-button-main-color: var(--color-neutral);
    --c-button-main-color-hue: var(--color-neutral-hue);
    --c-button-main-color-saturation: var(--color-neutral-saturation);
    --c-button-secondary-color: var(--color-shade-0);

    // Set colors
    --c-button-color: var(--c-button-secondary-color);
    --c-button-background-color: var(--c-button-main-color);
    --c-button-border-color: var(--c-button-main-color);
    --c-button-overlay-color: hsla(var(--color-shade-0-hsl), 0.2);

    // Colors Hover
    --c-button-color-hover: var(--c-button-color);
    --c-button-background-color-hover: var(--c-button-main-color);
    --c-button-border-color-hover: var(--c-button-main-color);
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
      overflow: hidden;
      color: var(--c-button-color);
      text-align: var(--c-button-text-align);
      background-color: var(--c-button-background-color);
      text-transform: var(--c-button-text-transform);
      padding: var(--c-button-padding);
      border-radius: var(--c-button-inner-border-radius);
      z-index: 1;
      transition: all 0.3s;

      &::before {
        content: "";
        display: block;
        left: 50%;
        top: 50%;
        width: var(--c-button-overlay-start-width);
        height: 120%;
        transform: translate(-50%, -50%);
        position: absolute;
        opacity: var(--c-button-overlay-opacity, 0);
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
    }

    @include c-button-hover($this) {
      border-color: var(--c-button-border-color-hover);

      #{$this}__content {
        color: var(--c-button-color-hover);
        background-color: var(--c-button-background-color-hover);

        &::before {
          opacity: var(--c-button-overlay-opacity-hover, 1);
          width: 120%;
        }
      }
    }

    &--is-disabled,
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    // Colors
    &--white {
      --c-button-main-color: var(--color-shade-0);
      --c-button-main-color-hue: var(--color-shade-0-hue);
      --c-button-main-color-saturation: var(--color-shade-0-saturation);
      --c-button-secondary-color: currentColor;
      --c-button-main-color-lumnosity: 70%;
    }

    &--primary {
      --c-button-main-color: var(--color-primary);
      --c-button-main-color-hue: var(--color-primary-hue);
      --c-button-main-color-saturation: var(--color-primary-saturation);
    }

    &--secondary {
      --c-button-main-color: var(--color-secondary);
      --c-button-main-color-hue: var(--color-secondary-hue);
      --c-button-main-color-saturation: var(--color-secondary-saturation);
    }

    // Types
    &--text {
      // Colors
      --c-button-secondary-color: var(--c-button-main-color);
      --c-button-background-color: transparent;
      --c-button-border-color: transparent;
      --c-button-overlay-color: hsl(var(--c-button-main-color-hue), var(--c-button-main-color-saturation), var(--c-button-main-color-lumnosity, 95%));

      // Colors Hover
      --c-button-color-hover: var(--c-button-secondary-color);
      --c-button-background-color-hover: transparent;
      --c-button-border-color-hover: var(--c-button-overlay-color);
    }

    &--outlined {
      --c-button-border-width: #{rem(1px)};
      --c-button-background-color: transparent;
      --c-button-background-color-hover: transparent;
      --c-button-color: var(--c-button-main-color);
      --c-button-overlay-color: var(--c-button-main-color);
      --c-button-color-hover: var(--c-button-secondary-color);
    }

    &--bordered {
      --c-button-border-width: #{rem(1px)};
      --c-button-inner-padding: #{rem(2px)};
      --c-button-background-color: var(--c-button-main-color);
      --c-button-background-color-hover: var(--c-button-main-color);
    }

    &--casper {
      --c-button-border-width: #{rem(1px)};
      --c-button-background-color: transparent;
      --c-button-background-color-hover: transparent;
      --c-button-color: var(--c-button-main-color);
      --c-button-overlay-color: hsla(var(--color-shade-0-hsl), 0.5);
    }

    &--ghost {
      --c-button-color: var(--c-button-main-color);
      --c-button-background-color: hsla(var(--color-shade-0-hsl), 0.8);
      --c-button-background-color-hover: hsla(var(--color-shade-0-hsl), 0.8);
      --c-button-overlay-color: hsla(var(--color-shade-0-hsl), 1);
    }

    &--radiused {
      --c-button-border-radius: var(--radius-s);
      --c-button-inner-border-radius: calc(var(--radius-s) / 2);
    }

    &--rounded {
      --c-button-border-radius: calc(var(--c-button-min-height) / 2);
      --c-button-inner-border-radius: calc(var(--c-button-min-height) / 2);
    }

    &--icon {
      --c-button-padding: #{em(4px)};
    }

    // Sizes
    &--dunite {
      --c-button-size: #{em(10px)};
      --c-button-min-height: #{em(28px, 10px)};
    }

    &--diorite {
      --c-button-size: #{em(12px)};
      --c-button-min-height: #{em(32px, 12px)};
    }

    &--basalt {
      --c-button-size: #{em(14px)};
      --c-button-min-height: #{em(36px, 14px)};
    }

    &--obsidian {
      --c-button-size: #{em(18px)};
      --c-button-min-height: #{em(44px, 18px)};
    }

    &--tuff {
      --c-button-size: #{em(20px)};
      --c-button-min-height: #{em(48px, 20px)};
    }
  }
</style>
