<template>
    <AtCheckbox
        v-bind="$props"
        class="c-checkbox--radio"
        :type="type"
    />
</template>

<script>
    import Checkbox from '@components/Checkbox/Checkbox.vue'
    import formControl from '@mixins/formControl'

    export default {
        name: 'AtRadio',
        comments: {
            Checkbox
        },
        mixins: [formControl],
        props: {
            type: {
                type: String,
                default: 'radio'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-checkbox {
    &--radio {
      --c-checkbox-input-radius: var(--radius-circle);
    }
  }
</style>
