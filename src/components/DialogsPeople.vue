<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="load_data"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Actores</v-toolbar-title>
        </v-toolbar>
        <TablePeople :loadData='load'></TablePeople>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
  import TablePeople from '@/components/TablePeople.vue'
  export default {
    props: ['peoples'],
    components: {
      TablePeople
    },
    data () {
      return {
        dialog: false,
        load: false
      }
    },
    methods: {
      ...mapActions('people', ['get_people']),
      load_data() {
        this.load = true
        this.get_people(this.peoples).finally(()=>this.load = false)
      }
    },
  }
</script>