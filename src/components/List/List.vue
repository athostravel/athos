<template>
    <div
        class="c-list"
        :class="{'c-list--vertical': vertical}"
    >
        <component
            :is="component"
            v-for="item in items"
            :key="item.id"
            class="c-list__item"
            v-bind="item"
        />
    </div>
</template>

<script>
    export default {
        name: 'AtList',
        props: {
            items: {
                type: Array,
                default: () => []
            },
            vertical: {
                type: Boolean,
                default: false
            },
            component: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">
  .c-list {
    --c-list-margin: 1em;
  }
</style>
<style lang="scss">
  .c-list {
    $this: &;

    display: flex;
    align-items: center;

    &__item {
      &:not(.c-list--vertical) {
        margin-right: var(--c-list-margin);

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &--vertical {
      flex-direction: column;
      align-items: flex-start;

      #{$this}__item {
        margin-bottom: var(--c-list-margin);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
