<template>
    <AtInput />

    <AtInput label="Fullname" placeholder="Fullname" />

    <AtInput label="Fullname" placeholder="Fullname" value="Antonio Banderas" />

    <AtInput label="Input disabled" placeholder="Input disabled" value="Antonio Banderas" disabled />

    <AtInput label="Input readonly" placeholder="Input readonly" value="Antonio Banderas" readonly />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-detail />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" icon-detail />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="tiny" icon="phone" icon-align="left" icon-detail />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="small" icon="phone" icon-align="left" icon-detail />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" icon="phone" icon-align="left" icon-detail />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="medium" icon="phone" icon-align="left" icon-detail />

    <AtInput label="Telephone number" placeholder="Telephone number" type="tel" size="large" icon="phone" icon-align="left" icon-detail />
</template>

<script>
    export default {
        data() {
            return {
                input: {
                    label: "Fullname",
                    placeholder: "Fullname"
                }
            }
        }
    }
</script>