<template>
    <v-card>
        <v-simple-table fixed-header height="500px">
            <template>
                <thead>
                    <tr>
                        <th class="text-center">
                            Nombre
                        </th>
                        <th class="text-center">
                            Genero
                        </th>
                        <th class="text-center">
                            Altura
                        </th>
                        <th class="text-center">
                            Masa
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="this.loadData">
                        <td class="text-center mb-3" colspan="4">
                            <v-subheader class="text-center">Cargando...</v-subheader>
                            <v-progress-linear indeterminate></v-progress-linear>
                        </td>
                    </tr>
                    <tr v-else v-for="(item, index) in getlist_peoples" :key="index">
                        <td class="text-center">{{item.name}}</td>
                        <td class="text-center">{{item.gender}}</td>
                        <td class="text-center">{{item.height}}</td>
                        <td class="text-center">{{item.mass}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['loadData'],
    data () {
        return {
            count: 1
        }
    },
    computed: {
        ...mapGetters('people', ['getlist_peoples'])
    }
}
</script>