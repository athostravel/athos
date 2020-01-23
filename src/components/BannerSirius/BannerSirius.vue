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
                <AtText
                    v-if="meta"
                    v-bind="cfg.meta.text"
                    class="c-banner-sirius__meta"
                    :class="cfg.meta.bgColor && `u-bg-color-${cfg.meta.bgColor}`"
                >
                    {{ meta }}
                </AtText>
                <AtText
                    v-if="title"
                    v-bind="cfg.title.text"
                    class="c-banner-sirius__title"
                    :class="cfg.title.bgColor && `u-bg-color-${cfg.title.bgColor}`"
                >
                    {{ title }}
                </AtText>
            </div>

            <div class="c-banner-sirius__price">
                <AtPriceButton
                    v-if="price && price.value"
                    v-bind="[price, { href, config: cfg.priceButton }]"
                />
            </div>
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
                    banner: {
                        radius: true
                    },
                    video: {
                        button: {
                            rounded: true,
                            icon: true,
                            size: 'diorite',
                            variant: 'ghost',
                            color: 'secondary'
                        },
                        icon: {
                            icon: 'heart'
                        }
                    },
                    favourite: {
                        enabled: true,
                        button: {
                            tag: 'button',
                            rounded: true,
                            icon: true,
                            size: 'diorite',
                            variant: 'ghost',
                            color: 'secondary'
                        },
                        icon: {
                            icon: 'heart'
                        }
                    },
                    title: {
                        bgColor: 'white',
                        text: {
                            size: 'diorite',
                            color: 'primary'
                        }
                    },
                    meta: {
                        bgColor: 'primary',
                        text: {
                            size: 'dacite',
                            color: 'white'
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-banner-sirius {
    --c-banner-sirius-content-padding: 1em 1em 1em 0;
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
        margin-left: em(8px);
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: em(16px);
      margin-bottom: em(16px);
    }

    &__meta {
      padding: em(4px) em(16px);
    }

    &__title {
      padding: em(8px) em(16px);
    }

    &__price {
      align-self: flex-end;
      margin-top: auto;
      padding-top: 4rem;
    }
  }
</style>
