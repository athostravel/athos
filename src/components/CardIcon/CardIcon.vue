<template>
    <div
        class="c-card-icon"
        :class="{
            'c-card-icon--align-right' : align === 'right',
            'c-card-icon--align-top' : align === 'top',
            'c-card-icon--align-bottom' : align === 'bottom'
        }"
    >
        <AtIcon
            v-if="icon"
            class="c-card-icon__icon"
            :icon="icon"
        />
        <div class="c-card-icon__description">
            <div class="c-card-icon__title">
                {{ title }}
            </div>
            <div class="c-card-icon__text">
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AtCardIcon',
        props: {
            icon: {
                type: String,
                default: undefined
            },
            title: {
                type: String,
                default: undefined
            },
            text: {
                type: String,
                default: undefined
            },
            align: {
                type: String,
                default: 'left'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .c-card-icon {
    $this: &;

    --c-card-icon-title-font-size: var(--font-size-l);
    --c-card-icon-title-font-weight: 900;
    --c-card-icon-title-line-height: var(--space-s);
    --c-card-icon-title-color: var(--color-shade-1000);
    --c-card-icon-text-font-size: var(--font-size-s);
    --c-card-icon-text-line-height: var(--space-s);
    --c-card-icon-text-color: var(--color-shade-900);
    --c-card-icon-space-columns: var(--space-s);
    --c-card-icon-width-columns: var(--space-l);
    --c-card-icon-space-rows: var(--space-xs);
    --c-card-icon-icon-color: var(--color-shade-1200);
    --c-card-icon-icon-font-size: var(--font-size-2xl);
    --c-card-icon-icon-line-height: var(--line-height-2xl);

    display: grid;
    grid-template-columns: var(--c-card-icon-width-columns) 1fr;
    grid-column-gap: var(--c-card-icon-space-columns);
    grid-template-areas: "icon description";

    &__icon {
      color: var(--c-card-icon-icon-color);
      font-size: var(--c-card-icon-icon-font-size);
      grid-area: icon;
      line-height: var(--c-card-icon-icon-line-height);
    }

    &__description {
      align-items: center;
      display: grid;
      grid-area: description;
      grid-template-columns: 1fr;
      grid-row-gap: var(--c-card-icon-space-rows);
    }

    &__title {
      color: var(--c-card-icon-title-color);
      font-size: var(--c-card-icon-title-font-size);
      font-weight: var(--c-card-icon-title-font-weight);
      line-height: var(--c-card-icon-title-line-height);
    }

    &__text {
      color: var(--c-card-icon-text-color);
      font-size: var(--c-card-icon-text-font-size);
      line-height: var(--c-card-icon-text-line-height);
    }

    &--align {
      &-right {
        grid-template-columns: 1fr var(--c-card-icon-width-columns);
        grid-template-areas: "description icon";
      }

      &-top {
        grid-template-columns: 1fr;
        grid-template-areas:
          "icon"
          "description";
      }

      &-bottom {
        grid-template-columns: 1fr;
        grid-template-areas:
          "description"
          "icon";
      }
    }
  }
</style>
