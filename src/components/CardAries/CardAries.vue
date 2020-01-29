<template>
    <div
        class="c-card-aries"
        :class="{
            'c-card-aries--inverted': inverted
        }"
    >
        <AtPicture
            v-if="image && image.src"
            class="c-card-aries__picture"
            v-bind="[cfg.image, image]"
        />

        <div class="c-card-aries__box">
            <div v-if="quality && quality.count" class="c-card-aries__quality">
                <AtIcon
                    v-for="item in quality.count"
                    :key="item.id"
                    class="c-card-aries__icon"
                    v-bind="[cfg.quality, quality]"
                />
            </div>

            <AtText v-if="title" v-bind="cfg.title" class="c-card-aries__title">
                {{ title }}
            </AtText>

            <AtPrice
                v-if="price"
                v-bind="[cfg.price, price]"
                class="c-card-aries__price"
            />
        </div>
    </div>
</template>

<script>
    import AtIcon from '@components/Icon/Icon.vue'
    import AtPicture from '@components/Picture/Picture.vue'
    import AtPrice from '@components/Price/Price.vue'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtCardAries',
        components: {
            AtIcon,
            AtPicture,
            AtPrice,
            AtText
        },
        props: {
            image: {
                type: Object,
                default: () => {}
            },
            title: {
                type: String,
                default: undefined
            },
            quality: {
                type: Object,
                default: () => {}
            },
            price: {
                type: Object,
                default: () => {}
            },
            inverted: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                cfg: {
                    quality: {
                        color: 'secondary',
                        size: 'basalt'
                    },
                    title: {
                        tag: 'div',
                        size: 'diorite',
                        color: 'primary'
                    },
                    price: {
                        inline: true
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-card-aries {
    --c-card-aries-picture-ratio-height: 1;
    --c-card-aries-picture-ratio-width: 1;
    --c-card-aries-picture-margin-left: 0;
    --c-card-aries-picture-margin-right: #{em(24px)};
    --c-card-aries-picture-order: 0;
  }
</style>

<style lang="scss" scoped>
  .c-card-aries {
    display: flex;

    &--inverted {
      --c-card-aries-picture-margin-left: #{em(24px)};
      --c-card-aries-picture-margin-right: 0;
      --c-card-aries-picture-order: 1;
    }

    &__picture {
      min-width: em(80px);
      margin-left: var(--c-card-aries-picture-margin-left);
      margin-right: var(--c-card-aries-picture-margin-right);
      order: var(--c-card-aries-picture-order);
      flex-shrink: 1;

      &::before {
        --c-picture-ratio-height: var(--c-card-aries-picture-ratio-height);
        --c-picture-ratio-width: var(--c-card-aries-picture-ratio-width);
      }
    }

    &__box {
      flex-grow: 1;
    }

    &__quality {
      display: flex;
      justify-content: flex-end;
      margin-bottom: em(4px);
    }

    &__icon {
      &:not(:last-child) {
        margin-right: em(4px);
      }
    }

    &__price {
      margin-top: em(24px);
    }
  }
</style>
