import axios from 'axios'

export default {
    namespaced: true,
    state: {
        list_films: [],
        next_films: null,
        previous_films: null
    },
    getters: {
        getlist_films:(state) => {
            return state.list_films.map(function(e){
                return {
                    title: e.title,
                    director: e.director,
                    producer: e.producer,
                    releaseDate: e.release_date
                }
            })
        },
        getnext_films:(state) => {
            return state.next_films
        },
        getprevious_films:(state) => {
            return state.previous_films
        }
    },
    mutations: {
        setfilms(state, resp) {
            state.list_films = resp.results
            state.next_films = resp.next
            state.previous_films = resp.previous
        }
    },
    actions: {
        async load_films({commit}, api_url){
            const resp = await axios.get(api_url)
            commit('setfilms', resp.data)
        }
    }
}