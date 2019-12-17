<template>
    <div v-if="api" class="theme-default-content">
        <Tabs>
            <Tab v-for="(tabs, index) in api" :key="tabs.index" :title="tabs.title">
                <table>
                    <thead>
                        <tr>
                            <th v-for="(item ,objKey, idx) in tabs.items[index]" :key="idx">
                                <div>
                                    {{ objKey }}
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tabs.items" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.type }}</td>
                            <td>{{ item.parameters }}</td>
                            <td>{{ item.description }}</td>
                            <td>{{ item.default }}</td>
                        </tr>
                    </tbody>
                </table>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
    import Tabs from '@theme/components/Tabs'
    import Tab from '@theme/components/Tab'

    export default {
        components: {
            Tab,
            Tabs
        },
        computed: {
            api () {
                return this.$page.frontmatter.API
            }
        }
    }
</script>

<style lang="scss" scoped>
  th {
    text-transform: capitalize;
  }
</style>
