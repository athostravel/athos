<template>
    <picture v-lazy class="c-picture">
        <AtPictureSource
            v-for="source in sources"
            :key="source.id"
            :shim="shim"
            :srcset="source.srcset"
            :media="source.media"
            :type="source.type"
        />
        <img
            class="c-picture__img"
            :src="shim"
            :data-src="src"
            :alt="alt"
            :title="title"
        >
    </picture>
</template>

<script>
    import LazyLoadDirective from '@directives/LazyLoadDirective'
    import AtPictureSource from '@components/Picture/PictureSource.vue'

    export default {
        name: 'AtPicture',
        components: {
            AtPictureSource
        },
        directives: {
            lazy: LazyLoadDirective
        },
        props: {
            src: {
                type: String,
                default: 'https://source.unsplash.com/random/1920x1080'
            },
            alt: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: undefined
            },
            sources: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                shim: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            }
        }
    }
</script>

<style lang="scss">
  .c-picture {
    --c-picture-ratio-width: 16;
    --c-picture-ratio-height: 9;
    --c-picture-overlay: transparent;
    --c-picture-filter: none;
    --c-picture-loading-background: #f6f6f6;
  }
</style>

<style scoped lang="scss">
  .c-picture {
    position: relative;
    overflow: hidden;

    &::before {
      display: block;
      width: 100%;
      padding-top: calc(calc(var(--c-picture-ratio-height) / var(--c-picture-ratio-width)) * 100%);
      content: "";
      background: var(--c-picture-loading-background);
    }

    img,
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    img {
      opacity: 0;
      transition: 0.3s opacity;
      will-change: opacity;
    }

    &::after {
      background: var(--c-picture-overlay);
      content: "";
      filter: var(--c-picture-filter); //Nuevo: No funciona
      z-index: 2;
    }

    &.is-loaded {
      img {
        opacity: 1;
      }
    }
  }
</style>
