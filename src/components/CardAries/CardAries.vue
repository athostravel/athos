<template>
    <div class="c-card-aries">
        <AtPicture v-if="src" class="c-card-aries__picture" v-bind="{ src, alt, title, sources }" />

        <div class="c-card-aries__category">
            <AtIcon class="c-card-aries__icon" v-bind="cfg.icon" />
            <AtIcon class="c-card-aries__icon" v-bind="cfg.icon" />
            <AtIcon class="c-card-aries__icon" v-bind="cfg.icon" />
            <AtIcon class="c-card-aries__icon" v-bind="cfg.icon" />
        </div>

        <div v-if="meta" class="c-card-aries__meta">
            <AtText v-bind="cfg.meta" :text="meta" class="c-card-aries__meta-text" />
        </div>

        <div v-if="value" class="c-card-aries__footer">
            <AtPrice v-bind="[cfg.price , { value, text }]" class="c-card-aries__price" />
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
            meta: {
                type: String,
                default: undefined
            },
            src: {
                type: String,
                default: undefined
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
            text: {
                type: String,
                default: undefined
            },
            value: {
                type: [String, Number],
                default: undefined
            }
        },
        data () {
            return {
                cfg: {
                    picture: { inline: true },
                    icon: { icon: 'heart', color: 'secondary' },
                    price: { inline: true }
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
      --c-card-aries-meta-font-size: var(--font-size-l);
  }
</style>

<style lang="scss" scoped>
  .c-card-aries {
      display: grid;
      grid-template-columns: var(--c-card-aries-picture-width) 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: var(--c-card-aries-column-gap);
      grid-row-gap: var(--c-card-aries-row-gap);

      &__picture {
          grid-area: 1 / 1 / 4 / 2;

          &::before {
              --c-picture-ratio-height: var(--c-card-aries-ratio-height);
              --c-picture-ratio-width: var(--c-card-aries-ratio-width);
          }
      }

      &__category {
          font-size: var(--c-card-aries-category-font-size);
          grid-area: 1 / 2 / 2 / 3;
          text-align: right;
      }

      &__meta {
          font-size: var(--c-card-aries-meta-font-size);
          grid-area: 2 / 2 / 3 / 3;
      }

      &__footer {
          grid-area: 3 / 2 / 4 / 3;
      }
  }
</style>
