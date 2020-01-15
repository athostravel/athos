<template>
    <div class="preview-items">
        <AtInput />
        <AtInput v-bind="example1" />
        <AtInput v-bind="example2" />
        <AtInput v-bind="example3" />
        <AtInput v-bind="example4" />
        <AtInput v-bind="example5" />
        <AtInput v-bind="example5" size="small" />
        <!-- <AtInput v-bind="example6" />
        <AtInput v-bind="example7" />
        <AtInput v-bind="example8" />
        <AtInput v-bind="example9" />
        <AtInput v-bind="example10" />
        <AtInput v-bind="example11" />
        <AtInput v-bind="example12" />
        <AtInput v-bind="example13" /> -->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                example1: {
                    id: 'example1',
                    label: 'Fullname',
                    placeholder: 'Fullname'
                },
                example2: {
                    id: 'example2',
                    label: 'Fullname',
                    placeholder: 'Fullname',
                    value: 'Antonio Banderas'
                },
                example3: {
                    id: 'example3',
                    label: 'Input disabled',
                    placeholder: 'Input disabled',
                    value: 'Antonio Banderas',
                    disabled: true
                },
                example4: {
                    id: 'example4',
                    label: 'Input readonly',
                    placeholder: 'Input readonly',
                    value: 'Antonio Banderas',
                    readonly: true
                },
                example5: {
                    id: 'example5',
                    label: 'Fullname',
                    placeholder: 'Fullname',
                    value: 'Antonio Banderas',
                    icon: 'heart'

                }
                // example6: {
                //     id: 'example6',
                //     label: 'Fullname',
                //     placeholder: 'Fullname',
                //     value: 'Antonio Banderas',
                //     iconAlign: 'left',
                //     atButton: {
                //         icon: 'heart',
                //         tag: 'span',
                //         flat: true
                //     }
                // },
                // example7: {
                //     id: 'example7',
                //     label: 'Fullname',
                //     placeholder: 'Fullname',
                //     value: 'Antonio Banderas',
                //     iconDetail: true,
                //     atButton: {
                //         icon: 'heart',
                //         tag: 'span',
                //         flat: true
                //     }
                // },
                // example8: {
                //     id: 'example8',
                //     label: 'Fullname',
                //     placeholder: 'Fullname',
                //     value: 'Antonio Banderas',
                //     iconAlign: 'left',
                //     iconDetail: true,
                //     atButton: {
                //         icon: 'heart',
                //         tag: 'span',
                //         flat: true
                //     }
                // },
                // example9: {
                //     id: 'example9',
                //     label: 'Size',
                //     placeholder: 'Size',
                //     value: 'Tiny',
                //     iconAlign: 'left',
                //     iconDetail: true,
                //     atButton: {
                //         icon: 'heart',
                //         tag: 'span',
                //         flat: true
                //     },
                //     size: 'tiny'
                // },
                // example10: {
                //     id: 'example10',
                //     label: 'Size',
                //     placeholder: 'Size',
                //     value: 'Small',
                //     iconAlign: 'left',
                //     iconDetail: true,
                //     atButton: {
                //         icon: 'heart',
                //         tag: 'span',
                //         flat: true
                //     },
                //     size: 'small'
                // },
                // example11: {
                //     id: 'example11',
                //     label: 'Size',
                //     placeholder: 'Size',
                //     value: 'Default',
                //     iconAlign: 'left',
                //     iconDetail: true,
                //     atButton: {
                //         icon: 'heart',
                //         tag: 'span',
                //         flat: true
                //     }
                // },
                // example12: {
                //     id: 'example12',
                //     label: 'Size',
                //     placeholder: 'Size',
                //     value: 'Medium',
                //     iconAlign: 'left',
                //     iconDetail: true,
                //     atButton: {
                //         icon: 'heart',
                //         tag: 'span',
                //         flat: true
                //     },
                //     size: 'medium'
                // },
                // example13: {
                //     id: 'example13',
                //     label: 'Size',
                //     placeholder: 'Size',
                //     value: 'Large',
                //     iconAlign: 'left',
                //     iconDetail: true,
                //     atButton: {
                //         icon: 'heart',
                //         tag: 'span',
                //         flat: true
                //     },
                //     size: 'large'
                // }
            }
        }
    }
</script>
