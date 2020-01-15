<template>
    <div
        class="c-alert"
        :class="{
            'c-alert--error' : type === 'error',
            'c-alert--info' : type === 'info',
            'c-alert--ok' : type === 'ok',
            'c-alert--warning' : type === 'warning',
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
            </div>
            <div class="c-alert__close">
                x
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AtAlert',
        props: {
            title: {
                type: String,
                default: undefined
            },
            text: {
                type: String,
                default: undefined
            },
            type: {
                type: String,
                default: undefined
            },
            icon: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                isVisible: false
            }
        }

    }
</script>

<style lang="scss">
  .c-alert {
    --c-alert-padding: #{em(16px) em(8px)};
    --c-alert-radius: var(--radius-s);
    --c-alert-background: #fff;
    --c-alert-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    --c-alert-info-border-color: #5575c7;
    --c-alert-warning-border-color: #ffbf2f;
    --c-alert-error-border-color: #e52b20;
    --c-alert-ok-border-color: #63ce63;
    --c-alert-text-color: #353c43;
    --c-alert-text-font-size: #{em(14px)};
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

    &__inner {
      padding-left: #{em(16px)};
    }
  }
</style>
