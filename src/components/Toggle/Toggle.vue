<template>
    <div>
        <input
            v-toggle
            type="checkbox"
            toggle-class="is-active"
            toggle-trigger-class="button--active"
            toggle-trigger="#button"
            toggle-prop="checked"
            toggle-event="mouseenter"
        >

        <button id="button">
            Toggle Class and Prop "checked" with Mouse Enter event
        </button>

        <br>
        <br>
        <br>

        <input
            v-toggle
            type="checkbox"
            toggle-class="input"
            toggle-trigger="[
               {
                  &quot;state&quot;: true,
                  &quot;trigger&quot;: &quot;#true&quot;,
                  &quot;class&quot;: &quot;boton&quot;
               },
               {
                  &quot;state&quot;: false,
                  &quot;trigger&quot;: &quot;#false&quot;,
                  &quot;class&quot;: &quot;boton2&quot;
               }
            ]"
            toggle-prop="checked"
        >

        <button id="true">
            Force state true and Prop Checked
        </button> |
        <button id="false">
            Force state false and Prop Not Checked
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
                default: 'click'
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
            },
            toggleProp: {
                type: String,
                default: undefined
            }
        },
        data () {
            return {
                open: false
            }
        }
    }
</script>
