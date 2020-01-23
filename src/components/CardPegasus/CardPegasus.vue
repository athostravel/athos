<template>
    <div class="c-card-pegasus">
        <div
            class="c-card-pegasus__header"
            :class="{
                'c-card-pegasus__header--no-bg' : headerTransparent
            }"
        >
            <div v-if="cfg.highlight.enabled" class="c-card-pegasus__header-actions">
                <AtText
                    v-if="cfg.highlight.enabled"
                    v-bind="[cfg.highlight, highlight]"
                    class="c-card-pegasus__highlight"
                    :class="cfg.highlight.bgColor && `u-bg-color-${cfg.highlight.bgColor}`"
                >
                    {{highlight.text}}
                </AtText>

                <div v-if="cfg.map.enabled || cfg.map.enabled" class="c-card-pegasus__icons">
                    <div v-if="cfg.map.enabled" class="c-card-pegasus__icon">
                        <AtButton v-bind="cfg.map.button" class="c-card-pegasus__button">
                            <AtIcon v-bind="cfg.map.icon" :icon="cfg.map.icon.icon" :rounded="cfg.map.button.rounded" />
                        </AtButton>
                    </div>

                    <div v-if="cfg.favourite.enabled" class="c-card-pegasus__icon">
                        <AtButton v-bind="cfg.favourite.button" class="c-card-pegasus__button">
                            <AtIcon v-bind="cfg.favourite.icon" :icon="cfg.favourite.icon.icon" :rounded="cfg.favourite.button.rounded" />
                        </AtButton>
                    </div>
                </div>
            </div>

            <div v-if="previous || meta || text" class="c-card-pegasus__header-info">
                <AtText v-if="previous" v-bind="[cfg.previous, previous]" class="c-card-pegasus__previous">
                    {{previous.text}}
                </AtText>

                <AtText v-if="meta" v-bind="[cfg.meta, meta]" class="c-card-pegasus__meta">
                    {{meta.text}}
                </AtText>

                <AtText v-if="text" v-bind="[cfg.text, text]" class="c-card-pegasus__text">
                    {{text.text}}
                </AtText>
            </div>
        </div>

        <AtBanner v-bind="[cfg.banner, image]" />

        <div class="c-card-pegasus__inner">
            <div v-if="title || description" class="c-card-pegasus__box">
                <AtText v-if="title" v-bind="[cfg.title, title]" class="c-card-pegasus__title">
                    {{title.text}}
                </AtText>
                <AtText v-if="description" v-bind="description" class="c-card-pegasus__description">
                    {{description.text}}
                </AtText>
            </div>

            <div v-if="price" class="c-card-pegasus__actions">
                <AtPriceButton
                    v-if="price && price.value"
                    v-bind="[price, { href, config: cfg.priceButton }]"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import AtBanner from '@components/Banner/Banner'
    import AtPriceButton from '@components/PriceButton/PriceButton'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtCardPegasus',
        components: {
            AtBanner,
            AtPriceButton,
            AtText
        },
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            headerTransparent: {
                type: Boolean,
                default: false
            },
            highlight: {
                type: Object,
                default: () => {}
            },
            map: {
                type: Object,
                default: () => {}
            },
            favourite: {
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
                    highlight: {
                        enabled: true,
                        bgColor: 'secondary',
                        color: 'white',
                        tag: 'div'
                    },
                    map: {
                        enabled: true,
                        button: { color: 'white', rounded: true, icon: true, size: 'basalt' },
                        icon: { icon: 'heart' }
                    },
                    favourite: {
                        enabled: true,
                        button: { color: 'white', rounded: true, icon: true, size: 'basalt' },
                        icon: { icon: 'heart' }
                    },
                    previous: {
                        //color: 'white',
                        size: 'dacite',
                        tag: 'div'
                    },
                    meta: {
                        color: 'secondary',
                        tag: 'h3',
                        size: 'basalt',
                        weight: 'bold'
                    },
                    text: {
                        //color: 'white',
                        size: 'dacite',
                        tag: 'h3'
                    },
                    title: {
                        color: 'primary',
                        size: 'obsidian',
                        weight: 'bold',
                        tag: 'h4'
                    },
                    description: {
                        size: 'dunite'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-card-pegasus {
    --c-card-pegasus-header-padding: var(--space-s) var(--space-m);
    --c-card-pegasus-header-background: #fff;
    --c-card-pegasus-header-actions-padding: var(--space-s) var(--space-m) 0 var(--space-m);
    --c-card-pegasus-icon-margin: 0 0 0 var(--space-2xs);
    --c-card-pegasus-box-padding: var(--space-s);
    --c-card-pegasus-title-margin: 0 0 var(--space-xs) 0;
    --c-card-pegasus-inner-background: #fff;
    --c-card-pegasus-highlight-padding: 0.25em 1em;
  }
</style>

<style lang="scss" scoped>
  .c-card-pegasus {
    $this: &;

    &__box {
      padding: var(--c-card-pegasus-box-padding);
    }

    &__highlight {
        padding: var(--c-card-pegasus-highlight-padding);
    }

    &__header {
      background: var(--c-card-pegasus-header-background);

      &--no-bg {
        background: transparent;
      }

      &-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--c-card-pegasus-header-actions-padding);
      }

      &-info {
        padding: var(--c-card-pegasus-header-padding);
      }
    }

    &__icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      flex-grow: 1;
    }

    &__icon {
      & + & {
        margin: var(--c-card-pegasus-icon-margin);
      }
    }

    &__inner {
      background: var(--c-card-pegasus-inner-background);
    }

    &__info {
      display: flex;
      flex-direction: column;
    }

    &__title {
      margin: var(--c-card-pegasus-title-margin);
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
