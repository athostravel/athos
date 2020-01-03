<template>
    <div>

        <input
            type="checkbox"
            v-toggle
            toggle-class="input"
            toggle-trigger-class="boton"
            toggle-trigger='.caca'
            toggle-prop="checked"
        />

        <button id="true" class="caca">
            force true
        </button>
        <button id="false" class="caca">
            force false
        </button>

    </div>
</template>

<script>
    import ToggleDirective from '@directives/ToggleDirective'

    export default {
        name: 'AtToggle',
        directives: {
            toggle: ToggleDirective
        },
        props: {
            toggleEvent: {
                type: String,
                default: "click"
            },
            toggleTrigger: {
                type: String,
                default: undefined
            },
            toggleTriggerClass: {
                type: String,
                default: 'is-active'
            },
            toggleClass: {
                type: String,
                default: 'is-active'
            }
        },
        data () {
            return {
                open: false
            }
        }
    }
</script>
