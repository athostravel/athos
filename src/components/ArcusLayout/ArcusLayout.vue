<template>
    <div class="c-arcus-layout">
        <AtText
            v-if="header"
            v-bind="[cfg.header, header]"
            class="c-arcus-layout__header"
        >
            {{ header.text }}
        </AtText>

        <div class="c-arcus-layout__inner">
            <div
                v-for="item in items"
                :key="item.id"
                class="c-arcus-layout__col"
            >
                <AtText
                    v-if="item.title"
                    v-bind="[cfg.title, item.title]"
                    class="c-arcus-layout__title"
                >
                    {{ item.title.text }}
                </AtText>

                <component
                    :is="component"
                    v-for="card in item.cards"
                    :key="card.id"
                    class="c-arcus-layout__item"
                    v-bind="card"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtArcusLayout',
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
                        color: 'primary',
                        size: 'scoria',
                        tag: 'h2',
                        weight: 'bold'
                    },
                    title: {
                        color: 'secondary',
                        tag: 'h3',
                        size: 'basalt',
                        weight: 'bold'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-arcus-layout {
    --c-arcus-layout-padding: 0;
    --c-arcus-layout-border-radius: 0;
    --c-arcus-layout-background: transparent;
    --c-arcus-layout-gap: var(--space-m);
    --c-arcus-layout-align-items: start;
    --c-arcus-layout-col-gap: var(--space-s);
    --c-arcus-layout-item-border-size-top: 0;
    --c-arcus-layout-item-border-size-left: 0;
    --c-arcus-layout-item-border-size-right: 0;
    --c-arcus-layout-item-border-size-bottom: #{em(1px)};
    --c-arcus-layout-item-border-color: var(--color-shade-200);
    --c-arcus-layout-item-padding: 0 0 0.6em 0;
    --c-arcus-layout-title-border-size-top: 0;
    --c-arcus-layout-title-border-size-left: 0;
    --c-arcus-layout-title-border-size-right: 0;
    --c-arcus-layout-title-border-size-bottom: #{em(1px)};
    --c-arcus-layout-title-border-color: var(--color-shade-200);
    --c-arcus-layout-title-padding: 0 0 0.6em 0;
    --c-arcus-layout-title-text-align: center;
    //--c-arcus-layout-title-font-size: var(--font-size-2xl);
    //--c-arcus-layout-title-font-weight: 600;
    --c-arcus-layout-title-color: var(--color-secondary);
    --c-arcus-layout-header-text-align: center;
    //--c-arcus-layout-header-font-size: var(--font-size-5xl);
    //--c-arcus-layout-header-font-weight: 900;
    --c-arcus-layout-header-color: var(--color-primary);
    --c-arcus-layout-header-margin: 0 0 1em 0;
    --c-arcus-layout-header-display: block;
  }
</style>

<style lang="scss" scoped>
  .c-arcus-layout {
    border-radius: var(--c-arcus-layout-border-radius);
    padding: var(--c-arcus-layout-padding);
    background-color: var(--c-arcus-layout-background);

    &__inner {
      align-items: var(--c-arcus-layout-align-items);
      display: grid;
      grid-gap: var(--c-arcus-layout-gap);
      grid-auto-columns: 1fr;
      grid-auto-flow: column;
    }

    &__header {
      display: var(--c-arcus-layout-header-display);
      margin: var(--c-arcus-layout-header-margin);
      text-align: var(--c-arcus-layout-header-text-align);
    }

    &__col {
      display: grid;
      grid-gap: var(--c-arcus-layout-col-gap);
    }

    &__item {
      border-top: var(--c-arcus-layout-item-border-size-top) solid var(--c-arcus-layout-item-border-color);
      border-left: var(--c-arcus-layout-item-border-size-left) solid var(--c-arcus-layout-item-border-color);
      border-right: var(--c-arcus-layout-item-border-size-right) solid var(--c-arcus-layout-item-border-color);
      border-bottom: var(--c-arcus-layout-item-border-size-bottom) solid var(--c-arcus-layout-item-border-color);
    }

    &__title {
      border-top: var(--c-arcus-layout-item-border-size-top) solid var(--c-arcus-layout-item-border-color);
      border-left: var(--c-arcus-layout-item-border-size-left) solid var(--c-arcus-layout-item-border-color);
      border-right: var(--c-arcus-layout-item-border-size-right) solid var(--c-arcus-layout-item-border-color);
      border-bottom: var(--c-arcus-layout-item-border-size-bottom) solid var(--c-arcus-layout-item-border-color);
      text-align: var(--c-arcus-layout-title-text-align);
      padding: var(--c-arcus-layout-title-padding);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
