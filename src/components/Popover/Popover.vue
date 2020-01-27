<template>
    <AtPopper v-bind="popper" class="c-popover" :class="{'c-popover--has-border': bordered}" :style="customSize">
        <div v-if="arrow" class="c-popover__arrow" data-popper-arrow></div>
        <div class="c-popover__content">
            <slot />
        </div>
    </AtPopper>
</template>

<script>
    import AtPopper from '@components/Popper/Popper'
    export default {
        name: 'AtPopover',
        components: {
            AtPopper
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
    width: var(--c-popover-width);
    border-radius: var(--c-popover-border-radius);
    background-color: var(--c-popover-background);
    box-shadow: var(--c-popover-box-shadow);
    max-height: var(--c-popover-max-heigth);
    max-width: var(--c-popover-max-width);
    overflow-y: auto;

    &--has-border {
      border-left: #{em(4px)} solid var(--color-secondary);
    }

    &__arrow {
      position: absolute;
      border-color: #fff;
      top: 0;
    }

    &__content {
      padding: em(16px);
      width: 100%;
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
