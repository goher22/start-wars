<template>
  <v-container>
    <v-tabs v-model="tab" background-color="indigo" dark grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item><TableFlim></TableFlim></v-tab-item>
      <v-tab-item><TableStarships></TableStarships></v-tab-item>
      <v-tab-item><TableVehicles></TableVehicles></v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import TableFlim from '@/components/TableFilm.vue'
import TableStarships from '@/components/TableStarships.vue'
import TableVehicles from '@/components/TableVehicles.vue'
export default {
  components: {
    TableFlim,
    TableStarships,
    TableVehicles
  },
  data () {
    return {
      tab: null,
      items: [
        'Peliculas', 'Naves', 'Vehículos',
      ],
    }
  }
}
</script>
