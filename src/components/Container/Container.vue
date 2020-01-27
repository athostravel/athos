<template>
    <div class="c-container">
        <div
            class="c-container__wrap"
            :class="{
                'c-container__wrap--dacite': size === 'dacite',
                'c-container__wrap--dunite': size === 'dunite',
                'c-container__wrap--diorite': size === 'diorite',
                'c-container__wrap--basalt': size === 'basalt',
                'c-container__wrap--obsidian': size === 'obsidian',
                'c-container__wrap--tuff': size === 'tuff'
            }"
        >
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AtContainer',
        props: {
            size: {
                type: String,
                default: 'basalt'
            }
        }
    }
</script>

<style lang="scss">
  .c-container {
    --c-container-padding: #{em(16px)};
    --c-container-max-width: auto;
  }
</style>

<style lang="scss" scoped>
  .c-container {
    padding-left: var(--c-container-padding);
    padding-right: var(--c-container-padding);

    &__wrap {
      max-width: var(--c-container-max-width);
      margin-left: auto;
      margin-right: auto;
      width: 100%;

      &--dacite {
        --c-container-max-width: var(--wrapper-dacite);
      }

      &--dunite {
        --c-container-max-width: var(--wrapper-dunite);
      }

      &--diorite {
        --c-container-max-width: var(--wrapper-diorite);
      }

      &--basalt {
        --c-container-max-width: var(--wrapper-basalt);
      }

      &--obsidian {
        --c-container-max-width: var(--wrapper-obsidian);
      }

      &--tuff {
        --c-container-max-width: var(--wrapper-tuff);
      }
    }
  }
</style>
