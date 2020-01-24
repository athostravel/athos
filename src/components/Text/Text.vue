<template>
    <component
        :is="tag"
        :class="[
            color && `u-color-${color}`,
            {
                'c-text--uppercase': uppercase,
                'c-text--center': align === 'center',
                'c-text--right': align === 'right',
                'c-text--marble': size === 'marble',
                'c-text--flint': size === 'flint',
                'c-text--dacite': size === 'dacite',
                'c-text--dunite': size === 'dunite',
                'c-text--diorite': size === 'diorite',
                'c-text--basalt': size === 'basalt',
                'c-text--obsidian': size === 'obsidian',
                'c-text--tuff': size === 'tuff',
                'c-text--pumice': size === 'pumice',
                'c-text--scoria': size === 'scoria',
                'c-text--coal': size === 'coal',
                'c-text--lignite': size === 'lignite',
                'c-text--limestone': size === 'limestone',
                'c-text--sandstone': size === 'sandstone',
                'c-text--andesite': size === 'andesite',
                'c-text--bauxite': size === 'bauxite',
                'c-text--chalk': size === 'chalk',
                'c-text--evaporite': size === 'evaporite',
                'c-text--gritstone': size === 'gritstone',
                'c-text--thin': weight === 'thin',
                'c-text--light': weight === 'light',
                'c-text--medium': weight === 'medium',
                'c-text--semi-bold': weight === 'semi-bold',
                'c-text--bold': weight === 'bold',
                'c-text--black': weight === 'black'
            }
        ]"
        class="c-text"
    >
        <span class="c-text__content">
            <slot />
        </span>
    </component>
</template>

<script>
    export default {
        name: 'AtText',
        props: {
            tag: {
                type: String,
                default: 'p'
            },
            size: {
                type: String,
                default: undefined
            },
            weight: {
                type: String,
                default: 'regular'
            },
            align: {
                type: String,
                default: 'left'
            },
            color: {
                type: String,
                default: undefined
            },
            uppercase: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
  .c-text {
    --c-text-font-size: var(--font-size-m);
    --c-text-line-height: var(--line-height-2xl);
    --c-text-font-weight: var(--font-weight-regular);
  }
</style>

<style lang="scss" scoped>
  .c-text {
    &__content {
      font-weight: var(--c-text-font-weight);
      font-size: var(--c-text-font-size);
      line-height: var(--c-text-line-height);
    }

    &--has-bg {
      background: var(--c-text-background);
      padding: var(--c-text-padding);
    }

    &--marble {
      --c-text-font-size: var(--font-size-2xs);
    }

    &--flint {
      --c-text-font-size: var(--font-size-xs);
    }

    &--dacite {
      --c-text-font-size: var(--font-size-s);
    }

    &--dunite {
      --c-text-font-size: var(--font-size-m);
    }

    &--diorite {
      --c-text-font-size: var(--font-size-l);
    }

    &--basalt {
      --c-text-font-size: var(--font-size-xl);
    }

    &--obsidian {
      --c-text-font-size: var(--font-size-2xl);
    }

    &--tuff {
      --c-text-font-size: var(--font-size-3xl);
    }

    &--pumice {
      --c-text-font-size: var(--font-size-4xl);
    }

    &--scoria {
      --c-text-font-size: var(--font-size-5xl);
    }

    &--coal {
      --c-text-font-size: var(--font-size-6xl);
    }

    &--lignite {
      --c-text-font-size: var(--font-size-7xl);
      --c-text-line-height: var(--line-height-xl);
    }

    &--limestone {
      --c-text-font-size: var(--font-size-8xl);
      --c-text-line-height: var(--line-height-xl);
    }

    &--sandstone {
      --c-text-font-size: var(--font-size-9xl);
      --c-text-line-height: var(--line-height-xl);
    }

    &--andesite {
      --c-text-font-size: var(--font-size-10xl);
      --c-text-line-height: var(--line-height-xl);
    }

    &--bauxite {
      --c-text-font-size: var(--font-size-11xl);
      --c-text-line-height: var(--line-height-xl);
    }

    &--chalk {
      --c-text-font-size: var(--font-size-12xl);
      --c-text-line-height: var(--line-height-xl);
    }

    &--evaporite {
      --c-text-font-size: var(--font-size-13xl);
      --c-text-line-height: var(--line-height-xl);
    }

    &--gritstone {
      --c-text-font-size: var(--font-size-14xl);
      --c-text-line-height: var(--line-height-xl);
    }

    &--thin {
      --c-text-font-weight: var(--font-weight-thin);
    }

    &--light {
      --c-text-font-weight: var(--font-weight-light);
    }

    &--medium {
      --c-text-font-weight: var(--font-weight-medium);
    }

    &--semi-bold {
      --c-text-font-weight: var(--font-weight-semi-bold);
    }

    &--bold {
      --c-text-font-weight: var(--font-weight-bold);
    }

    &--black {
      --c-text-font-weight: var(--font-weight-black);
    }

    &--center {
      text-align: center;
    }

    &--right {
      text-align: right;
    }

    &--uppercase {
      text-transform: uppercase;
    }
  }
</style>
