<template>
    <section
        class="c-section"
        :class="{
            'c-section--border-bottom': border === 'bottom'
        }"
    >
        <header class="c-section__header">
            <div v-if="$slots.title || title" class="c-section__title">
                <slot name="title">
                    <AtText v-bind="cfg.title">
                        {{ title }}
                    </AtText>
                </slot>
            </div>
            <div v-if="$slots.description || description" class="c-section__description">
                <slot name="description">
                    <template v-if="description.length && typeof description !== 'string'">
                        <AtText v-for="paragraph in description" :key="paragraph.id" v-bind="cfg.description">
                            {{ paragraph }}
                        </AtText>
                    </template>

                    <AtText v-else v-bind="cfg.description">
                        {{ description }}
                    </AtText>
                </slot>
            </div>
        </header>

        <slot />
    </section>
</template>

<script>
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtSection',
        components: {
            AtText
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            description: {
                type: [String, Array],
                default: undefined
            },
            border: {
                type: String,
                default: undefined
            }
        },
        data () {
            return {
                cfg: {
                    title: {
                        color: 'primary',
                        weight: 'bold',
                        size: 'coal',
                        align: 'center'
                    },
                    description: {
                        color: 'primary',
                        weight: 'light',
                        size: 'tuff',
                        align: 'center'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-section {
    --c-section-separation: #{em(80px)};
  }
</style>

<style lang="scss" scoped>
  .c-section {
    margin-top: var(--c-section-separation);
    margin-bottom: var(--c-section-separation);

    &__header {
      margin-bottom: em(40px);
    }

    &__description {
      margin-top: em(24px);
    }

    &--border {
      &-bottom {
        padding-bottom: var(--c-section-separation);
        border-bottom: rem(1px) solid var(--color-border);
      }
    }
  }
</style>
