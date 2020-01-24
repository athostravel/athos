<template>
    <AtPagination v-bind="atPagination" />
</template>

<script>
    export default {
        data () {
            return {
                atPagination: {
                    navFirst: true,
                    navLast: true,
                    pages: [
                        {
                            text: '1',
                            tag: 'a',
                            href: '#1',
                            disabled: false,
                            selected: true
                        },
                        {
                            text: '2',
                            tag: 'a',
                            href: '#2',
                            disabled: false
                        },
                        {
                            text: '3',
                            tag: 'a',
                            href: '#3',
                            disabled: false
                        },
                        {
                            text: '...',
                            tag: 'span',
                            disabled: true
                        },
                        {
                            text: '22',
                            tag: 'a',
                            href: '#22',
                            disabled: false
                        },
                        {
                            text: '23',
                            tag: 'a',
                            href: '#23',
                            disabled: false
                        },
                        {
                            text: '24',
                            tag: 'a',
                            href: '#24',
                            disabled: false
                        }
                    ]
                }
            }
        }
    }
</script>
