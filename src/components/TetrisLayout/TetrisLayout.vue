<template>
    <div class="c-tetris-layout">
        <div class="c-tetris-layout__inner">
            <component
                :is="component"
                v-for="item in items"
                :key="item.id"
                class="c-tetris-layout__item"
                v-bind="item"
            />
        </div>
    </div>
</template>

<script>
  //  import BannerSirius from '@components/BannerSirius/BannerSirius'
    export default {
        name: 'AtTetrisLayout',
        components: {
            //  BannerSirius
        },
        props: {
            items: {
                type: Array,
                default: () => []
            },
            component: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .c-tetris-layout {
    --c-tetris-layout-padding: 0;
    --c-tetris-layout-border-radius: 0;
    --c-tetris-layout-background: transparent;
    --c-tetris-layout-gap: 1em;
  }
</style>

<style lang="scss">
  .c-tetris-layout {
    border-radius: var(--c-tetris-layout-border-radius);
    padding: var(--c-tetris-layout-padding);
    background-color: var(--c-tetris-layout-background);

    &__inner {
      display: grid;
      grid-gap: var(--c-tetris-layout-gap);
      grid-template-columns: repeat(4, 1fr);
    }

    &__item {
      grid-column: span 1;

      &:nth-child(4n + 1) {
        grid-column: span 2;
      }
    }
  }
</style>
