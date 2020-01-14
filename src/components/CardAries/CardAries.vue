<template>
    <div
        class="c-card-aries"
        :class="{ 'c-card-aries--inverse': inverse }"
    >
        <AtPicture
            v-if="src"
            class="c-card-aries__picture"
            v-bind="{ src, alt, title, sources }"
        />

        <div v-if="meta" class="c-card-aries__meta">
            <AtText v-bind="cfg.meta" :text="meta" class="c-card-aries__text" />
            <div v-if="category" class="c-card-aries__category">
                <template v-for="index in category.count">
                    <AtIcon :key="index.id" class="c-card-aries__icon" :icon="category.icon" />
                </template>
            </div>
        </div>

        <div v-if="price" class="c-card-aries__footer">
            <AtPrice v-bind="price" class="c-card-aries__price" />
        </div>
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
            inverse: {
                type: Boolean,
                default: false
            },
            meta: {
                type: String,
                default: undefined
            },
            src: {
                type: String,
                default: 'https://source.unsplash.com/random/80x80'
            },
            alt: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: undefined
            },
            sources: {
                type: Array,
                default: () => []
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
                    meta: {
                        text: 'Hotel Joya'
                    },
                    icon: {
                        icon: 'heart'
                    },
                    price: {
                        inline: true,
                        text: 'Precio Medio',
                        value: '200'
                    },
                    category: {
                        icon: 'heart',
                        count: 5
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
    grid-template-rows: repeat(2, auto);
    grid-column-gap: var(--c-card-aries-column-gap);
    grid-row-gap: var(--c-card-aries-row-gap);
    grid-template-areas:
      "picture meta"
      "picture footer";

    &--inverse {
      grid-template-columns: 1fr var(--c-card-aries-picture-width);
      grid-template-areas:
        "meta picture"
        "footer picture";
    }

    &__picture {
      grid-area: picture;

      &::before {
        --c-picture-ratio-height: var(--c-card-aries-ratio-height);
        --c-picture-ratio-width: var(--c-card-aries-ratio-width);
      }
    }

    &__meta {
      align-self: center;
      grid-area: meta;
      position: relative;
      padding-right: var(--space-4xl);
    }

    &__text {
      color: var(--c-card-aries-text-color);
      font-size: var(--c-card-aries-text-font-size);
    }

    &__category {
      font-size: var(--c-card-aries-category-font-size);
      position: absolute;
      right: 0;
      top: calc(-1 * var(--space-s));
    }

    &__icon {
      color: var(--c-card-aries-icon-color);
      margin-right: var(--space-3xs);

      &:last-child {
        margin-right: 0;
      }
    }

    &__footer {
      grid-area: footer;
      align-self: end;
    }
  }
</style>
