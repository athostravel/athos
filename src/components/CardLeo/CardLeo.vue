<template>
    <AtBanner
        tag="article"
        class="c-card-leo"
        :class="{
            'c-card-leo--has-filter' : filterImage.enabled
        }"
        v-bind="[cfg.banner, banner]"
    >
        <div v-if="meta || map.enabled || favourite.enabled" class="c-card-leo__header">
            <div v-if="highlight || favourite.enabled" class="c-card-leo__header-actions">
                <AtText v-if="highlight" v-bind="[cfg.highlight, highlight]" class="c-card-leo__highlight" />

                <div v-if="map.enabled || favourite.enabled" class="c-card-leo__icons">
                    <div v-if="map.enabled" class="c-card-leo__icon">
                        <AtButton v-bind="[cfg.map.button, map.button]" class="c-card-leo__button">
                            <AtIcon v-bind="[cfg.map.icon, map.icon]" :icon="map.icon.icon" :rounded="map.button.rounded" />
                        </AtButton>
                    </div>
                    <div v-if="favourite.enabled" class="c-card-leo__icon">
                        <AtButton v-bind="[cfg.favourite.button, favourite.button]" class="c-card-leo__button">
                            <AtIcon v-bind="[cfg.favourite.icon, favourite.icon]" :icon="favourite.icon.icon" :rounded="favourite.button.rounded" />
                        </AtButton>
                    </div>
                </div>
            </div>

            <div v-if="previous || meta || text" class="c-card-leo__header-info">
                <AtText v-if="previous" v-bind="[cfg.previous, previous]" class="c-card-leo__previous" />

                <AtText v-if="meta" v-bind="[cfg.meta, meta]" class="c-card-leo__meta" />

                <AtText v-if="text" v-bind="[cfg.text, text]" class="c-card-leo__text" />
            </div>
        </div>

        <AtCardPegasus
            class="c-card-leo__content"
            v-bind="[cfg.bannerInfo, bannerInfo]"
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
            map: {
                type: Object,
                default: () => {}
            },
            favourite: {
                type: Object,
                default: () => {}
            },
            highlight: {
                type: Object,
                default: () => {}
            },
            previous: {
                type: Object,
                default: () => {}
            },
            meta: {
                type: Object,
                default: () => {}
            },
            text: {
                type: Object,
                default: () => {}
            },
            description: {
                type: Object,
                default: () => {}
            },
            banner: {
                type: Object,
                default: () => {}
            },
            bannerInfo: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    filterImage: {
                        enabled: true
                    },
                    banner: {
                        radius: true,
                        shadow: false,
                        filter: 'blur'
                    },
                    map: {
                        enabled: false,
                        button: { tag: 'button', rounded: false, icon: true, size: 'tiny' },
                        icon: { icon: 'heart' }
                    },
                    favourite: {
                        enabled: false,
                        button: { tag: 'button', rounded: false, icon: true, size: 'tiny' },
                        icon: { icon: 'heart' }
                    },
                    highlight: {
                        tag: 'div'
                    },
                    previous: {
                        tag: 'div'
                    },
                    meta: {
                        tag: 'h2'
                    },
                    text: {
                        tag: 'h3'
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
    --c-card-leo-picture-ratio-width: 16;
    --c-card-leo-picture-ratio-height: 9;
    --c-card-leo-highlight-font-size: var(--font-size-m);
    --c-card-leo-highlight-text-padding: var(--space-2xs);
    --c-card-leo-highlight-color: #fff;
    --c-card-leo-highlight-background: var(--color-secondary);
    --c-card-leo-previous-display: block;
    --c-card-leo-previous-color: var(--color-primary);
    --c-card-leo-previous-font-size: var(--font-size-m);
    --c-card-leo-previous-line-height: var(--line-height-m);
    --c-card-leo-meta-display: block;
    --c-card-leo-meta-color: var(--color-secondary);
    --c-card-leo-meta-font-size: var(--font-size-xl);
    --c-card-leo-meta-line-height: var(--line-height-xl);
    --c-card-leo-meta-font-weight: var(--font-weight-bold);
    --c-card-leo-meta-margin: 0 0 var(--space-2xs) 0;
    --c-card-leo-text-display: block;
    --c-card-leo-text-color: var(--color-primary);
    --c-card-leo-text-line-height: var(--line-height-m);
    --c-card-leo-text-font-size: var(--font-size-m);
    --c-card-leo-description-color: var(--color-shade-800);
    --c-card-leo-header-padding: var(--space-s) var(--space-m);
    --c-card-leo-header-background: #fff;
    --c-card-leo-header-actions-padding: var(--space-s) var(--space-s) 0 var(--space-s);
    --c-card-leo-info-padding: var(--space-s) var(--space-m);
    --c-card-leo-actions-padding: 0;
    --c-card-leo-button-background-color: var(transparent);
    --c-card-leo-button-color: var(--color-primary);
    --c-card-leo-button-icon-size: var(--font-size-4xl);
    --c-card-leo-icon-margin: 0 0 0 var(--space-2xs);
    --c-card-leo-has-filter-padding: var(--space-s);
    --c-card-leo-has-filter-filter: blur(8px);
    --c-card-leo-has-filter-actions-padding: 0 0 var(--space-s) 0;
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

    &__icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      flex-grow: 1;
    }

    &__button {
      --c-button-background-color: var(--c-card-leo-button-background-color);
      --c-button-color: var(--c-card-leo-button-color);
      --c-button-icon-size: var(--c-card-leo-button-icon-size);
    }

    &__icon {
      & + & {
        margin: var(--c-card-leo-icon-margin);
      }
    }

    &__header {
      background: var(--c-card-leo-header-background);

      &-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--c-card-leo-header-actions-padding);
      }

      &-info {
        padding: var(--c-card-leo-header-padding);
      }
    }

    &__highlight {
      --c-text-background: var(--c-card-leo-highlight-background);
      --c-text-color: var(--c-card-leo-highlight-color);
      --c-text-font-size: var(--c-card-leo-highlight-font-size);
      --c-text-padding: var(--c-card-leo-highlight-text-padding);

      margin-left: calc(var(--c-card-leo-padding) * -1);
      top: 0;
    }

    &__previous {
      --c-text-color: var(--c-card-leo-previous-color);
      --c-text-font-size: var(--c-card-leo-previous-font-size);
      --c-text-line-height: var(--c-card-leo-previous-line-height);

      display: var(--c-card-leo-previous-display);
    }

    &__meta {
      --c-text-color: var(--c-card-leo-meta-color);
      --c-text-font-size: var(--c-card-leo-meta-font-size);
      --c-text-line-height: var(--c-card-leo-meta-line-height);
      --c-text-font-weight: var(--c-card-leo-meta-font-weight);

      display: var(--c-card-leo-meta-display);
      margin: var(--c-card-leo-meta-margin);
    }

    &__text {
      --c-text-color: var(--c-card-leo-text-color);
      --c-text-font-size: var(--c-card-leo-text-font-size);
      --c-text-line-height: var(--c-card-leo-text-line-height);

      display: var(--c-card-leo-text-display);
    }

    &--has-filter {
      #{$this}__button {
        --c-card-leo-button-background-color: var(--c-card-leo-has-filter-button-background);
        --c-card-leo-button-color: var(--c-card-leo-has-filter-button-color);
      }

      #{$this}__header {
        --c-card-leo-header-background: var(--c-card-leo-has-filter-header-background);
        --c-card-leo-header-padding: var(--c-card-leo-has-filter-header-padding);

        &-actions {
          --c-card-leo-header-actions-padding: var(--c-card-leo-has-filter-actions-padding);
        }
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

      #{$this}__content {
        --c-card-leo-padding: var(--c-card-leo-has-filter-padding);
      }
    }
  }
</style>
