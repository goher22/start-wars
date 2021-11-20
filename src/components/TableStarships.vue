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
                    <tr v-for="(item, index) in getlist_starships" :key="index">
                        <td>{{item.name}}</td>
                        <td>{{item.model}}</td>
                        <td>{{item.manufacturer}}</td>
                        <td>{{item.cost}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-btn-toggle>
            <v-btn :disabled="(this.getprevious_starships==null)">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>{{count}}</v-icon>
            </v-btn>
            <v-btn :disabled="(this.getnext_starships==null)" v-on:click="next_starships">
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
            count: 1
        }
    },
    computed: {
        ...mapGetters('setstarships', ['getlist_starships', 'getnext_starships', 'getprevious_starships'])
    },
    methods: {
        ...mapActions('setstarships', ['load_starships']),
        next_starships(){
            this.count++
            this.load_starships(this.getnext_starships)
        },
        previous_starships(){
            this.count--
            this.load_starships(this.getprevious_starships)
        }
    },
    mounted () {
        this.load_starships(process.env.VUE_APP_URL_API+'/starships')
    }
}
</script>