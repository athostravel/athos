<template>
    <Banner
        tag="article"
        class="c-banner-piscis"
        :class="{'c-banner-piscis--overlay-bottom': overlayPosition === 'bottom'}"
        :overlay="true"
        v-bind="banner"
    >
        <BannerContent
            class="c-banner-piscis__content"
            :class="[
                { 'c-banner-piscis__content--justify-bottom': justifyContent === 'bottom'},
                { 'c-banner-piscis__content--justify-center': justifyContent === 'center'},
                { 'c-banner-piscis__content--align-center': alignContent === 'center'},
                { 'c-banner-piscis__content--align-right': alignContent === 'right'},
            ]"
        >
            <div v-if="title" class="c-banner-piscis__text">
                <AtText v-bind="title" class="c-banner-piscis__title" />
            </div>

            <div v-if="textButton || title" class="c-banner-piscis__actions">
                <Button
                    class="c-banner-piscis__button"
                    :text="textButton"
                    :href="hrefButton"
                    :outlined="true"
                />
            </div>
        </BannerContent>
    </Banner>
</template>

<script>
    import Button from '@components/Button/Button'
    import Banner from '@components/Banner/Banner'
    import BannerContent from '@components/Banner/BannerContent'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtBannerPiscis',
        components: {
            AtText,
            Banner,
            BannerContent,
            Button
        },
        props: {
            banner: {
                type: Object,
                default: () => {}
            },
            title: {
                type: Object,
                default: () => {}
            },
            justifyContent: {
                type: [String, Boolean],
                default: 'bottom'
            },
            alignContent: {
                type: [String, Boolean],
                default: 'center'
            },
            textButton: {
                type: [String, Boolean],
                default: 'Leer Más'
            },
            hrefButton: {
                type: [String, Boolean],
                default: '#'
            },
            overlayPosition: {
                type: [String, Boolean],
                default: 'bottom'
            }
        }
    }
</script>

<style lang="scss">
  .c-banner-piscis {
    --c-banner-piscis-content-padding: 2em;
    --c-banner-piscis-title-background: transparent;
    --c-banner-piscis-title-color: #fff;
    --c-banner-piscis-title-font-size: var(--font-size-2xl);
    --c-banner-picture-ratio-width: 1;
    --c-banner-picture-ratio-height: 1.6;

    &--overlay {
      &-bottom {
        --c-banner-overlay: linear-gradient(to bottom, transparent 60%, var(--color-primary) 100%);
      }
    }
  }
</style>

<style scoped lang="scss">
  .c-banner-piscis {
    &__content {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      padding: var(--c-banner-piscis-content-padding);

      &--justify {
        &-bottom {
          justify-content: flex-end;
        }

        &-center {
          justify-content: center;
        }
      }

      &--align {
        &-center {
          align-items: center;
        }

        &-right {
          align-items: flex-end;
        }
      }
    }

    &__button {
      --c-button-background-color: transparent;
      --c-button-border-color: #fff;
      --c-button-border-radius: 0;
      --c-button-color: #fff;
      --c-button-text-transform: capitalize;
      --c-button-min-height: #{em(36px)};
      --c-button-min-width: #{em(80px)};
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    &__title {
      --c-text-background: var(--c-banner-piscis-title-background);
      --c-text-color: var(--c-banner-piscis-title-color);
      --c-text-font-size: var(--c-banner-piscis-title-font-size);
      --c-text-padding: 0;
    }
  }
</style>
