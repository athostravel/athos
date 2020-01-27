<template>
    <div>
        <AtText>
            <AtLink v-bind="atLinkIcon">
                <AtIconCard icon="heart">
                    Link with icon
                </AtIconCard>
            </AtLink>
        </AtText>

        <br>

        <AtText>
            Link default:
            <AtLink v-bind="atLink">
                example here.
            </AtLink>
        </AtText>

        <br>

        <AtText>
            Link color secondary:
            <AtLink v-bind="atLinkSecondary">
                example here.
            </AtLink>
        </AtText>

        <br>

        <AtText>
            Link underline:
            <AtLink v-bind="atLinkUnderline">
                example here.
            </AtLink>
        </AtText>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atLinkIcon: {
                    href: 'http://www.avoristravel.com/',
                    target: '_blank'
                },
                atLink: {
                    href: 'http://www.avoristravel.com/',
                    target: '_blank'
                },
                atLinkSecondary: {
                    href: 'http://www.avoristravel.com/',
                    target: '_blank',
                    secondary: true
                },
                atLinkUnderline: {
                    href: 'http://www.avoristravel.com/',
                    target: '_blank',
                    underline: true
                }
            }
        }
    }
</script>
