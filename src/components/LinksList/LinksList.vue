<template>
    <div
        class="c-links-list"
        :class="{
            'c-links-list--separate': separate
        }"
    >
        {{list}}

        <div v-for="item in list" v-bind="list">

            <AtLink v-bind="[cfg.link, link]" />
        </div>
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
