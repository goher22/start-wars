import axios from 'axios'

export default {
    namespaced: true,
    state: {
        list_starships: [],
        next_starships: null,
        previous_starships: null
    },
    getters: {
        getlist_starships:(state) => {
            return state.list_starships.map(function (e){
                return {
                    name: e.name,
                    model: e.model,
                    manufacturer: e.manufacturer,
                    cost: e.cost_in_credits
                }
            })
        },
        getnext_starships:(state) => {
            return state.next_starships
        },
        getprevious_starships:(state) => {
            return state.previous_starships
        }
    },
    mutations: {
        setstarships(state, resp) {
            state.list_starships = resp.results
            state.next_starships = resp.next
            state.previous_starships = resp.previous
        }
    },
    actions: {
        async load_starships({commit}, api_url) {
            const resp = await axios.get(api_url)
            commit('setstarships', resp.data)
        }
    }
}