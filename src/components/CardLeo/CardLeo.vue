<template>
    <component
        :is="tag"
        class="c-card-leo"
        :class="{
            'c-card-leo--has-shadow' : shadow,
            'c-card-leo--has-radius' : radius
        }"
    >
        <div class="c-card-leo__content">
            <div v-if="icons" class="c-card-leo__icons">
                <div v-for="icon in icons" :key="icon.id" class="c-card-leo__icon">
                    <Button v-bind="icon" class="c-card-leo__button" />
                </div>
            </div>

            <div v-if="meta || text" class="c-card-leo__header">
                <AtText v-if="meta" v-bind="meta" class="c-card-leo__meta" />

                <AtText v-if="text" v-bind="text" class="c-card-leo__text" />
            </div>

            <Picture class="c-card-leo__picture" v-bind="picture" />

            <div v-if="title || description" class="c-card-leo__info">
                <AtText v-if="title" v-bind="title" class="c-card-leo__title" />

                <AtText v-if="description" v-bind="description" class="c-card-leo__description" />
            </div>

            <div v-if="priceButton" class="c-card-leo__actions">
                <PriceButton
                    v-if="priceButton"
                    class="c-card-leo__price"
                    v-bind="priceButton"
                />
            </div>
        </div>
    </component>
</template>

<script>
    import AtText from '@components/Text/Text'
    import Button from '@components/Button/Button'
    import Picture from '@components/Picture/Picture.vue'
    import PriceButton from '@components/PriceButton/PriceButton'

    export default {
        name: 'AtCardLeo',
        components: {
            AtText,
            Button,
            Picture,
            PriceButton
        },
        props: {
            tag: {
                type: String,
                default: 'article'
            },
            shadow: {
                type: Boolean,
                default: true
            },
            radius: {
                type: Boolean,
                default: true
            },
            icons: {
                type: Array,
                default: () => []
            },
            meta: {
                type: Object,
                default: () => {}
            },
            text: {
                type: Object,
                default: () => {}
            },
            picture: {
                type: Object,
                default: () => {}
            },
            title: {
                type: Object,
                default: () => {}
            },
            description: {
                type: Object,
                default: () => {}
            },
            priceButton: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss">
  .c-card-leo {
    --c-card-leo-box-shadow: var(--shadow-distant);
    --c-card-leo-border-radius: var(--radius-s);
    --c-card-leo-picture-ratio-width: 16;
    --c-card-leo-picture-ratio-height: 9;
    --c-card-leo-meta-color: var(--color-secondary);
    --c-card-leo-meta-font-size: var(--font-size-xl);
    --c-card-leo-meta-font-weight: var(--font-weight-bold);
    --c-card-leo-meta-margin: 0 0 var(--space-2xs) 0;
    --c-card-leo-text-color: var(--color-primary);
    --c-card-leo-text-line-height: var(--line-height-l);
    --c-card-leo-title-color: var(--color-primary);
    --c-card-leo-title-font-size: var(--font-size-2xl);
    --c-card-leo-title-font-weight: var(--font-weight-bold);
    --c-card-leo-title-line-height: var(--line-height-m);
    --c-card-leo-title-margin: 0 0 var(--space-s) 0;
    --c-card-leo-description-color: var(--color-shade-800);
    --c-card-leo-content-padding: var(--space-s);
    --c-card-leo-button-background-color: var(transparent);
    --c-card-leo-button-color: var(--color-primary);
    --c-card-leo-button-icon-size: #{em(32px)};
    --c-card-leo-button-min-height: inherit;
    --c-card-leo-button-min-width: inherit;
    --c-card-leo-button-padding: 0;
    --c-card-leo-icons-margin: var(--space-s) 0 0 0;
    --c-card-leo-icons-space-margin: var(--space-s) 0 0 var(--space-s);
  }
</style>

<style scoped lang="scss">
  .c-card-leo {
    $this: &;

    &--has-shadow {
      box-shadow: var(--c-card-leo-box-shadow);
    }

    &--has-radius {
      border-radius: var(--c-card-leo-border-radius);
    }

    &__icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-right: var(--space-s);
    }

    &__button {
      --c-button-background-color: var(--c-card-leo-button-background-color);
      --c-button-color: var(--c-card-leo-button-color);
      --c-button-icon-size: var(--c-card-leo-button-icon-size);
      --c-button-min-height: var(--c-card-leo-button-min-height);
      --c-button-min-width: var(--c-card-leo-button-min-width);
      --c-button-padding: var(--c-card-leo-button-padding);
    }

    &__icon {
      margin: var(--c-card-leo-icons-margin);

      & + & {
        margin: var(--c-card-leo-icons-space-margin);
      }
    }

    &__header {
      padding: var(--c-card-leo-content-padding);
    }

    &__meta {
      --c-text-font-size: var(--c-card-leo-meta-font-size);
      --c-text-color: var(--c-card-leo-meta-color);
      --c-text-font-weight: var(--c-card-leo-meta-font-weight);

      margin: var(--c-card-leo-meta-margin);
    }

    &__text {
      --c-text-color: var(--c-card-leo-text-color);
      --c-text-line-height: var(--c-card-leo-text-line-height);
    }

    &__info {
      display: flex;
      flex-direction: column;
      padding: var(--c-card-leo-content-padding);
    }

    &__title {
      --c-text-font-size: var(--c-card-leo-title-font-size);
      --c-text-color: var(--c-card-leo-title-color);
      --c-text-font-weight: var(--c-card-leo-title-font-weight);
      --c-text-line-height: var(--c-card-leo-title-line-height);

      margin: var(--c-card-leo-title-margin);
    }

    &__description {
      --c-text-color: var(--c-card-leo-description-color);
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
      padding: var(--c-card-leo-content-padding);
    }

    &__price {
      align-self: flex-end;
    }
  }
</style>
