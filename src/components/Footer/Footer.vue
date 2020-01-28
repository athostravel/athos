<template>
    <div
        class="c-footer"
        :class="{
            'c-footer--bg-color-primary' : cfg.bgColor === 'primary',
            'c-footer--bg-color-secondary' : cfg.bgColor === 'secondary'
        }"
    >
        <AtContainer v-bind="cfg.container">
            <div class="c-footer__inner">
                <div
                    v-for="item in lists"
                    :key="item.id"
                    class="c-footer__list"
                >
                    <AtText v-bind="cfg.title" class="c-footer__title">
                        {{ item.title }}
                    </AtText>

                    <AtLinksList
                        v-for="list in item.links"
                        :key="list.id"
                        v-bind="[cfg.linkList, { config: cfg.linkList }]"
                        class="c-footer__links-list"
                        :items="list"
                    />
                </div>
            </div>
            <div class="c-footer__footer">
                <AtText v-if="copyright" v-bind="cfg.copyright" class="c-footer__text">
                    {{ copyright.text }}
                </AtText>

                <AtPicture class="c-footer__logo"
                           v-if="image"
                           v-bind="cfg.image"
                           :src="image.src"
                           :ratio="cfg.image.ratio"
                />
            </div>
        </AtContainer>
    </div>
</template>

<script>
    import AtContainer from '@components/Container/Container'
    import AtLinksList from '@components/LinksList/LinksList'
    import AtText from '@components/Text/Text'
    import AtPicture from '@components/Picture/Picture'

    export default {
        name: 'AtFooter',
        components: {
            AtContainer,
            AtLinksList,
            AtText,
            AtPicture
        },
        props: {
            lists: {
                type: Array,
                default: () => []
            },
            links: {
                type: Array,
                default: () => []
            },
            bgColor: {
                type: String,
                default: undefined
            },
            copyright: {
                type: Object,
                default: () => {}
            },
            image: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                cfg: {
                    bgColor: 'primary',
                    container: {},
                    section: {},
                    title: {
                        size: 'basalt',
                        color: 'white',
                        weight: 'bold',
                        tag: 'span'
                    },
                    linkList: {
                        text: {
                            size: 'diorite'
                        },
                        link: {
                            color: 'white'
                        }
                    },
                    copyright: {
                        color: 'white',
                        size: 'diorite'
                    },
                    image: {
                        ratio: {
                            height: 1,
                            width: 2,
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
  .c-footer {
    --footer-bg-color-primary: var(--color-primary);
    --footer-bg-color-secondary: var(--color-secondary);
    --footer-padding: 0;
    --footer-inner-padding: var(--space-m) 0;
    --footer-lists-row-gap: var(--space-xl);
    --footer-lists-column-gap: var(--space-7xl);
    --footer-title-padding: 0 0 var(--space-xs) 0;
    --footer-title-margin: 0 0 var(--space-s) 0;
    --footer-title-border-color: #fff;
  }
</style>

<style lang="scss" scoped>
  .c-footer {
    padding: var(--footer-padding);

    &--bg-color-primary {
      background: var(--footer-bg-color-primary);
    }

    &--bg-color-secondary {
      background: var(--footer-bg-color-secondary);
    }

    &__inner {
      display: grid;
      padding: var(--footer-inner-padding);
      grid-template-columns: 1fr 1fr;
      grid-column-gap: var(--footer-lists-column-gap);
      grid-row-gap: var(--footer-lists-row-gap);
    }

    &__title {
      display: inline-block;
      border-bottom: 1px solid var(--footer-title-border-color);
      padding: var(--footer-title-padding);
      margin: var(--footer-title-margin);
    }

      &__footer {
          border-top: 1px solid #fff;
          margin-top: 26px;
          padding: var(--footer-inner-padding);
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: var(--footer-lists-column-gap);
          grid-row-gap: var(--footer-lists-row-gap);
      }
  }
</style>
