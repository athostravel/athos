<template>
    <div class="c-contact">
        <div class="c-contact__inner">
            <div v-if="rrss" class="c-contact__list">
                <AtButton
                    v-for="rs in rrss"
                    :key="rs.id"
                    class="c-contact__button"
                    :text="rs.name"
                    :href="rs.url"
                    v-bind="[cfg.button, rs]"
                >
                    <AtIcon class="c-contact__icon" :icon="rs.iconCustom" :size="cfg.icon.size" />
                </AtButton>
            </div>
            <div class="c-contact__content">
                <AtText v-if="title" class="c-contact__title" v-bind="cfg.title">
                    {{ title }}
                </AtText>
                <div class="c-contact__text">
                    <slot />
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
        name: 'AtContact',
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
            rrss: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                cfg: {
                    title: {
                        tag: 'h4',
                        size: 'scoria',
                        weight: 'bold'
                    },
                    button: {
                        icon: true,
                        rounded: true,
                        color: 'secondary'
                    },
                    icon: {
                        size: 'obsidian'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-contact {
    --c-contact-margin-list: 0 var(--space-l) 0 0;
    --c-contact-margin-item: 0 0 var(--space-s) 0;
    --c-contact-margin-title: 0 0 var(--space-s) 0;
    --c-contact-margin-text: 0 0 var(--space-xs) 0;
  }
</style>

<style lang="scss" scoped>
  .c-contact {
    &__inner {
      display: flex;
    }

    &__list {
      display: flex;
      flex-direction: column;
      margin: var(--c-contact-margin-list);
    }

    &__button {
      margin: var(--c-contact-margin-item);
    }

    &__title {
      margin: var(--c-contact-margin-title);
    }

    &__text {
      > * {
        margin: var(--c-contact-margin-text);
      }
    }
  }
</style>
