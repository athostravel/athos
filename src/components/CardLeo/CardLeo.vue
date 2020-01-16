<template>
    <component
        :is="tag"
        class="c-card-leo"
        :class="{
            'c-card-leo--has-shadow' : shadow,
            'c-card-leo--has-radius' : radius,
            'c-card-leo--has-bg-img' : coverImage
        }"
        :style="{backgroundImage:`url(${picture.src})`}"
    >
        <div class="c-card-leo__inner">
            <div v-if="meta || text || favourite.enabled" class="c-card-leo__header">
                <div v-if="highlight || favourite.enabled" class="c-card-leo__header-actions">
                    <AtText v-if="highlight" v-bind="[cfg.highlight, highlight]" class="c-card-leo__highlight" />

                    <div v-if="favourite.enabled" class="c-card-leo__icons">
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

            <Picture class="c-card-leo__picture" v-bind="[cfg.picture, picture]" />

            <div v-if="title || description || priceButton" class="c-card-leo__footer">
                <div v-if="title || description" class="c-card-leo__info">
                    <AtText v-if="title" v-bind="[cfg.title, title]" class="c-card-leo__title" />

                    <AtText v-if="description" v-bind="description" class="c-card-leo__description" />
                </div>

                <div v-if="priceButton" class="c-card-leo__footer-actions">
                    <PriceButton
                        v-if="priceButton"
                        class="c-card-leo__price"
                        v-bind="[cfg.priceButton.price, priceButton.price]"
                    />
                </div>
            </div>
        </div>
    </component>
</template>

<script>
    import AtText from '@components/Text/Text'
    import Button from '@components/Button/Button'
    import Picture from '@components/Picture/Picture.vue'
    import PriceButton from '@components/PriceButton/PriceButton'

    export default {
        name: 'AtCardLeo',
        components: {
            AtText,
            Button,
            Picture,
            PriceButton
        },
        props: {
            tag: {
                type: String,
                default: 'article'
            },
            shadow: {
                type: Boolean,
                default: true
            },
            radius: {
                type: Boolean,
                default: true
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
            coverImage: {
                type: Boolean,
                default: true
            },
            picture: {
                type: Object,
                default: () => {}
            },
            title: {
                type: Object,
                default: () => {}
            },
            description: {
                type: Object,
                default: () => {}
            },
            priceButton: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
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
                    },
                    title: {
                        tag: 'h4'
                    },
                    priceButton: {
                        price: {
                            href: '#'
                        }
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
    --c-card-leo-box-shadow: var(--shadow-distant);
    --c-card-leo-border-radius: var(--radius-s);
    --c-card-leo-picture-ratio-width: 16;
    --c-card-leo-picture-ratio-height: 9;
    --c-card-leo-highlight-font-size: var(--font-size-m);
    --c-card-leo-highlight-text-padding: var(--space-2xs);
    --c-card-leo-highlight-color: #fff;
    --c-card-leo-highlight-background: var(--color-secondary);
    --c-card-leo-meta-display: block;
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
    --c-card-leo-title-color: var(--color-primary);
    --c-card-leo-title-font-size: var(--font-size-2xl);
    --c-card-leo-title-font-weight: var(--font-weight-bold);
    --c-card-leo-title-line-height: var(--line-height-m);
    --c-card-leo-title-margin: 0 0 var(--space-s) 0;
    --c-card-leo-description-color: var(--color-shade-800);
    --c-card-leo-header-padding: var(--space-s) var(--space-m);
    --c-card-leo-header-background: #fff;
    --c-card-leo-header-actions-margin: 0 0 var(--space-xs) 0;
    --c-card-leo-footer-background: #fff;
    --c-card-leo-info-padding: var(--space-s) var(--space-m);
    --c-card-leo-actions-padding: 0;
    --c-card-leo-button-background-color: var(transparent);
    --c-card-leo-button-color: var(--color-primary);
    --c-card-leo-button-icon-size: var(--font-size-4xl);
    --c-card-leo-icon-margin: 0 0 0 var(--space-2xs);
    --c-card-leo-has-bg-img-padding: var(--space-s);
    --c-card-leo-has-bg-img-background-size: 400%;
    --c-card-leo-has-bg-img-previous-color: #fff;
    --c-card-leo-has-bg-img-meta-color: #fff;
    --c-card-leo-has-bg-img-text-color: #fff;
    --c-card-leo-has-bg-img-header-background: transparent;
    --c-card-leo-has-bg-img-header-padding: 0 var(--space-s) var(--space-s) var(--space-m);
    --c-card-leo-has-bg-img-button-color: #fff;
    --c-card-leo-has-bg-img-button-background: hsla(var(--color-shade-900-hsl), 0.7);
  }
</style>

<style scoped lang="scss">
  .c-card-leo {
    $this: &;

    background-color: var(--c-card-leo-background);
    padding: var(--c-card-leo-padding);

    &--has-shadow {
      box-shadow: var(--c-card-leo-box-shadow);
    }

    &--has-radius {
      border-radius: var(--c-card-leo-border-radius);

      #{$this}__inner {
        border-radius: var(--c-card-leo-border-radius);
      }

      #{$this}__footer {
        border-radius: 0 0 var(--c-card-leo-border-radius) var(--c-card-leo-border-radius);
      }
    }

    &__inner {
      margin: var(--c-card-leo-inner-margin);
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
        margin: var(--c-card-leo-header-actions-margin);
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

    &__info {
      display: flex;
      flex-direction: column;
      padding: var(--c-card-leo-info-padding);
    }

    &__title {
      --c-text-font-size: var(--c-card-leo-title-font-size);
      --c-text-color: var(--c-card-leo-title-color);
      --c-text-font-weight: var(--c-card-leo-title-font-weight);
      --c-text-line-height: var(--c-card-leo-title-line-height);

      margin: var(--c-card-leo-title-margin);
    }

    &__description {
      --c-text-color: var(--c-card-leo-description-color);
    }

    &__footer {
      background: var(--c-card-leo-footer-background);
    }

    &__footer-actions {
      display: flex;
      justify-content: flex-end;
      padding: var(--c-card-leo-actions-padding);
    }

    &__price {
      align-self: flex-end;
    }

    &--has-bg-img {
      --c-card-leo-padding: var(--c-card-leo-has-bg-img-padding);

      background-size: var(--c-card-leo-has-bg-img-background-size);

      #{$this}__button {
        --c-card-leo-button-background-color: var(--c-card-leo-has-bg-img-button-background);
        --c-card-leo-button-color: var(--c-card-leo-has-bg-img-button-color);
      }

      #{$this}__header {
        --c-card-leo-header-background: var(--c-card-leo-has-bg-img-header-background);
        --c-card-leo-header-padding: var(--c-card-leo-has-bg-img-header-padding);
      }

      #{$this}__previous {
        --c-text-color: var(--c-card-leo-has-bg-img-previous-color);
      }

      #{$this}__meta {
        --c-text-color: var(--c-card-leo-has-bg-img-meta-color);
      }

      #{$this}__text {
        --c-text-color: var(--c-card-leo-has-bg-img-text-color);
      }
    }
  }
</style>
