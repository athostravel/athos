<template>
    <div
        class="c-links-list"
        :class="{
            'c-links-list--separate': separate
        }"
    >
        <AtLink
            v-for="link in items"
            :key="link.id"
            v-bind="cfg.link"
            :href="link.href"
            :target="link.target"
            class="c-links-list__item"
        >
            <AtText v-bind="cfg.text">
                {{ link.text }}
            </AtText>
        </AtLink>
    </div>
</template>

<script>
    import AtText from '@components/Text/Text'
    import AtLink from '@components/Link/Link'

    export default {
        name: 'AtLinksList',
        components: {
            AtLink,
            AtText
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
        },
        data () {
            return {
                cfg: {
                    text: {
                        tag: 'span'
                    },
                    link: {}
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-links-list {
    --c-links-list--separate-color: var(--color-secondary);
    --c-links-list--separate-gap: 0 var(--space-2xs);
    --c-links-list--separate-gap-first-item: 0;
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
          align-items: center;
          color: var(--c-links-list--separate-color);
          content: "|";
          display: flex;
          font-size: var(--c-links-list--separate-size);
          margin: var(--c-links-list--separate-gap);
        }

        &:first-child {
          &::before {
            content: "";
            margin: var(--c-links-list--separate-gap-first-item);
          }
        }
      }
    }
  }
</style>
