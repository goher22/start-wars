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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in getlist_films" :key="index">
                        <td>{{item.title}}</td>
                        <td>{{item.director}}</td>
                        <td>{{item.producer}}</td>
                        <td>{{item.releaseDate}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-btn-toggle>
            <v-btn :disabled="(this.getprevious_films==null)">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>{{count}}</v-icon>
            </v-btn>
            <v-btn :disabled="(this.getnext_films==null)">
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
        ...mapGetters('films', ['getlist_films', 'getnext_films', 'getprevious_films'])
    },
    methods: {
        ...mapActions('films', ['load_films'])
    },
    mounted () {
        this.load_films(process.env.VUE_APP_URL_API+'/films')
    }
}
</script>