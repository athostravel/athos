<template>
    <div v-if="items" class="c-list-aries">
        <AtText v-if="title" v-bind="cfg.title" class="c-list-aries__title">
            {{ title }}
        </AtText>
        <ul class="c-list-aries__list">
            <li v-for="(item, index) in items" :key="item.id" class="c-list-aries__item">
                <AtCardAries v-bind="[cfg.cardAries, cfg.items[index], { config: cfg.cardAries }, item]" />
            </li>
        </ul>
    </div>
</template>

<script>
    import AtText from '@components/Text/Text'
    import AtCardAries from '@components/CardAries/CardAries'

    export default {
        name: 'AtListAries',
        components: {
            AtText,
            AtCardAries
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            items: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                cfg: {
                    title: {
                        tag: 'div',
                        color: 'secondary',
                        size: 'obsidian',
                        align: 'center'
                    },
                    items: []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-list-aries {
    &__title {
      margin-bottom: #{em(24px)};
    }

    &__item {
      border-top: rem(1px) solid var(--color-border);
      padding-top: em(16px);
      padding-bottom: em(16px);

      &:last-child {
        border-bottom: rem(1px) solid var(--color-border);
      }
    }
  }
</style>
