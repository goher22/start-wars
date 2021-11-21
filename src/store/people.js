import axios from "axios";

export default {
    namespaced: true,
    state: {
        list_peoples: []
    },
    getters: {
        getlist_peoples:(state) => {
            return state.list_peoples.map(function(e){
                return {
                    name: e.name,
                    gender: e.gender,
                    height: e.height,
                    mass: e.mass
                }
            })
        }
    },
    mutations: {
        addPeople(state, peoples) {
            state.list_peoples.push(...peoples)
        }
    },
    actions: {
        async get_people({commit}, api_urls){
            const resp = await Promise.all(api_urls.map(e =>axios.get(e)))
            const resul = resp.map(r=>r.data)
            commit('addPeople', resul)
        }
    }
}