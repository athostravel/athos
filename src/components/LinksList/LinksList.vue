<template>
    <div
        class="c-links-list"
        :class="{
            'c-links-list--separate': separate,
            'c-links-list--vertical': orientation === 'vertical',
            'c-links-list--separate-color-secondary': separateColor === 'secondary',
            'c-links-list--separate-color-white': separateColor === 'white'
        }"
    >
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'AtLink',
        props: {
            separate: {
                type: Boolean,
                default: true
            },
            orientation: {
                type: String,
                default: 'horizontal'
            },
            separateColor: {
                type: String,
                default: 'primary'
            }
        }
    }
</script>

<style lang="scss">
    .c-links-list {
        --c-links-list--color-primary: var(--color-primary);
        --c-links-list--separate-color-primary: var(--color-primary);
        --c-links-list--separate-color-secondary: var(--color-secondary);
        --c-links-list--separate-color-white: var(--color-primary);
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
