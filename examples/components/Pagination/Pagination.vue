<template>
    <AtPagination v-bind="pagination" />
</template>

<script>
    export default {
        data () {
            return {
                pagination: {
                    items: [
                        {
                            text: '1',
                            tag: 'a',
                            href: '#1',
                            disabled: false
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
                            disabled: false
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
