<template>
    <AtPopper v-bind="popper" class="c-tooltip">
        <div v-if="arrow" class="c-tooltip__arrow" data-popper-arrow></div>
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
            },
            arrow: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss">
  .c-tooltip {
    --c-tooltip-color: #fff;
    --c-tooltip-border-radius: var(--radius-s);
    --c-tooltip-background: var(--color-secondary);
    --c-tooltip-box-shadow: var(--shadow-distant);
    --c-tooltip-border-radius: var(--radius-s);
    --c-tooltip-arrow-width: 6px;
    --c-tooltip-arrow-height: 12px;
    --c-tooltip-arrow-color: var(--color-secondary);
  }

</style>

<style lang="scss" scoped>
  .c-tooltip {
    z-index: var(--z-index-bishop);
    background: var(--c-tooltip-background);
    box-shadow: var(--c-tooltip-box-shadow);
    border-radius: var(--c-tooltip-border-radius);

    &__arrow {
      position: absolute;
      border-color: var(--c-tooltip-arrow-color);
    }

    &__content {
      padding: em(8px) em(16px);
      width: 100%;
      text-align: center;
      color: var(--c-tooltip-color);
    }

    &[data-popper-placement^="top"] {
      margin-bottom: var(--c-tooltip-arrow-height);

      .c-tooltip__arrow {
        bottom: calc(#{var(--c-tooltip-arrow-height)} * -1);
        left: calc(50% - #{var(--c-tooltip-arrow-height)});
        margin-top: 0;
        margin-bottom: 0;
        border-left: var(--c-tooltip-arrow-width) solid transparent;
        border-right: var(--c-tooltip-arrow-width) solid transparent;
        border-top: var(--c-tooltip-arrow-height) solid var(--c-tooltip-arrow-color);
      }
    }

    &[data-popper-placement^="bottom"] {
      margin-top: var(--c-tooltip-arrow-height);

      .c-tooltip__arrow {
        top: calc(#{var(--c-tooltip-arrow-height)} * -1);
        left: calc(50% - #{var(--c-tooltip-arrow-height)});
        margin-top: 0;
        margin-bottom: 0;
        border-left: var(--c-tooltip-arrow-width) solid transparent;
        border-right: var(--c-tooltip-arrow-width) solid transparent;
        border-bottom: var(--c-tooltip-arrow-height) solid var(--c-tooltip-arrow-color);
      }
    }

    &[data-popper-placement^="right"] {
      margin-left: var(--c-tooltip-arrow-height);

      .c-tooltip__arrow {
        left: calc(#{var(--c-tooltip-arrow-height)} * -1);
        top: calc(50% - #{var(--c-tooltip-arrow-height)});
        margin-right: 0;
        margin-left: 0;
        border-top: var(--c-tooltip-arrow-width) solid transparent;
        border-bottom: var(--c-tooltip-arrow-width) solid transparent;
        border-right: var(--c-tooltip-arrow-height) solid var(--c-tooltip-arrow-color);
      }
    }

    &[data-popper-placement^="left"] {
      margin-right: var(--c-tooltip-arrow-height);

      .c-tooltip__arrow {
        top: calc(50% - #{var(--c-tooltip-arrow-height)});
        right: calc(#{var(--c-tooltip-arrow-height)} * -1);
        margin-right: 0;
        margin-left: 0;
        border-top: var(--c-tooltip-arrow-width) solid transparent;
        border-bottom: var(--c-tooltip-arrow-width) solid transparent;
        border-left: var(--c-tooltip-arrow-height) solid var(--c-tooltip-arrow-color);
      }
    }
  }
</style>
