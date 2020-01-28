<template>
    <div class="c-layout-virgo">
        <div class="c-layout-virgo__box">
            <slot name="header" />
            <slot />
        </div>
        <slot name="footer" />
    </div>
</template>

<script>
    export default {
        name: 'AtLayoutVirgo'
    }
</script>

<style lang="scss" scoped>
  .c-layout-virgo {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50vw;
      max-height: em(700px);
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
      z-index: 1;
      background: linear-gradient(163.91deg, var(--color-tertiary) 0%, var(--color-quaternary) 100%);
    }

    &__box {
      background-color: var(--color-shade-0);
      max-width: var(--wrapper-basalt);
      box-shadow: var(--shadow-basalt);
      border-bottom-left-radius: var(--radius-s);
      border-bottom-right-radius: var(--radius-s);
      min-height: em(800px);
      position: relative;
      z-index: 2;
      margin-left: auto;
      margin-right: auto;
      padding: em(40px) em(80px);
    }
  }
</style>
