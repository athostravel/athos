<template>
    <div class="c-switch">
        <input
            :id="idElement"
            class="c-switch__input"
            :type="type"
            :name="name"
            :required="required"
            :disabled="disabled"
            :value="value"
            :checked="checked"
        >
        <label class="c-switch__label" :for="idElement">
            <span class="c-switch__toggle"></span>
            <span v-if="$slots.checked" class="c-switch__checked">
                <slot name="checked" />
            </span>
            <span v-if="$slots.unchecked" class="c-switch__unchecked">
                <slot name="unchecked" />
            </span>
            <span v-if="label" class="c-switch__label-text">
                {{ label }}
            </span>
        </label>
    </div>
</template>

<script>
    import formControl from '@mixins/formControl'

    export default {
        name: 'AtSwitch',
        mixins: [formControl],
        props: {
            type: {
                type: String,
                default: 'checkbox'
            }
        }
    }
</script>

<style lang="scss">
  .c-switch {
    --c-switch-gap: 0.5em;
    --c-switch-font-size: 1em;
    --c-switch-line-height: 1.2;
    --c-switch-align: flex-start;
    --c-switch-toggle-size: 0.8336em;
    --c-switch-toggle-height: 1.5em;
    --c-switch-toggle-width: calc(var(--c-switch-toggle-height) * 2);
    --c-switch-toggle-radius: calc(var(--c-switch-toggle-height) / 2);
    --c-switch-toggle-background-color: var(--color-shade-600);
    --c-switch-toggle-dot-background-color: var(--color-shade-0);
    --c-switch-toggle-checked-background-color: var(--color-primary);
    --c-switch-toggle-dot-checked-background-color: var(--color-shade-0);
  }
</style>

<style lang="scss" scoped>
  .c-switch {
    $this: &;

    display: flex;

    &__input {
      cursor: pointer;
      opacity: 0;
      position: absolute;

      &:checked {
        & + #{$this}__label {
          #{$this} {
            &__checked {
              display: initial;
            }

            &__unchecked {
              display: none;
            }

            &__toggle {
              --c-switch-toggle-background-color: var(--c-switch-toggle-checked-background-color);

              &::before {
                --c-switch-toggle-dot-background-color: var(--c-switch-toggle-dot-checked-background-color);

                left: calc(100% - var(--c-switch-toggle-height));
              }
            }
          }
        }
      }

      &:disabled {
        & + #{$this}__label {
          opacity: 0.7;
          cursor: no-drop;
        }
      }
    }

    &__toggle {
      display: block;
      height: var(--c-switch-toggle-height);
      width: var(--c-switch-toggle-width);
      background-color: var(--c-switch-toggle-background-color);
      border-radius: var(--c-switch-toggle-radius);
      margin-right: var(--c-switch-gap);
      font-size: var(--c-switch-toggle-size);
      position: relative;
      box-shadow: inset 0 em(1px) em(3px) 0 rgba(0, 0, 0, 0.19);
      flex-shrink: 0;

      &::before {
        content: "";
        display: block;
        height: var(--c-switch-toggle-height);
        width: var(--c-switch-toggle-height);
        border-radius: var(--radius-circle);
        transform: scale(0.8) translateY(-50%);
        background-color: var(--c-switch-toggle-dot-background-color);
        transition: all 0.3s;
        position: absolute;
        left: 0;
        top: 50%;
        transform-origin: top;
      }
    }

    &__checked {
      display: none;
      line-height: var(--c-switch-line-height);
    }

    &__unchecked {
      line-height: var(--c-switch-line-height);
    }

    &__label {
      align-items: var(--c-switch-align);
      display: flex;
      cursor: pointer;

      &-text {
        flex: 1;
        font-size: var(--c-switch-font-size);
        line-height: var(--c-switch-line-height);
      }

      ::selection {
        background: transparent;
      }

      ::-moz-selection {
        background: transparent;
      }
    }
  }
</style>
