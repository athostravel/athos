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

        <Button class="c-price-button__button" v-bind="button" />
    </component>
</template>

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

<style lang="scss">
  .c-price-button {
    --c-price-button-background: #f6f6f6;
    --c-price-button-price-border-radius: #{em(4px)} 0 0 #{em(4px)};
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
      --c-button-icon-size: #{em(24px)};
      --c-button-padding: #{em(8px)} #{em(16px)};
      --c-button-min-height: auto;
      --c-button-border-radius: 0 #{em(4px)} #{em(4px)} 0;
    }

    &--inverted {
      --c-price-button-price-border-radius: 0 #{em(4px)} #{em(4px)} 0;

      #{$this}__button {
        --c-button-border-radius: #{em(4px)} 0 0 #{em(4px)};

        order: -1;
      }
    }
  }
</style>
