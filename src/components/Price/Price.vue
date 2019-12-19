<template>
    <div
        class="c-price"
        :class="{
            'c-price--inline' : inline,
            'c-price--align-left' : align === 'left'
        }"
    >
        <div class="c-price__box">
            <div v-if="text" class="c-price__text">
                {{ text }}
            </div>
            <div v-if="before" class="c-price__before">
                {{ before }}{{ currency }}
            </div>
        </div>
        <div class="c-price__value">
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
                type: String,
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
            }
        }
    }
</script>

<style lang="scss">
  .c-price {
    --c-price-text-align: right;
    --c-price-color: var(--color-primary);
    --c-price-text-font-size: 0.875em;
    --c-price-before-font-size: 0.875em;
    --c-price-value-font-size: 1.375em;
    --c-price-value-font-weight: 700;
  }
</style>

<style scoped lang="scss">
  .c-price {
    $this: &;

    color: var(--c-price-color);
    text-align: var(--c-price-text-align);

    &__box {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }

    &__text {
      font-size: var(--c-price-text-font-size);
      margin-right: 0.5rem;
    }

    &__before {
      text-decoration: line-through;
      font-size: var(--c-price-before-font-size);
    }

    &__value {
      font-size: var(--c-price-value-font-size);
      font-weight: var(--c-price-value-font-weight);
    }

    &--inline {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      #{$this} {
        &__box {
          display: contents;
        }

        &__before {
          margin-right: 0.5rem;
        }
      }
    }

    &--align-left {
      --c-price-text-align: left;

      justify-content: flex-start;

      #{$this} {
        &__box {
          justify-content: flex-start;
        }
      }
    }
  }
</style>
