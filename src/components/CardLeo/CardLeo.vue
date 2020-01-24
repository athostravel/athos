<template>
    <AtBanner
        tag="article"
        class="c-card-leo"
        :class="{
            'c-card-leo--has-filter' : cfg.filterImage.enabled
        }"
        v-bind="[cfg.banner, image]"
    >
        <AtCardPegasus
            class="c-card-leo__content"
            v-bind="[cfg.info, info]"
        />
    </AtBanner>
</template>

<script>
    import AtBanner from '@components/Banner/Banner'
    import AtCardPegasus from '@components/CardPegasus/CardPegasus'

    export default {
        name: 'AtCardLeo',
        components: {
            AtBanner,
            AtCardPegasus
        },
        props: {
            filterImage: {
                type: Object,
                default: () => {}
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
            info: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    filterImage: {
                        enabled: false
                    },
                    banner: {
                        radius: true,
                        shadow: true
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-card-leo {
    --c-card-leo-padding: 0;
    --c-card-leo-background: transparent;
    //--c-card-leo-picture-ratio-width: 16;
    //--c-card-leo-picture-ratio-height: 9;
    --c-card-leo-has-filter-padding: var(--space-s);
    --c-card-leo-has-filter-filter: blur(8px);
    --c-card-leo-has-filter-actions-padding: var(--space-s);
    --c-card-leo-has-filter-previous-color: #fff;
    --c-card-leo-has-filter-meta-color: #fff;
    --c-card-leo-has-filter-text-color: #fff;
    --c-card-leo-has-filter-header-background: transparent;
    --c-card-leo-has-filter-header-padding: 0 var(--space-s) var(--space-s) var(--space-m);
    --c-card-leo-has-filter-button-color: #fff;
    --c-card-leo-has-filter-button-background: hsla(var(--color-shade-900-hsl), 0.7);
  }
</style>

<style scoped lang="scss">
  .c-card-leo {
    $this: &;

    background-color: var(--c-card-leo-background);

    &__content {
      padding: var(--c-card-leo-padding);
    }

    &--has-filter {
      #{$this}__header {
        --c-card-leo-header-background: var(--c-card-leo-has-filter-header-background);
        --c-card-leo-header-padding: var(--c-card-leo-has-filter-header-padding);

        &-actions {
          --c-card-leo-header-actions-padding: var(--c-card-leo-has-filter-actions-padding);
        }
      }

      #{$this}__highlight {
        margin-left: calc(var(--c-card-leo-has-filter-padding) * -1);
      }

      #{$this}__content {
        --c-card-leo-padding: var(--c-card-leo-has-filter-padding);
      }

      #{$this}__previous {
        --c-text-color: var(--c-card-leo-has-filter-previous-color);
      }

      #{$this}__meta {
        --c-text-color: var(--c-card-leo-has-filter-meta-color);
      }

      #{$this}__text {
        --c-text-color: var(--c-card-leo-has-filter-text-color);
      }
    }
  }
</style>
