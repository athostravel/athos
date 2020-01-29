<template>
    <div>
        <AtCardAlya v-bind="atCardAlya" />
    </div>
</template>


<script>
    export default {
        data () {
            return {
                atCardAlya: {
                    title: {
                        text: 'Lorem ipsum'
                    },
                    description: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere impedit iusto officia sapiente sint sit sunt ullam. Animi blanditiis commodi est fugiat magnam non quam quia similique suscipit tenetur? Repellendus.'
                    },
                    image: {
                        src: 'https://source.unsplash.com/random/170x170'
                    }
                }
            }
        }
    }
</script>
