<template>
    <div>
        <AtModal id="origin-selection">
            <div slot="body" class="c-origin-selection">
                <div
                    v-for="item in items"
                    :key="item.id"
                    class="c-origin-selection__item"
                >
                    <AtButton :data-code="item.code" text>
                        {{ item.name }}
                    </AtButton>
                </div>
            </div>
        </AtModal>
    </div>
</template>

<script>
    import AtModal from '@components/Modal/Modal'
    import AtButton from '@components/Button/Button'
    export default {
        name: 'AtOriginSelection',
        components: {
            AtModal,
            AtButton
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        }

    }
</script>

<style lang="scss" scoped>
  .c-origin-selection {
    display: grid;
    align-items: start;
    grid-gap: 16px;
    grid-template-columns: repeat(6, 1fr);

    &__item {
      text-align: center;
      font-size: 14px;
      color: var(--color-primary);
    }
  }
</style>
