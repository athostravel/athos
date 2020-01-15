<template>
    <div class="c-albedo-layout">
        <div class="c-albedo-layout__inner">
            <component
                :is="component"
                v-for="item in items"
                :key="item.id"
                class="c-albedo-layout__item"
                v-bind="item"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AtAlbedoLayout',
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
    .c-albedo-layout {
        --c-albedo-layout-padding: 0;
        --c-albedo-layout-border-radius: 0;
        --c-albedo-layout-background: transparent;
        --c-albedo-layout-gap: 1em;
        --c-albedo-layout-border-size-top: 0;
        --c-albedo-layout-border-size-left: 0;
        --c-albedo-layout-border-size-right: 0;
        --c-albedo-layout-border-size-bottom: #{em(1px)};
        --c-albedo-layout-border-color: var(--color-shade-200);
        --c-albedo-layout-padding: 0 0 0.6em 0;
    }
</style>

<style lang="scss">
    .c-albedo-layout {
        border-radius: var(--c-albedo-layout-border-radius);
        padding: var(--c-albedo-layout-padding);
        background-color: var(--c-albedo-layout-background);

        &__inner {
            display: grid;
            grid-gap: var(--c-albedo-layout-gap);
            grid-template-columns: repeat(3, 1fr);
        }

        &__item {
            border-top: var(--c-albedo-layout-border-size-top) solid var(--c-albedo-layout-border-color);
            border-left: var(--c-albedo-layout-border-size-left) solid var(--c-albedo-layout-border-color);
            border-right: var(--c-albedo-layout-border-size-right) solid var(--c-albedo-layout-border-color);
            border-bottom: var(--c-albedo-layout-border-size-bottom) solid var(--c-albedo-layout-border-color);
            padding: var(--c-albedo-layout-padding);
        }
    }
</style>
