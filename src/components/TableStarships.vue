<template>
    <v-card>
        <v-simple-table fixed-header>
            <template>
                <thead>
                    <tr>
                        <th class="text-center">
                            Nombre
                        </th>
                        <th class="text-center">
                            Modelo
                        </th>
                        <th class="text-center">
                            Manofactura
                        </th>
                        <th class="text-center">
                            Costo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="this.load">
                        <td class="text-center mb-3" colspan="4">
                            <v-subheader class="text-center">Cargando...</v-subheader>
                            <v-progress-linear indeterminate></v-progress-linear>
                        </td>
                    </tr>
                    <tr v-else v-for="(item, index) in getlist_starships" :key="index">
                        <td>{{item.name}}</td>
                        <td>{{item.model}}</td>
                        <td>{{item.manufacturer}}</td>
                        <td>{{item.cost}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-btn-toggle>
            <v-btn :disabled="(this.getprevious_starships==null && !this.load)" v-on:click="load_data(getprevious_starships, -1)">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>{{count}}</v-icon>
            </v-btn>
            <v-btn :disabled="(this.getnext_starships==null && !this.load)" v-on:click="load_data(getnext_starships, 1)">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-btn-toggle>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data () {
        return {
            count: 1,
            load: false
        }
    },
    computed: {
        ...mapGetters('setstarships', ['getlist_starships', 'getnext_starships', 'getprevious_starships'])
    },
    methods: {
        ...mapActions('setstarships', ['load_starships']),
        load_data(url_api, count = 0){
            if(!this.load){            
                this.load = true
                this.count += count
                this.load_starships(url_api).finally(() => this.load = false)
            }
        }
        
    },
    mounted () {
        this.load_data(process.env.VUE_APP_URL_API+'/starships')
    }
}
</script>