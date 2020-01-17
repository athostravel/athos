<template>
    <component
        :is="tag"
        :href="tag === 'a' && href"
        class="c-banner"
        :class="{
            'c-banner--has-shadow' : shadow,
            'c-banner--has-radius' : radius,
            'c-banner--has-overlay' : overlay,
            'c-banner--has-filter' : filter
        }"
    >
        <AtPicture class="c-banner__picture" v-bind="{ src, alt, title, sources }" />

        <div v-if="$slots.default" class="c-banner__box">
            <slot />
        </div>
    </component>
</template>

<script>
    import AtPicture from '@components/Picture/Picture.vue'

    export default {
        name: 'AtBanner',
        components: {
            AtPicture
        },
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            href: {
                type: String,
                default: undefined
            },
            src: {
                type: String,
                default: 'https://source.unsplash.com/random/1920x1080'
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
            shadow: {
                type: Boolean,
                default: false
            },
            radius: {
                type: Boolean,
                default: false
            },
            filter: {
                type: Boolean,
                default: false
            },
            overlay: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  .c-banner {
    --c-banner-box-shadow: var(--shadow-distant);
    --c-banner-border-radius: var(--radius-s);
    --c-banner-overlay: transparent;
    --c-banner-picture-filter: none;
    --c-banner-picture-ratio-width: 16;
    --c-banner-picture-ratio-height: 9;
    --c-banner-content-padding: #{em(32px)};
  }
</style>

<style scoped lang="scss">
  .c-banner {
    $this: &;

    display: grid;
    grid-template-columns: 1fr;

    &--has-shadow {
      box-shadow: var(--c-banner-box-shadow);
    }

    &--has-radius {
      border-radius: var(--c-banner-border-radius);

      #{$this}__picture {
        border-radius: var(--c-banner-border-radius);
      }
    }

    &--has-overlay {
      #{$this}__picture {
        --c-picture-overlay: var(--c-banner-overlay);
      }
    }

    &--has-filter {
      #{$this}__picture {
        --c-picture-filter: var(--c-banner-picture-filter); //Nuevo: No funciona
      }
    }

    &__picture,
    &__box {
      position: relative;
      z-index: 1;
      grid-column: 1/2;
      grid-row: 1/2;
    }

    &__picture {
      --c-picture-ratio-width: var(--c-banner-picture-ratio-width);
      --c-picture-ratio-height: var(--c-banner-picture-ratio-height);
    }

    &__box {
      display: flex;
      flex-direction: column;
      z-index: 3;
      min-width: #{em(1px)};
    }

    &__content {
      max-width: 100%;
      padding: var(--c-banner-content-padding);
    }
  }
</style>
