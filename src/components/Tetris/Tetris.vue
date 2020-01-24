<template>
    <div class="c-tetris" :class="gap && `u-gap-${gap}`">
        <AtBannerSirius
            v-for="item in items"
            :key="item.id"
            v-bind="item"
            class="c-tetris__item"
            :class="{
                'c-tetris__item--mosaic': variant === 'mosaic'
            }"
        />
    </div>
</template>

<script>
    import AtBannerSirius from '@components/BannerSirius/BannerSirius'

    export default {
        name: 'AtTetris',
        components: {
            AtBannerSirius
        },
        props: {
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
