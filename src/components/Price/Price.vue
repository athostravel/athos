<template>
    <div
        class="c-price"
        :class="[
            color && `u-color-${color}`,
            {
                'c-price--inline' : inline,
                'c-price--align-left' : align === 'left',
                'c-price--align-center' : align === 'center'
            }
        ]"
    >
        <div class="c-price__box">
            <div v-if="text" class="c-price__text">
                {{ text }}
            </div>
            <div v-if="before" class="c-price__before">
                {{ before }}{{ currency }}
            </div>
        </div>
        <div v-if="value" class="c-price__value">
            {{ value }}{{ currency }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AtPrice',
        props: {
            text: {
                type: String,
                default: undefined
            },
            before: {
                type: String,
                default: undefined
            },
            value: {
                type: [String, Number],
                default: undefined
            },
            currency: {
                type: String,
                default: '€'
            },
            align: {
                type: String,
                default: 'right'
            },
            inline: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: 'primary'
            }
        }
    }
</script>

<style lang="scss">
  .c-price {
    --c-price-text-align: right;
    --c-price-color: var(--color-primary);
    --c-price-box-display: flex;
    --c-price-box-justify-content: flex-end;
    --c-price-text-font-size: var(--font-size-s);
    --c-price-before-font-size: var(--font-size-s);
    --c-price-before-margin-right: 0;
    --c-price-value-font-size: var(--font-size-2xl);
    --c-price-value-font-weight: var(--font-weight-bold);
  }
</style>

<style scoped lang="scss">
  .c-price {
    $this: &;

    color: var(--c-price-color);
    text-align: var(--c-price-text-align);

    &__box {
      display: var(--c-price-box-display);
      align-items: flex-end;
      justify-content: var(--c-price-box-justify-content);
    }

    &__text {
      font-size: var(--c-price-text-font-size);
    }

    &__before {
      text-decoration: line-through;
      font-size: var(--c-price-before-font-size);
      margin-left: 0.5em;
      margin-right: var(--c-price-before-margin-right);
    }

    &__value {
      font-size: var(--c-price-value-font-size);
      font-weight: var(--c-price-value-font-weight);
    }

    &--inline {
      --c-price-box-display: contents;
      --c-price-before-margin-right: 0.5rem;

      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }

    &--align-left {
      --c-price-text-align: left;
      --c-price-box-justify-content: flex-start;

      justify-content: flex-start;
    }

    &--align-center {
      --c-price-text-align: center;
      --c-price-box-justify-content: center;

      justify-content: center;
    }
  }
</style>
