<template>
    <div
        class="c-links-list"
        :class="{
            'c-links-list--separate': separate
        }"
    >
        <AtText
            v-for="link in items"
            :key="link.id"
            class="c-links-list__text"
            v-bind="cfg.text"
        >
            <AtLink
                v-bind="cfg.link"
                :href="link.href"
                :target="link.target"
                class="c-links-list__link"
            >
                {{ link.text }}
            </AtLink>
        </AtText>
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
    --c-links-list--separate-gap: 0 var(--space-xs);
    --c-links-list--separate-gap-first-item: 0;
  }
</style>

<style lang="scss" scoped>
  .c-links-list {
    $this: &;

    display: flex;
    flex-wrap: wrap;

    &__text {
      display: inline-flex;
    }

    &--separate {
      #{$this}__text {
        &::after {
          align-items: center;
          color: var(--c-links-list--separate-color);
          content: "|";
          display: flex;
          font-size: var(--c-links-list--separate-size);
          margin: var(--c-links-list--separate-gap);
        }

        &:last-child {
          &::after {
            content: "";
            margin: var(--c-links-list--separate-gap-first-item);
          }
        }
      }
    }
  }
</style>
