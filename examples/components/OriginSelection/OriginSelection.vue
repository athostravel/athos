<template>
    <div>
        <AtButton @click.native="openModal('origin-selection')">
            Abrir
        </AtButton>
        <AtOriginSelection :items="items" />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        name: 'A Coruña',
                        code: 'LCG'
                    },
                    {
                        name: 'Alicante',
                        code: 'ALC'
                    },
                    {
                        name: 'Almeria',
                        code: 'LEI'
                    },
                    {
                        name: 'Asturias',
                        code: 'OVD'
                    },
                    {
                        name: 'Badajoz',
                        code: 'BJZ'
                    },
                    {
                        name: 'Barcelona',
                        code: 'BCN'
                    },
                    {
                        name: 'Bilbao',
                        code: 'BIO'
                    },
                    {
                        name: 'Burgos',
                        code: 'RGS'
                    },
                    {
                        name: 'Castellón',
                        code: 'CDT'
                    },
                    {
                        name: 'El Hierro',
                        code: 'VDE'
                    },
                    {
                        name: 'Fuerteventura',
                        code: 'FUE'
                    },
                    {
                        name: 'Girona',
                        code: 'GRO'
                    },
                    {
                        name: 'Gran Canaria',
                        code: 'LPA'
                    },
                    {
                        name: 'Granada',
                        code: 'GRX'
                    },
                    {
                        name: 'Ibiza',
                        code: ''
                    },
                    {
                        name: 'Jerez',
                        code: ''
                    },
                    {
                        name: 'La Gomera',
                        code: ''
                    },
                    {
                        name: 'La Palma',
                        code: ''
                    }, {
                        name: 'Lanzarote',
                        code: ''
                    }, {
                        name: 'León',
                        code: ''
                    }, {
                        name: 'Lleida',
                        code: ''
                    }, {
                        name: 'Logroño',
                        code: ''
                    }, {
                        name: 'Madrid',
                        code: ''
                    }, {
                        name: 'Málaga',
                        code: ''
                    }, {
                        name: 'Melilla',
                        code: ''
                    }, {
                        name: 'Menorca',
                        code: ''
                    }, {
                        name: 'Murcia',
                        code: ''
                    }, {
                        name: 'Palma de Mallorca',
                        code: ''
                    }, {
                        name: 'Pamplona',
                        code: ''
                    }, {
                        name: 'Reus',
                        code: ''
                    }, {
                        name: 'Salamanca',
                        code: ''
                    }, {
                        name: 'San Sebastián',
                        code: ''
                    }, {
                        name: 'Santander',
                        code: ''
                    }, {
                        name: 'Santiago de Compostela',
                        code: ''
                    }, {
                        name: 'Sevilla',
                        code: ''
                    }, {
                        name: 'Tenerife',
                        code: ''
                    }, {
                        name: 'Valencia',
                        code: ''
                    }, {
                        name: 'Valladolid',
                        code: ''
                    }, {
                        name: 'Vigo',
                        code: ''
                    }, {
                        name: 'Vitoria',
                        code: ''
                    }, {
                        name: 'Zaragoza',
                        code: ''
                    }
                ]
            }
        }
    }
</script>
