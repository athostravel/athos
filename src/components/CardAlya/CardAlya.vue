<template>
    <div
        class="c-card-alya"
        :class="{
            'c-card-alya--inverted': inverted,
            'c-card-alya--shadow': shadow,
            'c-card-alya--rounded': rounded
        }"
    >
        <AtPicture
            v-if="image && image.src"
            class="c-card-alya__picture"
            v-bind="[cfg.image, image]"
        />
        <AtText class="c-card-alya__box">
            <AtText v-if="title" v-bind="cfg.title" class="c-card-alya__title">
                {{ title.text }}
            </AtText>

            <AtText v-if="description" v-bind="cfg.description" class="c-card-alya__description">
                {{ description.text }}
            </AtText>
        </AtText>
    </div>
</template>

<script>
    import AtPicture from '@components/Picture/Picture'
    import AtText from '@components/Text/Text'

    export default {
        name: 'AtCardAlya',
        components: {
            AtPicture,
            AtText
        },
        props: {
            image: {
                type: Object,
                default: () => {
                }
            },
            title: {
                type: Object,
                default: () => {}
            },
            description: {
                type: Object,
                default: () => {}
            },
            inverted: {
                type: Boolean,
                default: false
            },
            shadow: {
                type: Boolean,
                default: true
            },
            rounded: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                cfg: {
                    title: {
                        tag: 'div',
                        size: 'obsidian',
                        color: 'primary'
                    },
                    description: {
                        tag: 'div',
                        size: 'diorite',
                        color: 'secondary'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-card-alya {
    --c-card-alya-picture-ratio-height: 1;
    --c-card-alya-picture-ratio-width: 1;
    --c-card-alya-picture-margin-left: 0;
    --c-card-alya-picture-margin-right: #{em(24px)};
    --c-card-alya-picture-order: 0;
    --c-card-alya-shadow: var(--shadow-basalt);
    --c-card-alya-rounded: var(--radius-s);
    --c-card-alya-box-padding: var(--space-s) 0;
  }
</style>

<style lang="scss" scoped>
  .c-card-alya {
    display: flex;

    &--shadow {
      box-shadow: var(--c-card-alya-shadow);
    }

    &--rounded {
      border-radius: var(--c-card-alya-rounded);
    }

    &__picture {
      min-width: em(170px);
      margin-left: var(--c-card-alya-picture-margin-left);
      margin-right: var(--c-card-alya-picture-margin-right);
      order: var(--c-card-alya-picture-order);
      flex-shrink: 1;

      &::before {
        --c-picture-ratio-height: var(--c-card-alya-picture-ratio-height);
        --c-picture-ratio-width: var(--c-card-alya-picture-ratio-width);
      }
    }

      &__box {
          padding: var(--c-card-alya-box-padding);
      }
  }
</style>
