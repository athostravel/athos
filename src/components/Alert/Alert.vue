<template>
    <div
        class="c-alert"
        :class="{
            'is-active' : isActive,
            'c-alert--error' : variant === 'error',
            'c-alert--info' : variant === 'info',
            'c-alert--ok' : variant === 'ok',
            'c-alert--warning' : variant === 'warning',
        }"
    >
        <div class="c-alert__inner">
            <div class="c-alert__content">
                <div v-if="title" class="c-alert__title">
                    {{ title }}
                </div>
                <div v-if="text" class="c-alert__text">
                    {{ text }}
                </div>
                <div v-if="buttons.length > 0 " class="c-alert__buttons">
                    <AtButton
                        v-for="button in buttons"
                        :key="button.id"
                        class="c-alert__button"
                        v-bind="button.button"
                    >
                        {{ button.text }}
                    </AtButton>
                </div>
            </div>
            <button class="c-alert__close">
                x
            </button>
        </div>
    </div>
</template>

<script>
    import AtButton from '@components/Button/Button'
    export default {
        name: 'AtAlert',
        components: {
            AtButton
        },
        props: {
            title: {
                type: String,
                default: undefined
            },
            text: {
                type: String,
                default: undefined
            },
            variant: {
                type: String,
                default: undefined
            },
            icon: {
                type: Object,
                default: () => {}
            },
            buttons: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                isActive: false
            }
        }

    }
</script>

<style lang="scss">
  .c-alert {
    --c-alert-padding: #{em(16px)};
    --c-alert-radius: var(--radius-s);
    --c-alert-background: #fff;
    --c-alert-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    --c-alert-info-border-color: #5575c7;
    --c-alert-warning-border-color: #ffbf2f;
    --c-alert-error-border-color: #e52b20;
    --c-alert-ok-border-color: #63ce63;
    --c-alert-text-color: #353c43;
    --c-alert-text-font-size: #{em(14px)};
    --c-alert-title-font-size: #{em(18px)};
    --c-alert-title-color: #353c43;
  }
</style>

<style lang="scss" scoped>
  .c-alert {
    padding: var(--c-alert-padding);
    border-radius: var(--c-alert-radius);
    background: var(--c-alert-background);
    box-shadow: var(--c-alert-box-shadow);
    border-left: #{em(4px)} solid transparent;

    &__text {
      font-size: var(--c-alert-text-font-size);
      color: var(--c-alert-text-color);
    }

    &__title {
      font-size: var(--c-alert-title-font-size);
      color: var(--c-alert-title-color);
      margin-bottom: #{em(12px)};
      font-weight: 700;
    }

    &__inner {
      display: flex;
      align-items: flex-start;
    }

    &__content {
      flex: 1;
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;
      margin-top: #{em(24px)};
    }

    &__button {
      & + & {
        margin-left: #{em(8px)};
      }
    }

    &--info {
      border-color: var(--c-alert-info-border-color);
    }

    &--warning {
      border-color: var(--c-alert-warning-border-color);
    }

    &--error {
      border-color: var(--c-alert-error-border-color);
    }

    &--ok {
      border-color: var(--c-alert-ok-border-color);
    }
  }
</style>
