<template>
    <div class="c-collapse">
        <AtIconCard
            v-bind="[cfg.header, header]"
            class="c-collapse__header"
            :class="[
                {
                    'c-collapse__header--left': position === 'left',
                    'c-collapse__header--right': position === 'right',
                    'c-collapse__header--center': position === 'center'
                }
            ]"
            id="collapse"
        >

            <AtIcon
                slot="icon"
                v-bind="cfg.icon"
                :icon="cfg.icon.icon"
                class="c-collapse__icon"
            />

            <AtText class="c-collapse__header-text" v-bind="[cfg.header, header]">
                {{ header.text }}
            </AtText>
        </AtIconCard>

        <div
            class="c-collapse__content"
            v-bind="content"
            v-toggle
            toggle-class="is-active"
            toggle-trigger-class="is-active"
            toggle-trigger="#collapse"
        >
            <slot />
        </div>
    </div>
</template>

<script>
    import AtIcon from '@components/Icon/Icon'
    import AtIconCard from '@components/IconCard/IconCard'
    import AtButton from '@components/Button/Button'
    import AtText from '@components/Text/Text'
    import ToggleDirective from '@directives/ToggleDirective'

    export default {
        name: 'AtCollapse',
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
            },
            position: {
                type: String,
                default: 'left'
            }
        },
        data () {
            return {
                cfg: {
                    header: {
                        color: 'primary',
                        position: 'right',
                        gap: 'dunite',
                        weight: 'bold',
                        inline: true
                    },
                    icon: {
                        icon: 'heart'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .c-collapse {
        --c-collapse-content-padding: var(--space-s) 0 0 0;
        --c-collapse-content-margin-paragraphs: 0 0 var(--space-xs) 0;
    }
</style>

<style lang="scss" scoped>
    .c-collapse {
        $this: &;

        display: grid;

        &__header {
            cursor: pointer;
            align-items: center;
            justify-self: start;

            &--right {
                justify-self: end;
            }

            &--center {
                justify-self: center;
            }

            &.is-active {
                #{$this}__icon {
                    transform: rotate(180deg);
                }
            }
        }

        &__icon {
            transition: transform .3s;
            transform: rotate(0deg);
        }

        &__content {
            display: none;
            padding: var(--c-collapse-content-padding);

            &.is-active {
                display: block;
            }
        }
    }
</style>