<template>
    <v-card>
        <v-simple-table fixed-header>
            <template>
                <thead>
                    <tr>
                        <th class="text-center">
                            Titulo
                        </th>
                        <th class="text-center">
                            Director
                        </th>
                        <th class="text-center">
                            Productora
                        </th>
                        <th class="text-center">
                            fecha de lanzamiento
                        </th>
                        <th>
                            Actores
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="this.load">
                        <td class="text-center" colspan="5">
                            <v-subheader class="text-center">Cargando...</v-subheader>
                            <v-progress-linear indeterminate></v-progress-linear>
                        </td>
                    </tr>
                    <tr v-else v-for="(item, index) in getlist_films" :key="index">
                        <td>{{item.title}}</td>
                        <td>{{item.director}}</td>
                        <td>{{item.producer}}</td>
                        <td>{{item.releaseDate}}</td>
                        <td><DialogsPeople :peoples='item.peoples'></DialogsPeople></td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-btn-toggle>
            <v-btn :disabled="this.getprevious_films==null" v-on:click="load_data(getprevious_films, -1)">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>{{count}}</v-icon>
            </v-btn>
            <v-btn :disabled="this.getnext_films==null" v-on:click="load_data(getnext_films, 1)">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-btn-toggle>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DialogsPeople from '@/components/DialogsPeople.vue'
export default {
    components: {
        DialogsPeople
    },
    data () {
        return {
            count: 1,
            load: false
        }
    },
    computed: {
        ...mapGetters('films', ['getlist_films', 'getnext_films', 'getprevious_films'])
    },
    methods: {
        ...mapActions('films', ['load_films']),
        load_data(url_api, count = 0){
            if(!this.load){  
                this.load = true
                this.count += count 
                this.load_films(url_api).finally(()=> this.load = false)
            }
        }
    },
    mounted () {
        this.load_data(process.env.VUE_APP_URL_API+'/films')
    }
}
</script>