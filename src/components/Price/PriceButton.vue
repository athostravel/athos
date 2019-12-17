<template>
    <component
        :is="tag"
        class="c-price-button"
        :class="{
            'c-price-button--inv' : inverted
        }"
    >
        <div class="c-price-button__price">
            <Price v-bind="price" />
        </div>
        <div class="c-price-button__button">
            <!-- <Button v-bind="button" />-->
        </div>
    </component>
</template>

<style lang="scss">
  :root {
    --c-price-button-background: #fff;
    --c-price-button-price-border-radius: 4px 0 0 4px;
    --c-price-button-price-padding: #{em(8px) em(16px)};
  }
</style>

<style scoped lang="scss">
  .c-price-button {
    $this: &;

    cursor: pointer;
    display: inline-flex;

    &__price {
      background: var(--c-price-button-background);
      padding: var(--c-price-button-price-padding);
      border-radius: var(--c-price-button-price-border-radius);
    }

    &__button {
      display: flex;
    }

    &--inv {
      #{$this}__button {
        order: -1;
      }
    }
  }
</style>

<script>

    import Price from '../Price/Price'

    export default {
        name: 'AtPriceButton',
        components: {
            Price
        },
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            text: {
                type: String,
                default: 'Desde'
            },
            before: {
                type: String,
                default: undefined
            },
            value: {
                type: String,
                default: undefined
            },
            inverted: {
                type: Boolean,
                default: false
            },
            button: {
                type: Object,
                default: () => {}
            },
            price: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>
