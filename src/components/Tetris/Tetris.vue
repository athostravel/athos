<template>
    <div v-if="items" class="c-tetris" :class="gap && `u-gap-${gap}`">
        <component
            :is="component"
            v-for="(item, index) in items"
            :key="item.id"
            v-bind="[{ config: cfg.items[index] }, item]"
            class="c-tetris__item"
            :class="{
                'c-tetris__item--mosaic': variant === 'mosaic'
            }"
        />
    </div>
</template>

<script>
    export default {
        name: 'AtTetris',
        props: {
            component: {
                type: String,
                default: 'AtBannerSirius'
            },
            items: {
                type: Array,
                default: () => []
            },
            gap: {
                type: String,
                default: 'diorite'
            },
            variant: {
                type: String,
                default: 'mosaic'
            }
        },
        data () {
            return {
                cfg: {
                    items: []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-tetris {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    &__item {
      &--mosaic {
        &:nth-child(4n + 1) {
          grid-column: span 2;
        }
      }
    }
  }
</style>
