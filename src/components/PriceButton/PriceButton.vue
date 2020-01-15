<template>
    <component
        :is="tag"
        :href="href"
        class="c-price-button"
        :class="{
            'c-price-button--inverted' : inverted
        }"
    >
        <div v-if="value || text" class="c-price-button__price">
            <AtPrice v-bind="[cfg.price , { before, value, text }]" />
        </div>

        <AtButton class="c-price-button__button" v-bind="cfg.button">
            <AtIcon class="c-price-button__icon" v-bind="cfg.icon" />
        </AtButton>
    </component>
</template>

<script>
    import AtPrice from '@components/Price/Price'
    import AtButton from '@components/Button/Button'
    import AtIcon from '@components/Icon/Icon'

    export default {
        name: 'AtPriceButton',
        components: {
            AtPrice,
            AtButton,
            AtIcon
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
            text: {
                type: String,
                default: 'Desde'
            },
            before: {
                type: String,
                default: undefined
            },
            value: {
                type: [String, Number],
                default: undefined
            },
            inverted: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                cfg: {
                    button: {
                        tag: 'div',
                        color: 'secondary'
                    },
                    icon: {
                        icon: 'angle-right'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-price-button {
    --c-price-button-background: #f6f6f6;
    --c-price-button-price-border-radius: #{em(4px)} 0 0 #{em(4px)};
    --c-price-button-price-padding: #{em(8px) em(16px)};
    --c-price-button-icon-size: #{em(24px)};
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
      --c-button-padding: #{em(8px)} #{em(16px)};
      --c-button-min-height: auto;
      --c-button-border-radius: 0 #{em(4px)} #{em(4px)} 0;
    }

    &__icon {
      font-size: var(--c-price-button-icon-size);
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
