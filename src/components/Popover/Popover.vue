<template>
    <AtPopper v-bind="popper" class="c-popover" :class="{'c-popover--has-border': bordered}" :style="customSize">
        <AtIcon v-if="close" class="c-popover__close" icon="heart" />
        <div v-if="arrow" class="c-popover__arrow" data-popper-arrow></div>
        <div class="c-popover__content">
            <slot />
        </div>
    </AtPopper>
</template>

<script>
    import AtPopper from '@components/Popper/Popper'
    import AtIcon from '@components/Icon/Icon'
    export default {
        name: 'AtPopover',
        components: {
            AtPopper,
            AtIcon
        },
        props: {
            popper: {
                type: Object,
                default: () => {}
            },
            arrow: {
                type: Boolean,
                default: false
            },
            close: {
                type: Boolean,
                default: true
            },
            bordered: {
                type: Boolean,
                default: false
            },
            size: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            customSize () {
                const size = {}
                if (this.size && this.size.width) {
                    size['--c-popover-max-width'] = this.size.width
                    size['--c-popover-width'] = '100%'
                }
                if (this.size && this.size.height) {
                    size['--c-popover-max-heigth'] = this.size.height
                }
                return size
            }
        }
    }
</script>

<style lang="scss">
  .c-popover {
    --c-popover-width: auto;
    --c-popover-max-width: 100%;
    --c-popover-max-heigth: auto;
    --c-popover-border-radius: var(--radius-s);
    --c-popover-background: #fff;
    --c-popover-box-shadow: var(--shadow-distant);
  }
</style>
<style lang="scss" scoped>
  .c-popover {
    z-index: var(--z-index-bishop);
    border-radius: var(--c-popover-border-radius);
    background-color: var(--c-popover-background);
    box-shadow: var(--c-popover-box-shadow);

    &--has-border {
      border-left: em(4px) solid var(--color-secondary);
    }

    &__arrow {
      position: absolute;
      border-color: #fff;
    }

    &__close {
      position: absolute;
      right: em(8px);
      top: em(8px);
    }

    &__content {
      padding: em(16px);
      width: var(--c-popover-width);
      max-height: var(--c-popover-max-heigth);
      max-width: var(--c-popover-max-width);
      overflow-y: auto;
    }

    &[data-popper-placement^="top"] {
      margin-bottom: 8px;

      .c-popover__arrow {
        bottom: -8px;
        left: calc(50% - 8px);
        margin-top: 0;
        margin-bottom: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 8px solid #fff;
      }
    }

    &[data-popper-placement^="bottom"] {
      margin-top: 8px;

      .c-popover__arrow {
        top: -8px;
        left: calc(50% - 8px);
        margin-top: 0;
        margin-bottom: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 8px solid #fff;
      }
    }

    &[data-popper-placement^="right"] {
      margin-left: 8px;

      .c-popover__arrow {
        top: calc(50% - 8px);
        left: -8px;
        margin-right: 0;
        margin-left: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 8px solid #fff;
      }
    }

    &[data-popper-placement^="left"] {
      margin-right: 8px;

      .c-popover__arrow {
        top: calc(50% - 8px);
        right: -8px;
        margin-right: 0;
        margin-left: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 8px solid #fff;
      }
    }
  }
</style>
