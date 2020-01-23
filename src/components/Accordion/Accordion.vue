<template>
    <div class="c-accordion">
        <AtIconCard
            v-bind="[cfg.header, header]"
            class="c-accordion__header"
            id="accordion"
        >
            <AtText class="c-accordion__header-text" v-bind="[cfg.header, header]">
                {{ header.text }}
            </AtText>
        </AtIconCard>

        <AtText
            class="c-accordion__content"
            v-bind="[cfg.content, content]"
            v-toggle
            toggle-class="is-active"
            toggle-trigger-class="is-active"
            toggle-trigger="#accordion"
        >
            <slot />
        </AtText>
    </div>
</template>

<script>
    import AtIconCard from '@components/IconCard/IconCard'
    import AtText from '@components/Text/Text'
    import ToggleDirective from '@directives/ToggleDirective'

    export default {
        name: 'AtAccordion',
        directives: {
            toggle: ToggleDirective
        },
        components: {
            AtIconCard,
            AtText
        },
        props: {
            header: {
                type: Object,
                default: () => {}
            },
            content: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    header: {
                        icon: 'heart',
                        color: 'primary',
                        align: 'center',
                        position: 'right',
                        gap: 'dunite',
                        weight: 'bold'
                    },
                    content: {
                        size: 'dacite',
                        tag: 'div'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .c-accordion {
        --c-accordion-content-padding: var(--space-s);
    }
</style>

<style lang="scss">
    .c-accordion {
        &__header {
            cursor: pointer;

            .c-icon {
                transition: transform .3s;
                transform: rotate(0deg);
            }

            &.is-active {
                .c-icon {
                    transform: rotate(180deg);
                }
            }
        }

        &__content {
            display: none;
            padding: var(--c-accordion-content-padding);

            &.is-active {
                display: block;
            }

            p {
                margin-bottom: 1em;
            }
        }
    }
</style>