<template>
    <div
        class="c-dialog-box"
        :class="{'c-dialog-box--has-border': bordered}"
    >
        <div class="c-dialog-box__content">
            <div v-if="arrow" class="c-dialog-box__arrow" data-popper-arrow></div>
            <div v-if="close" class="c-dialog-box__close"></div>
            <slot />
        </div>
    </div>
</template>

<script>

    export default {
        name: 'AtDialogBox',
        props: {
            close: {
                type: Boolean,
                default: true
            },
            arrow: {
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
        }
    }
</script>

<style lang="scss">
  .c-dialog-box {
    --c-dialogbox-background: #fff;
    --c-dialogbox-border-radius: var(--radius-s);
    --c-dialogbox-box-shadow: var(--shadow-distant);
    --c-dialogbox-box-border: #{em(4px)} solid var(--color-secondary);
    --c-dialogbox-arrow-width: 6px;
    --c-dialogbox-arrow-height: 12px;
    --c-dialogbox-arrow-color: var(--color-secondary);
  }
</style>

<style lang="scss" scoped>
  .c-dialog-box {
    z-index: var(--z-index-bishop);
    border-radius: var(--c-dialogbox-border-radius);
    background-color: var(--c-dialogbox-background);
    box-shadow: var(--c-dialogbox-box-shadow);

    &--has-border {
      border-left: em(4px) solid var(--color-secondary);
    }

    &__content {
      padding: em(16px);
    }

    &__close {
      position: absolute;
      right: em(8px);
      top: em(8px);
    }

    &__arrow {
      position: absolute;
    }
  }

  [data-popper-placement^="bottom"] {
    margin-top: var(--c-dialogbox-arrow-height);

    .c-dialog-box__arrow {
      top: calc(#{var(--c-dialogbox-arrow-height)} * -1);
      left: calc(50% - #{var(--c-dialogbox-arrow-height)});
      margin-top: 0;
      margin-bottom: 0;
      border-left: var(--c-dialogbox-arrow-width) solid transparent;
      border-right: var(--c-dialogbox-arrow-width) solid transparent;
      border-bottom: var(--c-dialogbox-arrow-height) solid var(--c-dialogbox-arrow-color);
    }
  }
</style>
