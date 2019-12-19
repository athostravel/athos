<template>
    <Banner
        tag="article"
        class="c-banner-sirius"
        text="Button"
        :picture="picture"
        v-bind="banner"
    >
        <BannerContent class="c-banner-sirius__content">
            <component :is="textTag" class="c-banner-sirius__text">
                <Paragraph v-bind="meta" class="c-banner-sirius__meta" />
                <Paragraph v-bind="title" class="c-banner-sirius__title" />
            </component>
            <IconList
                :icons="icons"
                class="c-banner-sirius__icons"
            />
            <PriceButton
                class="c-banner-sirius__price"
                :price="price"
                :button="button"
            />
        </BannerContent>
    </Banner>
</template>

<script>
    import Banner from '@components/Banner/Banner'
    import BannerContent from '@components/Banner/BannerContent'
    import PriceButton from '@components/PriceButton/PriceButton'
    import IconList from '@components/IconList/IconList'
    import Paragraph from '@components/Paragraph/Paragraph'

    export default {
        name: 'AtBannerSirius',
        components: {
            Banner,
            BannerContent,
            PriceButton,
            IconList,
            Paragraph
        },
        props: {
            textTag: {
                type: String,
                default: 'div'
            },
            title: {
                type: Object,
                default: () => {}
            },
            meta: {
                type: Object,
                default: () => {}
            },
            button: {
                type: Object,
                default: () => {}
            },
            picture: {
                type: Object,
                default: () => {}
            },
            price: {
                type: Object,
                default: () => {}
            },
            icons: {
                type: Array,
                default: () => []
            },
            banner: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss">
  .c-banner-sirius {
    --c-banner-overlay: linear-gradient(0deg, #000 0%, transparent 50%);
    --c-banner-content-padding: 1em 1em 1em 0;
    --c-banner-meta-color: #fff;
    --c-banner-meta-background: #c6c6c6;
    --c-banner-meta-padding: 0.5em;
    --c-banner-meta-font-size: 0.875em;
    --c-banner-title-color: #fff;
    --c-banner-title-background: #d6d6d6;
    --c-banner-title-padding: 0.5em;
    --c-banner-title-font-size: 1em;
    --c-banner-picture-ratio-height: 3;
    --c-banner-picture-ratio-width: 4;
  }
</style>

<style scoped lang="scss">
  .c-banner-sirius {
    &__content {
      display: grid;
      grid-template-rows: repeat(3, auto);
      padding: var(--c-banner-content-padding);
      grid-template-areas: "icons" "text" "price";
      height: 100%;
    }

    &__text {
      grid-area: text;
      justify-self: start;
      text-align: left;
    }

    &__icons {
      grid-area: icons;
      align-self: start;
      justify-self: end;
    }

    &__price {
      grid-area: price;
      align-self: end;
      justify-self: end;
    }

    &__picture {
      --c-banner-picture-ratio-height: 4;
    }

    &__button {
      --c-button-text-transform: normal;
      --c-button-font-size: 1.231em;
    }

    &__title {
      --c-paragraph-font-size: var(--c-banner-title-font-size);
      --c-paragraph-background: var(--c-banner-title-background);
      --c-paragraph-padding: var(--c-banner-title-padding);
      --c-paragraph-color: var(--c-banner-title-color);
    }

    &__meta {
      --c-paragraph-font-size: var(--c-banner-meta-font-size);
      --c-paragraph-background: var(--c-banner-meta-background);
      --c-paragraph-padding: var(--c-banner-meta-padding);
      --c-paragraph-color: var(--c-banner-meta-color);

      display: inline-block;
    }
  }
</style>
