<template>
    <div
        class="c-links-list"
        :class="{
            'c-links-list--separate': separate
        }"
    >
        <AtLink
            v-for="item in items"
            :key="item.id"
            :href="item.href"
            :target="item.target"
            class="c-links-list__item"
        >
            {{ item.text }}
        </AtLink>
    </div>
</template>

<script>
    import AtLink from '@components/Link/Link'

    export default {
        name: 'AtLinksList',
        components: {
            AtLink
        },
        props: {
            separate: {
                type: Boolean,
                default: true
            },
            items: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss">
  .c-links-list {
    --c-links-list--separate-color: var(--color-secondary);
    --c-links-list--separate-gap: 0 var(--space-2xs);
  }
</style>

<style lang="scss" scoped>
  .c-links-list {
    $this: &;

    display: flex;
    flex-wrap: wrap;

    &__item {
      display: inline-flex;
    }

    &--separate {
      #{$this}__item {
        &::before {
          color: var(--c-links-list--separate-color);
          content: "|";
          margin: var(--c-links-list--separate-gap);
        }

        &:first-child {
          &::before {
            content: "";
          }
        }
      }
    }
  }
</style>
