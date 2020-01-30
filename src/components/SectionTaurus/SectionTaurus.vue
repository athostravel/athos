<template>
    <AtContainer class="cfg.container">
        <AtSection class="c-section-taurus" v-bind="[cfg.section, { title, description }]">
            <div class="c-section-taurus__box">
                <AtListAries
                    v-for="(list, index) in items"
                    :key="list.id"
                    v-bind="[{ config: merge(cfg.list, cfg.lists[index]) }, list]"
                />
            </div>
        </AtSection>
    </AtContainer>
</template>

<script>
    import AtContainer from '@components/Container/Container'
    import AtSection from '@components/Section/Section'
    import AtListAries from '@components/ListAries/ListAries'

    export default {
        name: 'AtSectionTaurus',
        components: {
            AtContainer,
            AtSection,
            AtListAries
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            description: {
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
                    lists: []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-section-taurus {
    &__box {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      grid-gap: em(40px);
    }
  }
</style>
