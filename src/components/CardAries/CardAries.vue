<template>
    <div
        class="c-card-aries"
        :class="{ 'c-card-aries--inverted': inverted }"
    >
        <AtPicture
            class="c-card-aries__picture"
            v-bind="[cfg.image, image]"
        />

        <AtText
            :text="title"
            class="c-card-aries__title"
        />

        <div class="c-card-aries__category">
            <template v-for="index in category.count">
                <AtIcon
                    :key="index.id"
                    class="c-card-aries__icon"
                    v-bind="[cfg.category, category]"
                />
            </template>
        </div>

        <AtPrice
            v-bind="[cfg.price,price]"
            class="c-card-aries__price"
        />
    </div>
</template>

<script>
    import AtIcon from '@components/Icon/Icon.vue'
    import AtPicture from '@components/Picture/Picture.vue'
    import AtPrice from '@components/Price/Price.vue'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtCardAries',
        components: {
            AtIcon,
            AtPicture,
            AtPrice,
            AtText
        },
        props: {
            inverted: {
                type: Boolean,
                default: false
            },
            image: {
                type: Object,
                default: () => {}
            },
            title: {
                type: String,
                default: undefined
            },
            category: {
                type: Object,
                default: () => {}
            },
            price: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    category: {
                        icon: 'heart'
                    },
                    price: {
                        inline: true
                    },
                    text: {
                        tag: 'h3'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-card-aries {
    --c-card-aries-column-gap: var(--space-s);
    --c-card-aries-row-gap: var(--space-2xs);
    --c-card-aries-picture-width: var(--space-6xl);
    --c-card-aries-ratio-height: 1;
    --c-card-aries-ratio-width: 1;
    --c-card-aries-category-font-size: var(--font-size-2xs);
    --c-card-aries-text-font-size: var(--font-size-l);
    --c-card-aries-text-color: var(--color-primary);
    --c-card-aries-icon-color: var(--color-secondary);
  }
</style>

<style lang="scss" scoped>
  .c-card-aries {
    display: grid;
    grid-template-columns: var(--c-card-aries-picture-width) 1fr;
    grid-template-rows: auto 1fr 1fr;
    grid-column-gap: var(--c-card-aries-column-gap);
    grid-row-gap: var(--c-card-aries-row-gap);
    grid-template-areas:
      "picture category"
      "picture title"
      "picture price";

    &--inverse {
      grid-template-columns: 1fr var(--c-card-aries-picture-width);
      grid-template-areas:
        "title picture"
        "price picture";
    }

    &__picture {
      grid-area: picture;

      &::before {
        --c-picture-ratio-height: var(--c-card-aries-ratio-height);
        --c-picture-ratio-width: var(--c-card-aries-ratio-width);
      }
    }

    &__title {
      align-self: start;
      grid-area: title;
      position: relative;
      color: var(--c-card-aries-text-color);
      font-size: var(--c-card-aries-text-font-size);
    }

    &__category {
      grid-area: category;
      font-size: var(--c-card-aries-category-font-size);
      margin-top: -0.5em;
      justify-self: flex-end;
    }

    &__icon {
      color: var(--c-card-aries-icon-color);
      margin-right: var(--space-3xs);

      &:last-child {
        margin-right: 0;
      }
    }

    &__price {
      grid-area: price;
      align-self: end;
    }
  }
</style>
