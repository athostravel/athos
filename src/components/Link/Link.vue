<template>
    <a
        class="c-link"
        :href="href"
        :target="target"
        :class="{
            'c-link--underline': decoration === 'underline',
            'c-link--secondary': color === 'secondary',
            'c-link--white': color === 'white'
        }"
    >
        <slot />
    </a>
</template>

<script>
    export default {
        name: 'AtLink',
        props: {
            decoration: {
                type: String,
                default: undefined
            },
            color: {
                type: String,
                default: 'primary'
            },
            href: {
                type: String,
                default: undefined
            },
            target: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .c-link {
    --c-link--color-primary: var(--color-primary);
    --c-link--color-secondary: var(--color-secondary);
    --c-link--color-white: #fff;
    --c-link--color-white-hover-decoration: underline;
  }
</style>

<style lang="scss" scoped>
  .c-link {
    $this: &;

    color: var(--c-link--color-primary);
    transition: 0.3s;

    &:hover {
      color: var(--c-link--color-secondary);
    }

    &--secondary {
      color: var(--c-link--color-secondary);

      &:hover {
        color: var(--c-link--color-primary);
      }
    }

    &--white {
      color: var(--c-link--color-white);

      &:hover {
        color: var(--c-link--color-white);
        text-decoration: var(--c-link--color-white-hover-decoration);
      }
    }

    &--underline {
      text-decoration: underline;
    }
  }
</style>
