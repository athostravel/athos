<template>
    <AtBanner
        tag="article"
        class="c-banner-orion"
        v-bind="[cfg.banner, image]"
    >
        <AtBannerContent class="c-banner-orion__content">
            <div v-if="video || cfg.favourite.enabled" class="c-banner-orion__icons">
                <div v-if="video" class="c-banner-orion__icon">
                    <AtButton v-bind="cfg.video.button" :href="video" class="c-banner-orion__button">
                        <AtIcon v-bind="cfg.video.icon" :icon="cfg.video.icon.icon" />
                    </AtButton>
                </div>
                <div v-if="cfg.favourite.enabled" class="c-banner-orion__icon">
                    <AtButton v-bind="cfg.favourite.button" class="c-banner-orion__button">
                        <AtIcon v-bind="cfg.favourite.icon" :icon="cfg.favourite.icon.icon" />
                    </AtButton>
                </div>
            </div>
            <div v-if="meta || title" class="c-banner-orion__text">
                <AtText v-if="meta" v-bind="cfg.meta" :text="meta" class="c-banner-orion__meta" />
                <AtText v-if="title" v-bind="cfg.title" :text="title" class="c-banner-orion__title" />
            </div>
            <AtPriceButton
                v-if="price && price.value"
                class="c-banner-orion__price"
                v-bind="[price, { href, config: cfg.priceButton }]"
            >
                {{ buttonText }}
            </AtPriceButton>
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
        name: 'AtBannerOrion',
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
            },
            buttonText: {
                type: String,
                default: undefined
            }
        },
        data () {
            return {
                cfg: {
                    video: {
                        button: { rounded: true, icon: true, size: 'tiny' },
                        icon: { icon: 'heart' }
                    },
                    banner: { radius: true },
                    favourite: {
                        enabled: true,
                        button: { tag: 'button', rounded: true, icon: true, size: 'tiny' },
                        icon: { icon: 'heart' }
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-banner-orion {
    --c-banner-orion-content-padding: 1em;
  }
</style>

<style lang="scss" scoped>
  .c-banner-orion {
    &__content {
      padding: var(--c-banner-orion-content-padding);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    &__text {
      margin-top: auto;
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

    &__title {
      color: #fff;
      font-size: 24px;
    }

    &__meta {
      color: #fff;
      font-size: 18px;
    }
  }
</style>
