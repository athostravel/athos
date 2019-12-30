<template>
    <div class="c-checkbox">
        <input
            :id="idElement"
            class="c-checkbox__input"
            :type="type"
            :name="name"
            :required="required"
            :disabled="disabled"
            :value="value"
            :checked="checked"
        >
        <label v-if="label" class="c-checkbox__label" :for="idElement">
            <span class="c-checkbox__label-text">
                {{ label }}
            </span>
        </label>
    </div>
</template>

<script>
    import formControl from '@mixins/formControl'

    export default {
        name: 'AtCheckbox',
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
  .c-checkbox {
    --c-checkbox-gap: 0.5em;
    --c-checkbox-box-size: 0.8336em;
    --c-checkbox-width: 1.5em;
    --c-checkbox-height: 1.5em;
    --c-checkbox-check-color: var(--color-shade-0);
    --c-checkbox-font-size: 1em;
    --c-checkbox-line-height: 1.2;
    --c-checkbox-input-border: #{em(1px)} solid var(--color-shade-400);
    --c-checkbox-input-background: var(--color-shade-0);
    --c-checkbox-input-radius: var(--radius-xs);
    --c-checkbox-input-checked-background: var(--color-primary);
    --c-checkbox-input-checked-border: #{em(1px)} solid var(--color-primary);
    --c-checkbox-icon: "\e919";
    --c-checkbox-align: flex-start;
  }
</style>

<style lang="scss" scoped>
  .c-checkbox {
    $this: &;

    display: flex;

    &__input {
      cursor: pointer;
      opacity: 0;
      position: absolute;

      &:checked {
        & + #{$this}__label {
          &::before {
            background: var(--c-checkbox-input-checked-background);
            border: var(--c-checkbox-input-checked-border);
            color: var(--c-checkbox-check-color);
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
      align-items: var(--c-checkbox-align);
      display: flex;
      cursor: pointer;

      &::before {
        align-items: center;
        background: var(--c-checkbox-input-background);
        border-radius: var(--c-checkbox-input-radius);
        border: var(--c-checkbox-input-border);
        content: var(--c-checkbox-icon);
        display: flex;
        flex-shrink: 0;
        color: transparent;
        font-size: var(--c-checkbox-box-size);
        height: var(--c-checkbox-height);
        width: var(--c-checkbox-width);
        font-family: var(--font-family-icons);
        justify-content: center;
        margin-right: var(--c-checkbox-gap);
        transition: all 0.3s;
      }

      &-text {
        flex: 1;
        font-size: var(--c-checkbox-font-size);
        line-height: var(--c-checkbox-line-height);
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
