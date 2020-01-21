<template>
    <div class="c-header">
        <a class="c-header__inner">
            <AtPicture class="c-header__logo" :src="logo" />
            <div class="c-header__nav">
                <a
                    v-for="item in nav"
                    :key="item.id"
                    :href="item.link"
                    class="c-header__menu-link"
                    target="_blank"
                >
                    {{ item.text }}
                </a>
            </div>
            <nav class="c-header__menu">
                <a
                    v-for="item in menu"
                    :key="item.id"
                    :href="item.link"
                    class="c-header__menu-link"
                    target="_blank"
                >
                    {{ item.text }}
                </a>
            </nav>
        </a>
    </div>
</template>

<script>
    import AtPicture from '@components/Picture/Picture'
    export default {
        name: 'AtHeader',
        components: {
            AtPicture
        },
        props: {
            logo: {
                type: String,
                default: undefined
            },
            nav: {
                type: Array,
                default: () => []
            },
            menu: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss">
  .c-header {
    --c-header-picture-ratio-width: 2.5;
    --c-header-picture-ratio-height: 1;
    --c-header-picture-loading-background: #fff;
    --c-header-menu-link-color: var(--color-primary);
  }
</style>

<style lang="scss" scoped>
  .c-header {
    &__inner {
      display: grid;
      grid-template-columns: 130px 1fr;
      grid-template-areas:
        "logo nav"
        "logo menu";
    }

    &__logo {
      grid-area: logo;

      --c-picture-loading-background: var(--c-header-picture-loading-background);
      --c-picture-ratio-width: var(--c-header-picture-ratio-width);
      --c-picture-ratio-height: var(--c-header-picture-ratio-height);
    }

    &__menu {
      display: flex;
      align-items: center;
      grid-area: menu;
      justify-self: end;

      &-link {
        color: var(--c-header-menu-link-color);

        & + & {
          margin-left: #{em(16px)};
        }
      }
    }

    &__nav {
      justify-self: end;
    }
  }
</style>
