<template>
    <div class="c-albedo-layout">
        <AtText
            v-if="header"
            v-bind="[cfg.header, header]"
            class="c-albedo-layout__header"
        />

        <div class="c-albedo-layout__inner">
            <div
                v-for="item in items"
                :key="item.id"
                class="c-albedo-layout__col"
                v-bind="item"
            >
                <AtText
                    v-if="item.title"
                    v-bind="[cfg.title, item.title]"
                    :text="item.title.text"
                    class="c-albedo-layout__title"
                />

                <component
                    :is="component"
                    v-for="card in item.cards"
                    :key="card.id"
                    class="c-albedo-layout__item"
                    v-bind="card"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtAlbedoLayout',
        components: {
            AtText
        },
        props: {
            header: {
                type: Object,
                default: () => {}
            },
            title: {
                type: Object,
                default: () => {}
            },
            items: {
                type: Array,
                default: () => []
            },
            cards: {
                type: Array,
                default: () => []
            },
            component: {
                type: String,
                default: undefined
            }
        },
        data () {
            return {
                cfg: {
                    header: {
                        tag: 'h2'
                    },
                    title: {
                        tag: 'h3'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-albedo-layout {
    --c-albedo-layout-padding: 0;
    --c-albedo-layout-border-radius: 0;
    --c-albedo-layout-background: transparent;
    --c-albedo-layout-gap: var(--space-xl);
    --c-albedo-layout-col-gap: var(--space-s);
    --c-albedo-layout-item-border-size-top: 0;
    --c-albedo-layout-item-border-size-left: 0;
    --c-albedo-layout-item-border-size-right: 0;
    --c-albedo-layout-item-border-size-bottom: #{em(1px)};
    --c-albedo-layout-item-border-color: var(--color-shade-200);
    --c-albedo-layout-item-padding: 0 0 0.6em 0;
    --c-albedo-layout-title-border-size-top: 0;
    --c-albedo-layout-title-border-size-left: 0;
    --c-albedo-layout-title-border-size-right: 0;
    --c-albedo-layout-title-border-size-bottom: #{em(1px)};
    --c-albedo-layout-title-border-color: var(--color-shade-200);
    --c-albedo-layout-title-padding: 0 0 0.6em 0;
    --c-albedo-layout-title-text-align: center;
    --c-albedo-layout-title-font-size: var(--font-size-2xl);
    --c-albedo-layout-title-font-weight: 600;
    --c-albedo-layout-title-color: var(--color-secondary);
    --c-albedo-layout-header-text-align: center;
    --c-albedo-layout-header-font-size: var(--font-size-5xl);
    --c-albedo-layout-header-font-weight: 900;
    --c-albedo-layout-header-color: var(--color-primary);
    --c-albedo-layout-header-margin: 0 0 1em 0;
    --c-albedo-layout-header-display: block;
  }
</style>

<style lang="scss" scoped>
  .c-albedo-layout {
    border-radius: var(--c-albedo-layout-border-radius);
    padding: var(--c-albedo-layout-padding);
    background-color: var(--c-albedo-layout-background);

    &__inner {
      display: grid;
      grid-gap: var(--c-albedo-layout-gap);
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
    }

    &__header {
      --c-text-color: var(--c-albedo-layout-header-color);
      --c-text-font-size: var(--c-albedo-layout-header-font-size);
      --c-text-font-weight: var(--c-albedo-layout-header-font-weight);

      display: var(--c-albedo-layout-header-display);
      margin: var(--c-albedo-layout-header-margin);
      text-align: var(--c-albedo-layout-header-text-align);
    }

    &__col {
      display: grid;
      grid-gap: var(--c-albedo-layout-col-gap);
    }

    &__item {
      border-top: var(--c-albedo-layout-item-border-size-top) solid var(--c-albedo-layout-item-border-color);
      border-left: var(--c-albedo-layout-item-border-size-left) solid var(--c-albedo-layout-item-border-color);
      border-right: var(--c-albedo-layout-item-border-size-right) solid var(--c-albedo-layout-item-border-color);
      border-bottom: var(--c-albedo-layout-item-border-size-bottom) solid var(--c-albedo-layout-item-border-color);
      padding: var(--c-albedo-layout-item-padding);
    }

    &__title {
      --c-text-font-size: var(--c-albedo-layout-title-font-size);
      --c-text-font-weight: var(--c-albedo-layout-title-font-weight);
      --c-text-color: var(--c-albedo-layout-title-color);

      border-top: var(--c-albedo-layout-item-border-size-top) solid var(--c-albedo-layout-item-border-color);
      border-left: var(--c-albedo-layout-item-border-size-left) solid var(--c-albedo-layout-item-border-color);
      border-right: var(--c-albedo-layout-item-border-size-right) solid var(--c-albedo-layout-item-border-color);
      border-bottom: var(--c-albedo-layout-item-border-size-bottom) solid var(--c-albedo-layout-item-border-color);
      text-align: var(--c-albedo-layout-title-text-align);
      padding: var(--c-albedo-layout-item-padding);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
