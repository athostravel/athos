<template>
    <nav class="c-pagination">
        <a
            v-if="navFirst"
            v-bind="[cfg.navFirst, navFirst]"
            class="c-pagination__nav c-pagination__nav--first"
            :href="firstPage"
        >
            <AtIcon v-bind="[cfg.navFirst, navFirst]" class="c-pagination__icon c-pagination__icon--first" />
        </a>
        <ul class="c-pagination__list">
            <li
                v-for="page in pages"
                :key="page.id"
                class="c-pagination__item"
            >
                <component
                    :is="page.tag"
                    class="c-pagination__link"
                    :class="{
                        'c-pagination__link--selected' : page.selected,
                        'c-pagination__link--is-disabled' : page.disabled
                    }"
                    :disabled="page.tag === page.disabled"
                    :href="page.href"
                >
                    {{ page.text }}
                </component>
            </li>
        </ul>
        <a
            v-if="navLast"
            v-bind="[cfg.navLast, navLast]"
            class="c-pagination__nav c-pagination__nav--first"
            :href="lastPage"
        >
            <AtIcon v-bind="[cfg.navLast, navLast]" class="c-pagination__icon c-pagination__icon--last" />
        </a>
    </nav>
</template>

<script>
    import AtIcon from '@components/Icon/Icon.vue'

    export default {
        name: 'AtPagination',
        components: {
            AtIcon
        },
        props: {
            navFirst: {
                type: [String, Boolean],
                default: false
            },
            navLast: {
                type: [String, Boolean],
                default: false
            },
            pages: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                cfg: {
                    navFirst: {
                        icon: 'arrow-left'
                    },
                    navLast: {
                        icon: 'arrow-right'
                    }
                }
            }
        },
        computed: {
            firstPage () {
                return this.pages[0].href
            },
            lastPage () {
                return this.pages[this.pages.length - 1].href
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-pagination {
    --c-pagination-selected-background: #000;
    --c-pagination-selected-color: #fff;
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

      &--selected {
        background-color: var(--c-pagination-selected-background);
        color: var(--c-pagination-selected-color);
      }

      &--is-disabled {
        opacity: var(--c-pagination-disabled-opacity);
        pointer-events: none;
      }
    }
  }
</style>
