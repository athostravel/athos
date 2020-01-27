<template>
    <div
        class="c-links-list"
        :class="{
            'c-links-list--separate': separate
        }"
    >
<!--
        <component
            :is="component"
            v-for="link in list.item"
            :key="link.id"
            class="c-links-list__item"
            v-bind="link"
        />
        -->
    </div>
</template>

<script>
    import AtLink from '@components/Link/Link'

    export default {
        name: 'AtLink',
        components: {
            AtLink
        },
        props: {
            component: {
                type: String,
                default: 'AtLink'
            },
            separate: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss">
  .c-links-list {
    --c-links-list--separate-color: var(--color-primary);
  }
</style>

<style lang="scss" scoped>
  .c-links-list {
    $this: &;

    &--separate {
      color: var(--c-links-list--separate-color);
    }
  }
</style>
