<template>
    <nav class="c-pagination">
        <a
            v-if="navFirst"
            class="c-pagination__nav c-pagination__nav--first"
            :href="navFirstHref"
        >
            <Icon :icon="navFirst" />
        </a>
        <ul class="c-pagination__list">
            <li
                v-for="(value, index) in pagination.items"
                :key="index"
                class="c-pagination__item"
            >
                <component
                    :is="value.tag"
                    class="c-pagination__link"
                    :class="{
                        'c-pagination__link--is-active' : value.active,
                        'c-pagination__link--is-disabled' : value.disabled
                    }"
                    :disabled="value.tag === 'button' && value.disabled"
                    :href="value.tag === 'a' && value.href"
                >
                    {{ value.text }}
                </component>
            </li>
        </ul>
        <a
            v-if="navLast"
            class="c-pagination__nav c-pagination__nav--first"
            :href="navLastHref"
        >
            <Icon :icon="navLast" />
        </a>
    </nav>
</template>

<script>
    import Icon from '@components/Icon/Icon.vue'

    export default {
        name: 'AtPagination',
        components: {
            Icon
        },
        props: {
            navFirst: {
                type: [String, Boolean],
                default: 'arrow-left'
            },
            navFirstHref: {
                type: [String, Boolean],
                default: '#1'
            },
            navLast: {
                type: [String, Boolean],
                default: 'arrow-right'
            },
            navLastHref: {
                type: [String, Boolean],
                default: '#24'
            }
        },
        data: function () {
            return {
                pagination: {
                    items: [
                        {
                            text: '1',
                            tag: 'a',
                            href: '#1',
                            active: true
                        },
                        {
                            text: '2',
                            tag: 'a',
                            href: '#2'
                        },
                        {
                            text: '3',
                            tag: 'a',
                            href: '#3'
                        },
                        {
                            text: '...',
                            tag: 'span'
                        },
                        {
                            text: '22',
                            tag: 'a',
                            href: '#22'
                        },
                        {
                            text: '23',
                            tag: 'a',
                            href: '#23'
                        },
                        {
                            text: '24',
                            tag: 'a',
                            href: '#24',
                            disabled: true
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-pagination {
    --c-pagination-active-background: #000;
    --c-pagination-active-color: #fff;
    --c-pagination-disabled-opacity: 0.7;
    --c-pagination-nav-first-margin-right: var(--space-xs);
    --c-pagination-nav-last-margin-left: var(--space-xs);
    --c-pagination-link-padding: var(--space-2xs) var(--space-xs);
  }
</style>

<style lang="scss" scoped>
  .c-pagination {
    $this: &;

    display: flex;

    &__list {
      display: flex;
    }

    &__item {
      margin-right: var(--space-xs);

      &:last-child {
        margin-right: 0;
      }
    }

    &__nav {
      &--first {
        cursor: pointer;
        margin-right: var(--c-pagination-nav-first-margin-right);
      }

      &--last {
        cursor: pointer;
        margin-left: var(--c-pagination-nav-last-margin-left);
      }
    }

    &__link {
      padding: var(--c-pagination-link-padding);

      &--is-active {
        background-color: var(--c-pagination-active-background);
        color: var(--c-pagination-active-color);
      }

      &--is-disabled {
        opacity: var(--c-pagination-disabled-opacity);
        pointer-events: none;
      }
    }
  }
</style>
