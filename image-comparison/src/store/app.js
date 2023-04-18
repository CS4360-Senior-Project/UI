/*----------( VUEX STORE STATES )---------*/
const state = {
    images: null
};

const getters = {
    images: state => state.images
};

const actions = {
    setImages({commit}, payload) {
        commit("SET_IMAGES", payload);
    }
};

const mutations = {
    SET_IMAGES(state, payload) {
        state.images = payload
    }
};

export default {
    namespaced: true,

    state, actions, mutations, getters
}