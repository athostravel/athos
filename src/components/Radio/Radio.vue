<template>
    <div class="c-radio">
        <input
            :id="idElement"
            class="c-radio__input"
            :type="type"
            :name="name"
            :required="required"
            :disabled="disabled"
            :value="value"
            :checked="checked"
        >
        <label v-if="label" class="c-radio__label" :for="idElement">
            <span class="c-radio__label-text">
                {{ label }}
            </span>
        </label>
    </div>
</template>

<script>
    import formControl from '@mixins/formControl'

    export default {
        name: 'AtRadio',
        mixins: [formControl],
        props: {
            type: {
                type: String,
                default: 'radio'
            }
        }
    }
</script>

<style lang="scss">
  .c-radio {
    --c-radio-gap: 0.5em;
    --c-radio-box-size: 0.8336em;
    --c-radio-width: 1.5em;
    --c-radio-height: 1.5em;
    --c-radio-align: flex-start;
    --c-radio-font-size: 1em;
    --c-radio-line-height: 1.2;
    --c-radio-input-border: #{em(1px)} solid var(--color-shade-400);
    --c-radio-input-background: var(--color-shade-0);
    --c-radio-input-radius: var(--radius-circle);
    --c-radio-input-checked-background: var(--color-primary);
    --c-radio-input-checked-border: #{em(1px)} solid var(--color-primary);
  }
</style>

<style lang="scss" scoped>
  .c-radio {
    $this: &;

    display: flex;

    &__input {
      cursor: pointer;
      opacity: 0;
      position: absolute;

      &:checked {
        & + #{$this}__label {
          &::before {
            background: var(--c-radio-input-checked-background);
            border: var(--c-radio-input-checked-border);
            box-shadow: inset 0 0 0 em(5px) var(--c-radio-input-checked-background), inset 0 0 0 em(16px) var(--c-radio-input-background);
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

    &__label {
      align-items: var(--c-radio-align);
      display: flex;
      cursor: pointer;

      &::before {
        background: var(--c-radio-input-background);
        border-radius: var(--c-radio-input-radius);
        border: var(--c-radio-input-border);
        content: "";
        flex-shrink: 0;
        font-size: var(--c-radio-box-size);
        height: var(--c-radio-height);
        width: var(--c-radio-width);
        margin-right: var(--c-radio-gap);
        transition: all 0.3s;
      }

      &-text {
        flex: 1;
        font-size: var(--c-radio-font-size);
        line-height: var(--c-radio-line-height);
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
