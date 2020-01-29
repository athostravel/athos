<template>
    <ul
        class="c-links-list"
        :class="{
            'c-links-list--vertical': vertical,
            'c-links-list--position-center': position === 'center',
            'c-links-list--position-right': position === 'right',
            'c-links-list--border-bottom': cfg.border.position === 'bottom',
            'c-links-list--border-top': cfg.border.position === 'top',
            'c-links-list--border-right': cfg.border.position === 'right',
            'c-links-list--border-left': cfg.border.position === 'left',
            'c-links-list--border-color-white': cfg.border.color === 'white',
            'c-links-list--border-color-secondary': cfg.border.color === 'secondary',
            'c-links-list--symbol-color-primary': symbolColor === 'primary'
        }"
    >
        <li
            v-for="link in items"
            :key="link.id"
            class="c-links-list__item"
            :data-detail="symbol"
        >
            <AtText v-bind="cfg.text">
                <AtLink
                    v-bind="cfg.link"
                    :href="link.href"
                    :target="link.target"
                    class="c-links-list__link"
                >
                    {{ link.text }}
                </AtLink>
            </AtText>
        </li>
    </ul>
</template>

<script>
    import AtText from '@components/Text/Text'
    import AtLink from '@components/Link/Link'

    export default {
        name: 'AtLinksList',
        components: {
            AtLink,
            AtText
        },
        props: {
            symbol: {
                type: [String, Boolean],
                default: '|'
            },
            symbolColor: {
                type: String,
                default: 'secondary'
            },
            vertical: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'left'
            },
            items: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                cfg: {
                    text: {
                        tag: 'span'
                    },
                    link: {
                        color: 'primary'
                    },
                    border: {}
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-links-list {
    --c-links-list--symbol-color: var(--color-secondary);
    --c-links-list--symbol-color-primary: var(--color-primary);
    --c-links-list--symbol-margin: 0 var(--space-xs);
    --c-links-list--border-color-primary: var(--color-primary);
    --c-links-list--border-color-secondary: var(--color-secondary);
    --c-links-list--border-color-white: #fff;
  }
</style>

<style lang="scss" scoped>
  .c-links-list {
    $this: &;

    display: flex;
    flex-wrap: wrap;

    &--position-center {
      justify-content: center;
    }

    &--position-right {
      justify-content: flex-end;
    }

    &--border {
      &-bottom {
        #{$this}__item {
          border-bottom: 1px solid var(--c-links-list--border-color-primary);
        }
      }

      &-color-white {
        #{$this}__item {
          border-color: var(--c-links-list--border-color-white);
        }
      }

      &-color-secondary {
        #{$this}__item {
          border-color: var(--c-links-list--border-color-secondary);
        }
      }
    }

    &__item {
      align-items: center;
      display: flex;

      &:not(:last-child) {
        &::after {
          color: var(--c-links-list--symbol-color);
          content: attr(data-detail);
          margin: var(--c-links-list--symbol-margin);
        }
      }
    }

    &--symbol-color-primary {
      #{$this}__item {
        &:not(:last-child) {
          &::after {
            color: var(--c-links-list--symbol-color-primary);
          }
        }
      }
    }

    &--vertical {
      flex-direction: column;

      #{$this}__item {
        &[data-detail] {
          position: relative;
          margin-left: 0.8em;

          &::before {
            color: var(--c-links-list--symbol-color);
            content: attr(data-detail);
            position: absolute;
            left: -0.8em;
          }

          &::after {
            display: none;
          }
        }
      }

      &#{$this}--symbol-color-primary {
        #{$this}__item {
          &::before {
            color: var(--c-links-list--symbol-color-primary);
          }
        }
      }
    }
  }
</style>
