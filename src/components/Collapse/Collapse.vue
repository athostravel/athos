<template>
    <div class="c-collapse">
        <div
            id="c-collapse-header"
            v-bind="[cfg.header, header]"
            class="c-collapse__header"
            :class="[
                {
                    'c-collapse__header--right': cfg.header.align === 'right',
                    'c-collapse__header--center': cfg.header.align === 'center',
                    'c-collapse__header--icon-right': cfg.symbol.icon.align === 'right'
                }
            ]"
        >
            <div v-if="cfg.symbol.enabled" class="c-collapse__icon">
                <AtButton v-bind="cfg.symbol.button" class="c-collapse__button">
                    <AtIcon v-bind="cfg.symbol.icon" :icon="cfg.symbol.icon.icon" />
                </AtButton>
            </div>

            <AtText class="c-collapse__header-text" v-bind="[cfg.title, title]">
                {{ header.text }}
            </AtText>
        </div>

        <div
            v-toggle
            class="c-collapse__content"
            v-bind="content"
            toggle-class="is-active"
            toggle-trigger-class="is-active"
            toggle-trigger="#c-collapse-header"
        >
            <slot />
        </div>
    </div>
</template>

<script>
    import AtButton from '@components/Button/Button'
    import AtIcon from '@components/Icon/Icon'
    import AtText from '@components/Text/Text'
    import ToggleDirective from '@directives/ToggleDirective'

    export default {
        name: 'AtCollapse',
        directives: {
            toggle: ToggleDirective
        },
        components: {
            AtButton,
            AtIcon,
            AtText
        },
        props: {
            header: {
                type: Object,
                default: () => {}
            },
            title: {
                type: Object,
                default: () => {}
            },
            content: {
                type: Object,
                default: () => {}
            },
            align: {
                type: String,
                default: undefined
            },
            symbol: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    header: {
                        align: 'center',
                        gap: 'dunite',
                        inline: true
                    },
                    title: {
                        color: 'primary',
                        position: 'right',
                        weight: 'bold'
                    },
                    symbol: {
                        enabled: true,
                        button: { variant: 'icon', color: 'secondary', rounded: true, icon: true, size: 'dunite' },
                        icon: { icon: 'heart', align: 'right' }
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-collapse {
    --c-collapse-content-padding: var(--space-s) 0 0 0;
    --c-collapse-content-margin-paragraphs: 0 0 var(--space-xs) 0;
    --c-collapse-header-gap: var(--space-xs);
  }
</style>

<style lang="scss" scoped>
  .c-collapse {
    $this: &;

    display: grid;

    &__header {
      display: grid;
      grid-template-columns: 1fr auto;
      column-gap: var(--c-collapse-header-gap);
      cursor: pointer;
      align-items: center;
      justify-self: start;

      &--right {
        justify-self: end;
      }

      &--center {
        justify-self: center;
      }

      &--icon-right {
        grid-template-columns: auto 1fr;

        #{$this}__icon {
          order: 2;
        }
      }

      &.is-active {
        #{$this}__icon {
          transform: rotate(180deg);
        }
      }
    }

    &__icon {
      transition: transform 0.3s;
      transform: rotate(0deg);
    }

    &__content {
      display: none;
      padding: var(--c-collapse-content-padding);

      &.is-active {
        display: block;
      }
    }
  }
</style>
