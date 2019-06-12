const state = {
  mapobj:{}
}

const mutations = {
  setmapobj(state,mapobj){
    state.mapobj = mapobj
  }
}

const actions = {
  setmapobj:({commit},mapobj)=>{
    commit('setmapobj',mapobj)
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}
