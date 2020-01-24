<template>
    <section
        class="c-section"
        :class="{
            'c-section--border-bottom': border === 'bottom'
        }"
    >
        <header class="c-section__header">
            <div v-if="$slots.title" class="c-section__title">
                <slot name="title" />
            </div>
            <div v-if="$slots.description" class="c-section__description">
                <slot name="description" />
            </div>
        </header>

        <slot />
    </section>
</template>

<script>
    export default {
        name: 'AtSection',
        props: {
            border: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-section {
    margin-top: em(54px);
    margin-bottom: em(54px);

    &__header {
      margin-bottom: em(40px);
    }

    &__description {
      margin-top: em(16px);
    }

    &--border {
      &-bottom {
        padding-bottom: em(54px);
        border-bottom: rem(1px) solid var(--color-border);
      }
    }
  }
</style>
