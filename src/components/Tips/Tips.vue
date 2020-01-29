<template>
    <div
        class="c-tips"
        :class="[
            gap && `u-gap-${gap}`,
            {
                'c-tips--horizontal': horizontal
            }
        ]"
    >
        <AtTip
            v-for="(item, index) in items"
            :key="item.id"
            v-bind="[cfg.tip, cfg.tips[index], { config: cfg.tip }, item]"
            class="c-tips__item"
        />
    </div>
</template>

<script>
    import AtTip from '@components/Tip/Tip'

    export default {
        name: 'AtTips',
        components: {
            AtTip
        },
        props: {
            items: {
                type: Array,
                default: () => []
            },
            gap: {
                type: String,
                default: 'basalt'
            },
            horizontal: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                cfg: {
                    tips: []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-tips {
    display: grid;
    grid-template-columns: 1fr;

    &--horizontal {
      grid-template-columns: repeat(auto-fit, minmax(em(240px), 1fr));
    }
  }
</style>
