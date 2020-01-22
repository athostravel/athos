<template>
    <div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton">
                Button
            </AtButton>
            <AtButton v-bind="atButton" radiused>
                <AtIconCard icon="heart">
                    Button
                </AtIconCard>
            </AtButton>
            <AtButton v-bind="atButton" rounded>
                Button
            </AtButton>
            <AtButton v-bind="atButton" icon>
                <AtIcon icon="heart" />
            </AtButton>
            <AtButton v-bind="atButton" icon radiused>
                <AtIcon icon="heart" />
            </AtButton>
            <AtButton v-bind="atButton" icon rounded>
                <AtIcon icon="heart" />
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" variant="text">
                Text
            </AtButton>
            <AtButton v-bind="atButton" variant="text" radiused>
                <AtIconCard icon="heart">
                    Text
                </AtIconCard>
            </AtButton>
            <AtButton v-bind="atButton" variant="text" rounded>
                Text
            </AtButton>
            <AtButton v-bind="atButton" variant="text" icon>
                <AtIcon icon="heart" />
            </AtButton>
            <AtButton v-bind="atButton" variant="text" radiused icon>
                <AtIcon icon="heart" />
            </AtButton>
            <AtButton v-bind="atButton" variant="text" rounded icon>
                <AtIcon icon="heart" />
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" variant="outlined">
                Outlined
            </AtButton>
            <AtButton v-bind="atButton" variant="outlined" radiused>
                <AtIconCard icon="heart">
                    Outlined
                </AtIconCard>
            </AtButton>
            <AtButton v-bind="atButton" variant="outlined" rounded>
                Outlined
            </AtButton>
            <AtButton v-bind="atButton" variant="outlined" icon>
                <AtIcon icon="heart" />
            </AtButton>
            <AtButton v-bind="atButton" variant="outlined" radiused icon>
                <AtIcon icon="heart" />
            </AtButton>
            <AtButton v-bind="atButton" variant="outlined" rounded icon>
                <AtIcon icon="heart" />
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" variant="bordered">
                Bordered
            </AtButton>
            <AtButton v-bind="atButton" variant="bordered" radiused>
                <AtIconCard icon="heart">
                    Bordered
                </AtIconCard>
            </AtButton>
            <AtButton v-bind="atButton" variant="bordered" rounded>
                Bordered
            </AtButton>
            <AtButton v-bind="atButton" variant="bordered" icon>
                <AtIcon icon="heart" />
            </AtButton>
            <AtButton v-bind="atButton" variant="bordered" radiused icon>
                <AtIcon icon="heart" />
            </AtButton>
            <AtButton v-bind="atButton" variant="bordered" rounded icon>
                <AtIcon icon="heart" />
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" size="dunite">
                Dunite Size
            </AtButton>
            <AtButton v-bind="atButton" size="diorite">
                Diorite Size
            </AtButton>
            <AtButton v-bind="atButton" size="basalt">
                Basalt Size
            </AtButton>
            <AtButton v-bind="atButton" size="">
                Default Size
            </AtButton>
            <AtButton v-bind="atButton" size="obsidian">
                Obsidian Size
            </AtButton>
            <AtButton v-bind="atButton" size="tuff">
                Tuff Size
            </AtButton>
        </div>
        <div class="preview-items-horizontal">
            <AtButton v-bind="atButton" color="primary">
                Primary
            </AtButton>
            <AtButton v-bind="atButton" color="secondary">
                Secondary
            </AtButton>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                atButton: {
                    href: '#'
                }
            }
        }
    }
</script>
