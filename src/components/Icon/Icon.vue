<template>
    <component
        :is="tag"
        class="c-icon"
        :class="[
            icon && `c-icon--${icon}`,
            {
                'c-icon--diorite' : size === 'diorite',
                'c-icon--basalt' : size === 'basalt',
                'c-icon--obsidian' : size === 'obsidian',
                'c-icon--tuff' : size === 'tuff'
            }
        ]"
    >
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'AtIcon',
        props: {
            icon: {
                type: [String, Boolean],
                default: false
            },
            tag: {
                type: String,
                default: 'span'
            },
            size: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .c-icon {
    --c-icon-size: #{em(16px)};
    --c-icon-font-family: var(--font-family-icons);
    --c-icon-color: currentColor;
  }
</style>

<style lang="scss" scoped>
  .c-icon {
    display: inline-block;
    font-family: var(--c-icon-font-family) !important; /* Important is necessary */
    color: var(--c-icon-color);
    font-size: var(--c-icon-size);
    transform: rotate(0.001deg); /* Fix blur pixel position */

    &--diorite {
      --c-icon-size: #{em(8px)};
    }

    &--basalt {
      --c-icon-size: #{em(12px)};
    }

    &--obsidian {
      --c-icon-size: #{em(24px)};
    }

    &--tuff {
      --c-icon-size: #{em(32px)};
    }
  }
</style>
