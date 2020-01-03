<template>
    <div>

        <button class="myButton">
            Hover Event #1
        </button>
        |
        <button class="myButton">
            Hover Event #2
        </button>
        |
        <button class="myButton">
            Hover Event #3
        </button>
        <br><br>
        <div v-toggle toggle-trigger=".myButton" toggle-trigger-class="class-click-active" toggle-class="is-active">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at consequatur eius fugiat illo iusto odio sunt voluptatem. Accusantium adipisci cupiditate dolores eligendi excepturi facilis laborum quaerat quo similique. Repudiandae.
        </div>

        <br>
        <br>
        <br>

        <input
            type="checkbox"
            v-toggle
            toggle-class="is-active"
            toggle-trigger-class="button--active"
            toggle-trigger='#button'
            toggle-prop="checked"
        />

        <button id="button">
            Toggle Class and Prop "checked"
        </button>

        <br>
        <br>
        <br>

        <input
            type="checkbox"
            v-toggle
            toggle-class="input"
            toggle-trigger='[
               {
                  "state": true,
                  "trigger": "#true",
                  "class": "boton"
               },
               {
                  "state": false,
                  "trigger": "#false",
                  "class": "boton2"
               }
            ]'
            toggle-prop="checked"
        />

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
