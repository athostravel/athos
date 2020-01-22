<template>
    <div v-if="show" :id="id" class="c-modal">
        <div class="c-modal__inner">
            <button class="c-modal__close" @click="closeModal(id)">
                <AtIcon icon="heart" />
            </button>
            <div v-if="$slots.header" class="c-modal__header">
                <slot name="header" />
            </div>
            <div class="c-modal__body">
                <slot name="body" />
            </div>
        </div>
        <div class="c-modal__overlay" @click="closeModal(id)"></div>
    </div>
</template>

<script>
    import AtIcon from '@components/Icon/Icon'
    export default {
        name: 'AtModal',
        components: {
            AtIcon
        },
        props: {
            id: {
                type: String,
                default: undefined
            },
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
            opened: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                show: false
            }
        },
        mounted () {
            if (this.opened) {
                this.open(this.id)
            }
            document.addEventListener('keydown', (e) => {
                if (this.show && e.keyCode === 27) {
                    this.close()
                }
            })
            this.$root.$on('closeModal', ({ id }) => {
                if (id === this.id) { this.close() }
            })
            this.$root.$on('openModal', ({ id }) => {
                if (id === this.id) { this.open() }
            })
        },
        methods: {
            close () {
                this.show = false
            },
            open () {
                this.show = true
            }
        }
    }
</script>

<style lang="scss">
  .c-modal {
    --c-modal-background: #fff;
    --c-modal-padding: #{em(16px)};
    --c-modal-border-radius: var(--radius-s);
    --c-modal-box-shadow: var(--shadow-distant);
    --c-modal-overlay: rgba(0, 0, 0, 0.75);
  }
</style>

<style lang="scss" scoped>
  .c-modal {
    background: var(--c-modal-overlay);
    padding: #{em(32px)};

    &__overlay {
      /*
      background: rgba(0, 0, 0, 0.75);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      */
    }

    &__inner {
      position: relative;
      background: var(--c-modal-background);
      border-radius: var(--c-modal-border-radius);
      box-shadow: var(--c-modal-box-shadow);
      border-left: #{em(4px)} solid var(--color-secondary);
      padding: var(--c-modal-padding);
    }

    &__close {
      position: absolute;
      right: 16px;
      top: 16px;
    }

    &__body {
      padding-top: #{em(16px)};
    }
  }
</style>
