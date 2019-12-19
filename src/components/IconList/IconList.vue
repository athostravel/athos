<template>
    <div
        class="c-icon-list"
        :class="{ 'c-icon-list--vertical' : vertical }"
    >
        <Icon
            v-for="icon in icons"
            :key="icon.id"
            class="c-icon-list__icon"
            v-bind="icon"
        />
    </div>
</template>

<script>
    import Icon from '@components/Icon/Icon'

    export default {
        name: 'AtIconList',
        components: {
            Icon
        },
        props: {
            vertical: {
                type: Boolean,
                default: false
            },
            icons: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-icon-list {
    $this: &;

    display: flex;
    align-items: center;

    &__icon {
      & + & {
        margin-left: #{em(8px)};
      }
    }

    &--vertical {
      flex-direction: column;
      align-items: flex-start;

      #{$this}__icon {
        & + #{$this}__icon {
          margin-left: 0;
          margin-top: #{em(8px)};
        }
      }
    }
  }
</style>
