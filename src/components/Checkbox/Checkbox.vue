<template>
    <div
        class="c-checkbox"
        :class="{
            'c-checkbox--switch' : toggleSwitch
        }"
    >
        <input
            :id="idElement"
            class="c-checkbox__input"
            :type="type"
            :name="name"
            :required="required"
            :disabled="disabled"
            :value="value"
            :checked="checked"
        >
        <span v-if="toggleSwitch" class="c-checkbox__slider"></span>
        <label v-if="label" class="c-checkbox__label" :for="idElement">
            <span class="c-checkbox__label-text">
                {{ label }}
            </span>
        </label>
    </div>
</template>

<script>
    import formControl from '@mixins/formControl'
    export default {
        name: 'AtCheckbox',
        mixins: [formControl],
        props: {
            type: {
                type: String,
                default: 'checkbox'
            },
            toggleSwitch: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-checkbox {
        $this: &;

        --c-checkbox-width: 1em;
        --c-checkbox-height: 1em;
        --c-checkbox-font-size: 1em;
        --c-checkbox-input-border: #{em(1px)} solid #dfe0e4;
        --c-checkbox-input-background: #fff;
        --c-checkbox-input-radius: var(--radius-s);
        --c-checkbox-input-checked-background: #000;
        --c-checkbox-input-checked-border: #{em(1px)} solid #000;
        --c-checkbox-icon: 'I';
        --c-checkbox-align: center;

        align-items: center;
        display: flex;
        cursor: pointer;

        &__input {
            opacity: 0;
            position: absolute;

            &:checked {
                & + #{$this}__label {
                    &::before {
                        background: var(--c-checkbox-input-checked-background);
                        border: var(--c-checkbox-input-checked-border);
                        color: #fff;
                        content: var(--c-checkbox-icon);
                        font-family: var(--font-family-icons);
                    }
                }
            }
        }

        &__label {
            align-items: var(--c-checkbox-align);
            display: flex;

            &::before {
                align-items: center;
                content: "";
                background: var(--c-checkbox-input-background);
                border-radius: var(--c-checkbox-input-radius);
                border: var(--c-checkbox-input-border);
                display: flex;
                height: var(--c-checkbox-height);
                justify-content: center;
                margin-right: 0.5em;
                transition: all 0.3s;
                width: var(--c-checkbox-width);
            }

            &-text {
                flex: 1;
                font-size: var(--c-checkbox-font-size);
            }
        }

        &--switch {
            --c-checkbox-width: 3em;
            --c-checkbox-height: 1.5em;
            --c-checkbox-slider-width: 1em;
            --c-checkbox-slider-height: 1em;
            --c-checkbox-slider-border: #{em(1px)} solid #888;
            --c-checkbox-slider-radius: 2em;
            --c-checkbox-slider-background: #ccc;
            --c-checkbox-slider-active-background: #000;
            --c-checkbox-slider-transform: #{em(4px)};

            align-items: center;
            display: flex;
            height: var(--c-checkbox-height);
            position: relative;
            width: var(--c-checkbox-width);

            #{$this} {
                &__input {
                    width: 0;
                    height: 0;

                    &:checked {
                        & + #{$this}__slider {
                            background: var(--c-checkbox-slider-active-background);

                            &::before {
                                transform: translateX(calc(100% + (var(--c-checkbox-slider-width) / 2) + (var(--c-checkbox-slider-transform) / 2)));
                            }

                            & + #{$this}__label {
                                &::before {
                                    background: transparent;
                                }
                            }
                        }
                    }
                }

                &__label {
                    cursor: pointer;

                    &::before {
                        border: none;
                    }
                }

                &__slider {
                    background-color: var(--c-checkbox-slider-background);
                    border: var(--c-checkbox-slider-border);
                    border-radius: var(--c-checkbox-slider-radius);
                    bottom: 0;
                    left: 0;
                    pointer-events: none;
                    position: absolute;
                    right: 0;
                    transition: 0.3s background;
                    top: 0;

                    &::before {
                        background-color: #fff;
                        border-radius: var(--radius-circle);
                        bottom: #{em(3px)};
                        content: "";
                        height: var(--c-checkbox-slider-height);
                        position: absolute;
                        transform: translateX(var(--c-checkbox-slider-transform));
                        transition: 0.3s transform;
                        width: var(--c-checkbox-slider-width);
                    }
                }
            }
        }
    }
</style>
