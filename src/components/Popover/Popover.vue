<template>
    <AtPopper v-bind="popper" class="c-popover" :class="{'c-popover--has-border': bordered}">
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
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-popover {
    border-radius: 0.25rem;
    background-color: #fff;
    box-shadow:
      0 15px 35px 0 rgba(51, 64, 82, 0.15),
      0 5px 15px rgba(0, 0, 0, 0.1);

    &--has-border {
      border-left: #{em(4px)} solid var(--color-secondary);
    }

    z-index: 50;
    // margin: #{em(16px)};

    &__arrow {
      position: absolute;
      border-color: #fff;
      top: 0;
    }

    &__content {
      padding: #{em(16px)};
      width: 100%;
    }
  }
</style>

<style lang="scss">
  .c-popover {
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
