<template>
    <div
        class="c-icon-list"
        :class="
            {
                'c-icon-list--vertical' : vertical
            }
        ">
        <Icon
            v-for="icon in icons"
            :key="icon.id"
            class="c-icon-list__icon"
            :icon="icon"
        />
    </div>
</template>

<style lang="scss">
  :root {
    --c-icon-list-margin: 0 8px 0 0;
    --c-icon-list-vertical-margin: 0 0 8px 0;
  }
</style>

<style scoped lang="scss">
  .c-icon-list {
    $this:&;

    display: flex;
    align-items: center;

    &__icon:not(:last-child) {
      margin: #{em(var(--c-icon-list-margin))};
    }

    &--vertical {
      #{$this}__icon:not(:last-child) {
        margin: #{em(var(--c-icon-list-vertical-margin))};
      }
    }
  }
</style>

<script>

    import Icon from '../Icon/Icon'

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
