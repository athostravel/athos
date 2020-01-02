<template>
    <div
        :class="open ? 'c-toggle--open' : 'c-toggle--closed'"
    >
        <span slot="toggleElement" data-text-open="{{ toggleText }}" data-text-close="{{ toggleOpenText }}">
            {{ toggleText }}
        </span>
    </div>
</template>

<script>
    import ToggleDirective from '@directives/ToggleDirective'

    export default {
        name: 'AtToggle',
        directives: {
            toggle: ToggleDirective
        },
        props: {
            toggleText: {
                type: String,
                default: 'Mostrar'
            },
            toggleOpenText: {
                type: String,
                default: 'Ocultar'
            }
        },
        data () {
            return {
                open: false
            }
        }
    }
</script>

<style scoped lang="scss">
  .c-toggle {
    $this: &;

    &--open {
      #{$this} {
        &__text {
          display: none;
        }
      }
    }

    &--closed {
      #{$this} {
        &__text-hidden {
          display: none;
        }
      }
    }
  }
</style>
