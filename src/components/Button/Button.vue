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
            'c-button--is-disabled' : disabled,
            'c-button--primary' : color === 'primary',
            'c-button--secondary' : color === 'secondary',
            'c-button--tiny' : size === 'tiny',
            'c-button--small' : size === 'small',
            'c-button--medium' : size === 'medium',
            'c-button--large' : size === 'large'
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
    --c-button-background-color: var(--color-shade-1000);
    --c-button-color: var(--color-shade-0);
    --c-button-font-size: #{em(16px)};
    --c-button-font-weight: 400;
    --c-button-text-transform: uppercase;
    --c-button-padding: #{em(8px) em(16px)};
    --c-button-border-radius: 0;
    --c-button-border-style: solid;
    --c-button-border-width: 0;
    --c-button-border-color: var(--c-button-background-color);
    --c-button-min-height: #{em(48px)};
    --c-button-min-width: var(--c-button-min-height);
    --c-button-inner-padding: 0;
    --c-button-inner-border-radius: 0;
    --c-button-overlay-color: hsla(var(--color-shade-0-hsl), 0.2);
  }
</style>

<style lang="scss" scoped>
  @mixin c-button-hover($this) {
    #{$this}--is-active:not(:disabled):not(#{$this}--is-disabled),
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
      font-size: var(--c-button-font-size);
      font-weight: var(--c-button-font-weight);
      border-radius: var(--c-button-inner-border-radius);
      z-index: 1;
      transition: all 0.3s;

      &::before {
        content: "";
        display: block;
        left: 50%;
        top: 50%;
        width: 0;
        height: 100%;
        transform: translate(-50%, -50%);
        position: absolute;
        opacity: 1;
        z-index: 2;
        transition: all 0.3s;
        background-color: var(--c-button-overlay-color);
      }
    }

    &__box {
      position: relative;
      z-index: 3;
    }

    @include c-button-hover($this) {
      #{$this}__content {
        &::before {
          width: 102%;
          height: 102%;
        }
      }
    }

    &--outlined {
      --c-button-color: var(--color-shade-1000);
      --c-button-border-color: var(--color-shade-1000);
      --c-button-background-color: transparent;
      --c-button-overlay-color: var(--color-shade-1000);
      --c-button-border-width: #{em(1px)};

      @include c-button-hover($this) {
        --c-button-color: var(--color-shade-0);
      }
    }

    &--radiused {
      --c-button-border-radius: #{em(4px)};
    }

    &--bordered {
      --c-button-border-width: #{em(1px)};
      --c-button-inner-padding: #{em(4px)};
    }

    &--rounded {
      --c-button-border-radius: calc(var(--c-button-min-height) / 2);
      --c-button-inner-border-radius: calc(var(--c-button-min-height) / 2);
    }

    &--is-disabled,
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &--primary {
      --c-button-background-color: var(--color-primary);
      --c-button-color: var(--color-shade-0);

      &#{$this} {
        &--outlined {
          --c-button-background-color: transparent;
          --c-button-color: var(--color-primary);
          --c-button-border-color: var(--color-primary);
          --c-button-overlay-color: var(--color-primary);
        }
      }
    }

    &--secondary {
      --c-button-background-color: var(--color-secondary);
      --c-button-color: var(--color-shade-0);

      &#{$this} {
        &--outlined {
          --c-button-background-color: transparent;
          --c-button-color: var(--color-secondary);
          --c-button-border-color: var(--color-secondary);
          --c-button-overlay-color: var(--color-secondary);
        }
      }
    }

    &--tiny {
      --c-button-size: 0.6668em;
    }

    &--small {
      --c-button-size: 0.8336em;
    }

    &--medium {
      --c-button-size: 1.1668em;
    }

    &--large {
      --c-button-size: 1.3334em;
    }
  }
</style>
