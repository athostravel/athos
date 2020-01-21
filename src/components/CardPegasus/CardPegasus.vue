<template>
    <AtBanner
        :is="tag"
        class="c-card-pegasus"
        v-bind="[cfg.banner, image]"
    >
        <AtBannerContent class="c-card-pegasus__content">
            <AtPicture class="c-card-pegasus__picture" />
            <div v-if="title || description || price" class="c-card-pegasus__footer">
                <div v-if="title || description" class="c-card-pegasus__info">
                    <AtText v-if="title" v-bind="[cfg.title, title]" class="c-card-pegasus__title" />

                    <AtText v-if="description" v-bind="description" class="c-card-pegasus__description" />
                </div>

                <div v-if="price" class="c-card-pegasus__footer-actions">
                    <AtPriceButton
                        v-if="price && price.value"
                        class="c-card-pegasus__price"
                        v-bind="[price, { href, config: cfg.priceButton }]"
                    />
                </div>
            </div>
        </AtBannerContent>
    </AtBanner>
</template>

<script>
    import AtBanner from '@components/Banner/Banner'
    import AtBannerContent from '@components/Banner/BannerContent'
    import AtPicture from '@components/Picture/Picture.vue'
    import AtPriceButton from '@components/PriceButton/PriceButton'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtCardPegasus',
        components: {
            AtBanner,
            AtBannerContent,
            AtPicture,
            AtPriceButton,
            AtText
        },
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            image: {
                type: Object,
                default: () => {}
            },
            price: {
                type: Object,
                default: () => {}
            },
            href: {
                type: String,
                default: '#'
            },
            title: {
                type: Object,
                default: () => {}
            },
            description: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    banner: {
                        radius: false,
                        shadow: false
                    },
                    title: {
                        tag: 'h4'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-card-pegasus {
    --c-card-pegasus-padding: 0;
    --c-card-pegasus-background: transparent;
    --c-card-pegasus-picture-ratio-width: 16;
    --c-card-pegasus-picture-ratio-height: 9;
    --c-card-pegasus-title-color: var(--color-primary);
    --c-card-pegasus-title-font-size: var(--font-size-2xl);
    --c-card-pegasus-title-font-weight: var(--font-weight-bold);
    --c-card-pegasus-title-line-height: var(--line-height-m);
    --c-card-pegasus-title-margin: 0 0 var(--space-s) 0;
    --c-card-pegasus-description-color: var(--color-shade-800);
    --c-card-pegasus-header-padding: var(--space-s) var(--space-m);
    --c-card-pegasus-header-background: #fff;
    --c-card-pegasus-header-actions-padding: var(--space-s) var(--space-s) 0 var(--space-s);
    --c-card-pegasus-footer-background: #fff;
    --c-card-pegasus-info-padding: var(--space-s) var(--space-m);
    --c-card-pegasus-actions-padding: 0;
  }
</style>

<style scoped lang="scss">
  .c-card-pegasus {
    $this: &;

    background-color: var(--c-card-pegasus-background);

    &__content {
      padding: var(--c-card-pegasus-padding);
    }

    &__info {
      display: flex;
      flex-direction: column;
      padding: var(--c-card-pegasus-info-padding);
    }

    &__title {
      --c-text-font-size: var(--c-card-pegasus-title-font-size);
      --c-text-color: var(--c-card-pegasus-title-color);
      --c-text-font-weight: var(--c-card-pegasus-title-font-weight);
      --c-text-line-height: var(--c-card-pegasus-title-line-height);

      margin: var(--c-card-pegasus-title-margin);
    }

    &__description {
      --c-text-color: var(--c-card-pegasus-description-color);
    }

    &__footer {
      background: var(--c-card-pegasus-footer-background);
    }

    &__footer-actions {
      display: flex;
      justify-content: flex-end;
      padding: var(--c-card-pegasus-actions-padding);
    }

    &__price {
      align-self: flex-end;
    }
  }
</style>
