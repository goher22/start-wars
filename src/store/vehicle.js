import axios from 'axios'

export default {
    namespaced: true,
    state: {
        list_vehicles: [],
        next_vehicles: null,
        previous_vehicles: null
    },
    getters: {
        getlist_vehicle:(state) => {
            return state.list_vehicles.map(function(e){
                return {
                    name: e.name,
                    model: e.model,
                    manufacturer: e.manufacturer,
                    cost: e.cost_in_credits
                }
            })
        },
        getnext_vehicle:(state) => {
            return state.next_vehicles
        },
        getprevious_vehicle:(state) => {
            return state.previous_vehicles
        }
    },
    mutations: {
        setvehivle(state, resp) {
            state.list_vehicles = resp.results
            state.next_vehicles = resp.next
            state.previous_vehicles = resp.previous
        }
    },
    actions: {
        async load_vehicles({commit}, api_url){
            const resp = await axios.get(api_url)
            commit('setvehivle', resp.data)
        }
    }
}