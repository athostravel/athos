<template>
    <AtPopper v-bind="popper" class="c-tooltip">
        <div class="c-tooltip__arrow" data-popper-arrow></div>
        <div class="c-tooltip__content">
            <slot />
        </div>
    </AtPopper>
</template>

<script>
    import AtPopper from '@components/Popper/Popper'
    export default {
        name: 'AtTooltip',
        components: {
            AtPopper
        },
        props: {
            popper: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-tooltip {
    z-index: 50;
    // margin: #{em(16px)};

    &__arrow {
      position: absolute;
      border-color: #fff;
      top: 0;
    }

    &__content {
      padding: 8px;
      flex: 1;
      width: 100%;
      text-align: center;
      border-radius: 0.25rem;
      user-select: none;
      background-color: #fff;
      box-shadow:
        0 15px 35px 0 rgba(51, 64, 82, 0.15),
        0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }
</style>

<style lang="scss">
  .c-tooltip {
    &[data-popper-placement^="top"] {
      margin-bottom: 8px;

      .c-tooltip__arrow {
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

      .c-tooltip__arrow {
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

      .c-tooltip__arrow {
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

      .c-tooltip__arrow {
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
