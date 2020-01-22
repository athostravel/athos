<template>
    <AtBanner
        tag="article"
        class="c-banner-piscis"
        :class="{
            'c-banner-piscis--overlay': cfg.overlay.enabled === true,
            'c-banner-piscis--overlay-bottom': cfg.overlay.enabled === true && cfg.overlay.position === 'bottom'
        }"
        v-bind="banner"
    >
        <AtBannerContent
            class="c-banner-piscis__content"
            :class="[
                { 'c-banner-piscis__content--justify-bottom': justifyContent === 'bottom'},
                { 'c-banner-piscis__content--justify-center': justifyContent === 'center'},
                { 'c-banner-piscis__content--align-center': alignContent === 'center'},
                { 'c-banner-piscis__content--align-right': alignContent === 'right'}
            ]"
        >
            <div v-if="title" class="c-banner-piscis__text">
                <AtText v-bind="[cfg.title, title]" class="c-banner-piscis__title">
                    {{ title.text }}
                </AtText>
            </div>

            <div class="c-banner-piscis__actions">
                <AtButton
                    class="c-banner-piscis__button"
                    v-bind="[cfg.goButton, goButton]"
                >
                    {{ goButton.text }}
                </AtButton>
            </div>
        </AtBannerContent>
    </AtBanner>
</template>

<script>
    import AtButton from '@components/Button/Button'
    import AtBanner from '@components/Banner/Banner'
    import AtBannerContent from '@components/Banner/BannerContent'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtBannerPiscis',
        components: {
            AtText,
            AtBanner,
            AtBannerContent,
            AtButton
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
            goButton: {
                type: Object,
                default: () => {}
            },
            overlay: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    overlay: {
                        enabled: true,
                        position: 'bottom'
                    },
                    goButton: {
                        variant: 'outlined',
                        size: 'basalt'
                    },
                    title: {
                        color: 'white',
                        size: 'obsidian'
                    }
                }
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
    --c-banner-overlay-bottom: linear-gradient(to bottom, transparent 60%, var(--color-primary) 100%);
    --c-banner-button-color: #fff;
    --c-banner-button-border-radius: 0;
    --c-banner-button-border-color: #fff;
    --c-banner-button-border-hover-color: #fff;
    --c-banner-button-min-height: #{em(36px)};
    --c-banner-button-min-width: #{em(80px)};
    --c-banner-button-text-transform: capitalize;
    --c-banner-button-text-align: center;
  }
</style>

<style scoped lang="scss">
  .c-banner-piscis {
    &--overlay {
      position: relative;

      &-bottom {
        &::after {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          content: '';
          display: block;
          background: var(--c-banner-overlay-bottom);
          z-index: 1;
        }
      }
    }

    &__content {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      padding: var(--c-banner-piscis-content-padding);
      z-index: 2;

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

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1em;
      margin-bottom: 1em;
      text-align: var(--c-banner-button-text-align);
    }
  }
</style>
