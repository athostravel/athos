<template>
    <Banner tag="article" class="c-banner-sirius" v-bind="banner">
        <BannerContent class="c-banner-sirius__content">
            <div v-if="icons" class="c-banner-sirius__icons">
                <div v-for="icon in icons" :key="icon.id" class="c-banner-sirius__icon">
                    <Button v-bind="icon" class="c-banner-sirius__button" />
                </div>
            </div>

            <div v-if="meta || title" class="c-banner-sirius__text">
                <AtText v-if="meta" v-bind="meta" class="c-banner-sirius__meta" />
                <AtText v-if="title" v-bind="title" class="c-banner-sirius__title" />
            </div>

            <PriceButton
                v-if="priceButton"
                class="c-banner-sirius__price"
                v-bind="priceButton"
            />
        </BannerContent>
    </Banner>
</template>

<script>
    import Button from '@components/Button/Button'
    import Banner from '@components/Banner/Banner'
    import BannerContent from '@components/Banner/BannerContent'
    import PriceButton from '@components/PriceButton/PriceButton'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtBannerSirius',
        components: {
            Button,
            Banner,
            BannerContent,
            PriceButton,
            AtText
        },
        props: {
            icons: {
                type: Array,
                default: () => []
            },
            meta: {
                type: Object,
                default: () => {}
            },
            title: {
                type: Object,
                default: () => {}
            },
            banner: {
                type: Object,
                default: () => {}
            },
            priceButton: {
                type: Object,
                default: () => {}
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
      --c-button-background-color: hsla(var(--color-shade-0-hsl), 0.5);
      --c-button-icon-color: var(--color-secondary);
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
