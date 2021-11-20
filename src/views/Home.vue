<template>
  <v-container>
    <v-tabs v-model="tab" background-color="indigo" dark grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item><TableFlim></TableFlim></v-tab-item>
      <v-tab-item>item 2</v-tab-item>
      <v-tab-item>item 3</v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import TableFlim from '@/components/TableFilm.vue'
export default {
  components: {
    TableFlim
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
