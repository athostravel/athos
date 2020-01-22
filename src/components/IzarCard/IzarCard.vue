<template>
    <div class="c-izar-card">
        <div class="c-izar-card__inner">
            <ul class="c-izar-card__list" v-if="rrss">
                <li v-for="rs in rrss" :key="rs.id" class="c-izar-card__item">
                    <AtButton class="c-izar-card__button" :text="rs.name" :href="rs.url" v-bind="[cfg.button, rs]">
                        <AtIcon class="c-izar-card__icon" :icon="rs.iconCustom" />
                    </AtButton>
                </li>
            </ul>
            <div class="c-izar-card__content">
                <AtText v-if="title" :text="title" class="c-izar-card__title" v-bind="cfg.title" />
                <div class="c-izar-card__text">
                    <slot name="info" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AtButton from '@components/Button/Button'
    import AtIcon from '@components/Icon/Icon'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtIzarCard',
        components: {
            AtButton,
            AtIcon,
            AtText
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            text: {
                type: String,
                default: undefined
            },
            text2: {
                type: String,
                default: undefined
            },
            rrss: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                cfg: {
                    title: {
                        tag: 'h4'
                    },
                    button: {
                        icon: true,
                        rounded: true,
                        color: "secondary"
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .c-izar-card {
        --c-izar-card-margin-list: 0 var(--space-l) 0 0;
        --c-izar-card-padding-list: 0;
        --c-izar-card-margin-item: 0 0 var(--space-m) 0;
        --c-izar-card-margin-title: 0 0 var(--space-m) 0;
        --c-izar-card-margin-text: 0 0 var(--space-s) 0;
    }
</style>

<style lang="scss" scoped>
    .c-izar-card {
        &__inner {
            display: flex;
        }

        &__list {
            margin: var(--c-izar-card-margin-list);
            padding: var(--c-izar-card-padding-list);
        }

        &__item {
            margin: var(--c-izar-card-margin-item);
        }

        &__title {
            margin: var(--c-izar-card-margin-title);
        }

        &__text {
            > div > * {
                margin: var(--c-izar-card-margin-text);
            }
        }
    }
</style>
