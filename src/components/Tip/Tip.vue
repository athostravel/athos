<template>
    <AtIconCard class="c-tip" v-bind="[cfg.iconCard, { config: cfg.iconCard, icon }]">
        <AtText v-if="$slots.title || title" class="c-tip__title" v-bind="cfg.title">
            <slot name="title">
                {{ title }}
            </slot>
        </AtText>
        <AtText v-if="$slots.description || description" class="c-tip__description" v-bind="cfg.description">
            <slot name="description">
                {{ description }}
            </slot>
        </AtText>
    </AtIconCard>
</template>

<script>
    import AtIconCard from '@components/IconCard/IconCard'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtTip',
        components: {
            AtIconCard,
            AtText
        },
        props: {
            icon: {
                type: String,
                default: undefined
            },
            title: {
                type: String,
                default: undefined
            },
            description: {
                type: String,
                default: undefined
            }
        },
        data () {
            return {
                cfg: {
                    iconCard: {
                        gap: 'diorite',
                        icon: {
                            size: 'pumice',
                            color: 'secondary'
                        }
                    },
                    title: {
                        color: 'primary',
                        size: 'diorite',
                        weight: 'bold'
                    },
                    description: {
                        color: 'primary',
                        size: 'dacite'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-tip {
    &__title {
      margin-bottom: em(4px);
    }
  }
</style>
