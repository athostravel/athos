<template>
    <component
        :is="tag"
        :href="href"
        class="c-price-button"
        :class="{
            'c-price-button--inverted' : inverted,
            'c-price-button--radiused' : radiused
        }"
    >
        <div
            v-if="value || text"
            class="c-price-button__price"
            :class="bgColor && `u-bg-color-${bgColor}`"
        >
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
            },
            radiused: {
                type: Boolean,
                default: false
            },
            bgColor: {
                type: String,
                default: 'white'
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
    --c-price-radius: 0;
    --c-price-top-left-border-radius: var(--c-price-radius);
    --c-price-top-right-border-radius: var(--c-price-radius);
    --c-price-bottom-left-border-radius: var(--c-price-radius);
    --c-price-bottom-right-border-radius: var(--c-price-radius);
    --c-price-border-radius: var(--c-price-top-left-border-radius) var(--c-price-top-right-border-radius) var(--c-price-bottom-left-border-radius) var(--c-price-bottom-right-border-radius);
    --c-price-button-price-padding: #{em(8px) em(16px)};
    --c-price-button-icon-size: #{em(24px)};
  }
</style>

<style scoped lang="scss">
  .c-price-button {
    $this: &;

    cursor: pointer;
    display: inline-flex;
    border-radius: var(--c-price-border-radius);
    overflow: hidden;

    &__price {
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: var(--c-price-button-price-padding);
    }

    &__button {
      --c-button-min-height: auto;
      --c-button-border-radius: 0;
      --c-button-inner-border-radius: 0;
    }

    &__icon {
      font-size: var(--c-price-button-icon-size);
    }

    &--radiused {
      --c-price-radius: var(--radius-s);
    }

    &--inverted {
      #{$this}__button {
        order: -1;
      }
    }
  }
</style>
