<template>
    <AtBanner
        tag="article"
        class="c-banner-sirius"
        v-bind="[cfg.banner, image]"
    >
        <AtBannerContent class="c-banner-sirius__content">
            <div v-if="video || cfg.favourite.enabled" class="c-banner-sirius__icons">
                <div v-if="video" class="c-banner-sirius__icon">
                    <AtButton v-bind="cfg.video.button" :href="video" class="c-banner-sirius__button">
                        <AtIcon v-bind="cfg.video.icon" :icon="cfg.video.icon.icon" />
                    </AtButton>
                </div>
                <div v-if="cfg.favourite.enabled" class="c-banner-sirius__icon">
                    <AtButton v-bind="cfg.favourite.button" class="c-banner-sirius__button">
                        <AtIcon v-bind="cfg.favourite.icon" :icon="cfg.favourite.icon.icon" />
                    </AtButton>
                </div>
            </div>

            <div v-if="meta || title" class="c-banner-sirius__text">
                <AtText v-if="meta" v-bind="cfg.meta" class="c-banner-sirius__meta">
                    {{ meta }}
                </AtText>
                <AtText v-if="title" v-bind="cfg.title" class="c-banner-sirius__title">
                    {{ title }}
                </AtText>
            </div>

            <AtPriceButton
                v-if="price && price.value"
                class="c-banner-sirius__price"
                v-bind="[price, { href, config: cfg.priceButton }]"
            />
        </AtBannerContent>
    </AtBanner>
</template>

<script>
    import AtButton from '@components/Button/Button'
    import AtIcon from '@components/Icon/Icon'
    import AtBanner from '@components/Banner/Banner'
    import AtBannerContent from '@components/Banner/BannerContent'
    import AtPriceButton from '@components/PriceButton/PriceButton'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtBannerSirius',
        components: {
            AtIcon,
            AtButton,
            AtBanner,
            AtBannerContent,
            AtPriceButton,
            AtText
        },
        props: {
            image: {
                type: Object,
                default: () => {}
            },
            price: {
                type: Object,
                default: () => {}
            },
            video: {
                type: String,
                default: undefined
            },
            meta: {
                type: String,
                default: undefined
            },
            title: {
                type: String,
                default: undefined
            },
            href: {
                type: String,
                default: '#'
            }
        },
        data () {
            return {
                cfg: {
                    banner: { radius: true },
                    video: {
                        button: { rounded: true, icon: true, size: 'diorite' },
                        icon: { icon: 'heart' }
                    },
                    favourite: {
                        enabled: true,
                        button: { tag: 'button', rounded: true, icon: true, size: 'diorite' },
                        icon: { icon: 'heart' }
                    },
                    title: { size: 'diorite' },
                    meta: { color: 'white' }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-banner-sirius {
    --c-banner-sirius-content-padding: 1em 1em 1em 0;
    --c-banner-sirius-meta-background: var(--color-primary);
    --c-banner-sirius-title-background: var(--color-shade-0);
    --c-banner-sirius-price-button-color: var(--color-secondary);
  }
</style>

<style scoped lang="scss">
  .c-banner-sirius {
    &__content {
      padding: var(--c-banner-sirius-content-padding);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    &__icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    &__icon {
      & + & {
        margin-left: 0.5em;
      }
    }

    &__button {
      --c-button-background-color: hsla(var(--color-shade-0-hsl), 0.7);
      --c-button-color: var(--color-secondary);
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    &__meta {
      background: var(--c-banner-sirius-meta-background);
      padding: 0.25em 1em;
    }

    &__title {
      padding: 0.5em 1em;
      background: var(--c-banner-sirius-title-background);
    }

    &__price {
      color: var(--c-banner-sirius-price-button-color);
      align-self: flex-end;
      margin-top: auto;
    }
  }
</style>
