<template>
    <a
        class="c-link"
        :href="href"
        :target="target"
        :class="{
            'c-link--underline': underline,
            'c-link--secondary': secondary
        }"
    >
        <slot />
    </a>
</template>

<script>
    export default {
        name: 'AtLink',
        props: {
            underline: {
                type: Boolean,
                default: false
            },
            secondary: {
                type: Boolean,
                default: false
            },
            href: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
    .c-link {
        --c-link--color-primary: var(--color-primary);
        --c-link--color-secondary: var(--color-secondary);
    }
</style>

<style lang="scss" scoped>
    .c-link {
        $this: &;

        color: var(--c-link--color-primary);
        transition: .3s;

        &--secondary,
        &:hover {
            color: var(--c-link--color-secondary);
        }

        &--secondary {
            &:hover {
                color: var(--c-link--color-primary);
            }
        }

        &--underline {
            text-decoration: underline;
        }
     }
</style>
