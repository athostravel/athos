<template>
    <component
        :is="tag"
        class="c-price-button"
        :class="{
            'c-price-button--inverted' : inverted
        }"
    >
        <div class="c-price-button__price">
            <Price v-bind="price" />
        </div>
        <div class="c-price-button__button">
            <Button v-bind="button" />
        </div>
    </component>
</template>

<style lang="scss">
  .c-price-button {
    --c-price-button-background: #f6f6f6;
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
      justify-content: center;
      display: flex;
      flex-direction: column;
      background: var(--c-price-button-background);
      padding: var(--c-price-button-price-padding);
      border-radius: var(--c-price-button-price-border-radius);
    }

    &__button {
      display: flex;
    }

    &--inverted {
      #{$this}__button {
        order: -1;
      }
    }
  }
</style>

<script>
    import Price from '@components/Price/Price'
    import Button from '@components/Button/Button'

    export default {
        name: 'AtPriceButton',
        components: {
            Price,
            Button
        },
        props: {
            tag: {
                type: String,
                default: 'div'
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
