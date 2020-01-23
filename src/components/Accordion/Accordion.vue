<template>
    <div class="c-accordion">
        <AtIconCard
            v-bind="[cfg.header, header]"
            class="c-accordion__header"
            id="accordion"
        >
            <AtButton slot="icon" v-bind="[cfg.icon, icon]">
                <AtIcon icon="heart"/>
            </AtButton>

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
    import AtIcon from '@components/Icon/Icon'
    import AtIconCard from '@components/IconCard/IconCard'
    import AtButton from '@components/Button/Button'
    import AtText from '@components/Text/Text'
    import ToggleDirective from '@directives/ToggleDirective'

    export default {
        name: 'AtAccordion',
        directives: {
            toggle: ToggleDirective
        },
        components: {
            AtIcon,
            AtIconCard,
            AtButton,
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
                        position: 'right',
                        gap: 'dunite',
                        weight: 'bold',
                        inline: true
                    },
                    content: {
                        size: 'dacite',
                        tag: 'div'
                    },
                    icon: {
                        rounded: true,
                        icon: true,
                        size: 'diorite'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .c-accordion {
        --c-accordion-content-padding: var(--space-s) 0 0 0;
        --c-accordion-content-margin-paragraphs: 0 0 var(--space-xs) 0;
    }
</style>

<style lang="scss" scoped>
    .c-accordion {
        display: grid;

        &__header {
            cursor: pointer;
            justify-self: center;

            &.c-icon-card {
                align-items: center;
            }

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
        }
    }
</style>