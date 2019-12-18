<template>
    <div
        :class="{
            'c-heading--has-icon': icon,
            'c-heading--align-center': align === 'center',
            'c-heading--align-right': align === 'right'
        }"
        class="c-heading"
    >
        <component
            :is="titleTag"
            class="c-heading__title"
        >
            <span v-if="icon" class="c-heading__icon">
                <AtIcon :icon="icon" />
            </span>
            {{ title }}
        </component>
        <p
            v-for="txt in text"
            :key="txt.id"
            class="c-heading__par"
        >
            <span class="c-heading__par-text">
                {{ txt }}
            </span>
        </p>
    </div>
</template>

<style lang="scss">
  :root {
    --c-heading-icon-padding-right: #{em(8px)};
    --c-heading-padding-bottom: #{em(32px)};
    --c-heading-title-font-size: #{em(32px)};
    --c-heading-title-line-height: 1.4;
    --c-heading-title-color: var(--color-primary);
    --c-heading-par-font-size: #{em(16px)};
    --c-heading-par-line-height: 1.4;
    --c-heading-par-color: currentColor;
    --c-heading-par-margin-bottom: #{em(8px)};
    --c-heading-par-margin-top: #{em(16px)};
  }
</style>

<style lang="scss" scoped>
  .c-heading {
    $this: &;

    padding-bottom: var(--c-heading-padding-bottom);

    &--align {
      &-right {
        text-align: right;
      }

      &--center {
        text-align: center;
      }
    }

    &__icon {
      padding-right: var(--c-heading-icon-padding-right);
      align-self: center;
      display: flex;
    }

    &__title {
      font-size: var(--c-heading-title-font-size);
      line-height: var(--c-heading-title-line-height);
      color: var(--c-heading-title-color);
      display: flex;
    }

    &__par {
      color: var(--c-heading-par-color);
      font-size: var(--c-heading-par-font-size);
      line-height: var(--c-heading-par-line-height);

      &:not(:last-of-type) {
        margin-bottom: var(--c-heading-par-margin-bottom);
      }

      &:first-of-type {
        margin-top: var(--c-heading-par-margin-top);
      }
    }
  }
</style>

<script>

    import AtIcon from '../Icon/Icon.vue'

    export default {
        name: 'AtHeading',
        components: {
            AtIcon
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            titleTag: {
                type: String,
                default: 'h3'
            },
            text: {
                type: Array,
                default: () => []
            },
            icon: {
                type: [String, Boolean],
                default: false
            },
            align: {
                type: String,
                default: undefined
            }
        }
    }
</script>
