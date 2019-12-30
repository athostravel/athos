<template>
    <AtSwitch class="c-switch-orion" v-bind="atSwitch">
        <span slot="checked" class="c-switch-orion__checked">
            {{ checkedText }}
        </span>
        <span slot="unchecked" class="c-switch-orion__unchecked">
            {{ uncheckedText }}
        </span>
    </AtSwitch>
</template>

<script>
    import AtSwitch from '@components/Switch/Switch'

    export default {
        name: 'AtSwitchOrion',
        components: {
            AtSwitch
        },
        props: {
            atSwitch: {
                type: Object,
                default: () => {}
            },
            checkedText: {
                type: String,
                default: 'Si'
            },
            uncheckedText: {
                type: String,
                default: 'No'
            }
        }
    }
</script>

<style lang="scss">
  .c-switch-orion {
    --c-switch-orion-size: 1.5em;
    --c-switch-orion-checked-color: var(--color-success);
    --c-switch-orion-unchecked-color: var(--color-error);
    --c-switch-orion-font-weight: var(--font-weight-bold);
    --c-switch-orion-font-size: var(--font-size-2xs);
    --c-switch-orion-line-height: 1;

    // Switch
    --c-switch-toggle-background-color: var(--c-switch-orion-unchecked-color);
    --c-switch-toggle-checked-background-color: var(--c-switch-orion-checked-color);
    --c-switch-line-height: 0;
    --c-switch-align: center;
  }
</style>

<style lang="scss" scoped>
  .c-switch-orion {
    font-size: var(--c-switch-orion-size);

    &__checked,
    &__unchecked {
      text-transform: uppercase;
      font-weight: var(--c-switch-orion-font-weight);
      font-size: var(--c-switch-orion-font-size);
      line-height: var(--c-switch-orion-line-height);
    }

    &__checked {
      color: var(--c-switch-orion-checked-color);
    }

    &__unchecked {
      color: var(--c-switch-orion-unchecked-color);
    }
  }
</style>
