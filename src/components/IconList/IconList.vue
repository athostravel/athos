<template>
    <div
        class="c-icon-list"
        :class="{'c-icon-list--vertical' : vertical}"
    >
        <Icon
            v-for="icon in icons"
            :key="icon.id"
            class="c-icon-list__icon"
            :icon="icon"
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

<style scoped lang="scss">
  .c-icon-list {
    $this:&;

    display: flex;
    align-items: center;

    &__icon:not(:last-child) {
      margin: #{em(8px)};
    }

    &--vertical {
      #{$this}__icon:not(:last-child) {
        margin: #{em(8px)};
      }
    }
  }
</style>
