<template>
    <component
        :is="tag"
        class="c-icon-card"
        :class="[
            gap && `u-gap-${gap}`,
            {
                'c-icon-card--inline': inline,
                'c-icon-card--icon-left': position === 'left',
                'c-icon-card--icon-bottom': position === 'bottom',
                'c-icon-card--icon-right': position === 'right',
                'c-icon-card--align-center': align === 'center',
                'c-icon-card--align-right': align === 'right'
            }
        ]"
    >
        <div class="c-icon-card__icon">
            <slot name="icon">
                <AtIcon v-bind="[cfg.icon, computedIcon]" />
            </slot>
        </div>
        <div class="c-icon-card__box">
            <slot />
        </div>
    </component>
</template>

<script>
    import AtIcon from '@components/Icon/Icon'

    export default {
        name: 'AtIconCard',
        components: {
            AtIcon
        },
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            icon: {
                type: [String, Object],
                default: undefined
            },
            position: {
                type: String,
                default: 'left'
            },
            align: {
                type: String,
                default: 'left'
            },
            gap: {
                type: String,
                default: undefined
            },
            inline: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                cfg: {
                    icon: {}
                }
            }
        },
        computed: {
            computedIcon () {
                return typeof this.icon === 'object' ? this.icon : { icon: this.icon }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-icon-card {
    $this: &;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "icon" "box";
    align-items: start;
    align-content: start;
    grid-gap: 0.5em;

    &--inline {
      display: inline-grid;
    }

    &__icon {
      grid-area: icon;
    }

    &__box {
      grid-area: box;
    }

    &--align-center {
      justify-items: center;
    }

    &--align-right {
      justify-items: right;
    }

    &--icon-left {
      grid-template-columns: auto 1fr;
      grid-template-areas: "icon box";
    }

    &--icon-right {
      grid-template-columns: 1fr auto;
      grid-template-areas: "box icon";
    }

    &--icon-bottom {
      grid-template-areas: "box" "icon";
    }
  }
</style>
