<template>
    <div class="c-dropdown" :class="{'is-active' : isActive}" @mouseleave="isActive = false">
        <div class="c-dropdown__header" @mouseover="isActive = true">
            <slot name="header" />
        </div>

        <div v-if="$slots.content " class="c-dropdown__content">
            <slot name="content" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AtDropdown',
        data () {
            return {
                isActive: false
            }
        },
        methods: {
            props: {
                event: {
                    type: String,
                    default: 'click'
                }
            }
            /*
            toggle (event) {
                console.log(event.type)
                this.isActive = !this.isActive
            }
            */
        }
    }
</script>

<style lang="scss" scoped>
  .c-dropdown {
    position: relative;

    &__header {
      cursor: pointer;
    }

    &__content {
      display: none;

      .is-active & {
        display: block;
      }
    }
  }
</style>

<style lang="scss">

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }

  .slide-fade-enter {
    transform: translateY(50px);
    opacity: 0;
  }

  .slide-fade-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }
</style>
