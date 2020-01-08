<template>
    <AtBanner tag="article" class="c-banner-sirius" v-bind="options.atBanner">
        <AtBannerContent class="c-banner-sirius__content">
            <div v-if="options.icons" class="c-banner-sirius__icons">
                <div v-for="item in options.icons" :key="item.id" class="c-banner-sirius__icon">
                    <AtButton v-bind="item.atButton" class="c-banner-sirius__button">
                        <AtIcon v-bind="item.atIcon" />
                    </AtButton>
                </div>
            </div>

            <div v-if="options.meta || options.title" class="c-banner-sirius__text">
                <AtText v-if="options.meta && options.meta.text" v-bind="options.meta" class="c-banner-sirius__meta" />
                <AtText v-if="options.title && title.text" v-bind="options.title" class="c-banner-sirius__title" />
            </div>

            <AtPriceButton
                v-if="options.atPriceButton"
                class="c-banner-sirius__price"
                v-bind="options.atPriceButton"
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
            icons: {
                type: Array,
                default: () => {}
            },
            meta: {
                type: Object,
                default: () => {}
            },
            title: {
                type: Object,
                default: () => {}
            },
            atBanner: {
                type: Object,
                default: () => {}
            },
            atPriceButton: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                defaultOptions: {
                    title: { background: true },
                    meta: { background: true },
                    icons: [
                        {
                            atButton: {
                                rounded: true,
                                size: 'tiny'
                            },
                            atIcon: {
                                icon: 'heart'
                            }
                        },
                        {
                            atButton: {
                                rounded: true,
                                size: 'tiny'
                            },
                            atIcon: {
                                icon: 'heart'
                            }
                        }
                    ],
                    atBanner: {
                        radius: true
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-banner-sirius {
    --c-banner-sirius-content-padding: 1em 1em 1em 0;
    --c-banner-sirius-meta-background: var(--color-primary);
    --c-banner-sirius-meta-color: var(--color-shade-0);
    --c-banner-sirius-meta-font-size: 0.875em;
    --c-banner-sirius-title-background: var(--color-shade-0);
    --c-banner-sirius-title-color: var(--color-primary);
    --c-banner-sirius-title-font-size: 1.125em;
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
      --c-text-background: var(--c-banner-sirius-meta-background);
      --c-text-color: var(--c-banner-sirius-meta-color);
      --c-text-font-size: var(--c-banner-sirius-meta-font-size);
      --c-text-padding: 0.25em 1em;
    }

    &__title {
      --c-text-background: var(--c-banner-sirius-title-background);
      --c-text-color: var(--c-banner-sirius-title-color);
      --c-text-font-size: var(--c-banner-sirius-title-font-size);
      --c-text-padding: 0.5em 1em;
    }

    &__price {
      color: var(--c-banner-sirius-price-button-color);
      align-self: flex-end;
      margin-top: auto;
    }
  }
</style>
