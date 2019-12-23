<template>
    <component
        :is="tag"
        :href="tag === 'a' && href"
        class="c-banner"
        :class="{
            'c-banner--has-shadow' : shadow,
            'c-banner--has-radius' : radius,
            'c-banner--has-overlay' : overlay
        }"
    >
        <Picture class="c-banner__picture" v-bind="picture" />
        <div v-if="$slots.default" class="c-banner__box">
            <slot />
        </div>
    </component>
</template>

<script>
    import Picture from '@components/Picture/Picture.vue'

    export default {
        name: 'AtBanner',
        components: {
            Picture
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
            shadow: {
                type: Boolean,
                default: false
            },
            radius: {
                type: Boolean,
                default: false
            },
            overlay: {
                type: Boolean,
                default: false
            },
            picture: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss">
  .c-banner {
    --c-banner-box-shadow: var(--shadow-distant);
    --c-banner-border-radius: var(--radius-s);
    --c-banner-overlay: transparent;
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
