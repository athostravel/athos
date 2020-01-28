<template>
    <div class="c-footer">
        <div class="c-footer__inner">
            <AtLinksList
                class="c-footer__links-list"
                v-for="list in lists"
                :key="list.id"
                items="list"
            >
                {{list.items}}
            </AtLinksList>
        </div>
    </div>
</template>

<script>
    import AtLinksList from '@components/LinksList/LinksList'

    export default {
        name: 'AtFooter',
        components: {
            AtLinksList
        },
        props: {
            lists: {
                type: Array,
                default: () => []
            },
            links: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss">
    .c-footer {
        --footer-background: var(--color-primary);
    }
</style>

<style lang="scss" scoped>
    .c-footer {
        //background: var(--footer-background);

        &__inner {
            padding: 0 30px;
        }
    }
</style>

