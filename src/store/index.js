import { createStore } from 'vuex'

export default createStore({
  state: {
    shownModalIds: [],
    shareableModalIds: [],
  },
  getters: {
  },
  mutations: {
    addModal(state, modalId) {
      if (!state.shownModalIds.includes(modalId)) {
        state.shownModalIds = [...state.shownModalIds, modalId];
      }
    },
    removeModal(state, modalId) {
      if (state.shownModalIds.includes(modalId)) {
        state.shownModalIds = state.shownModalIds.filter((id) => id !== modalId);
      }
    },
    addShareableModal(state, modalId) {
      if (!state.shareableModalIds.includes(modalId)) {
        state.shareableModalIds = [...state.shareableModalIds, modalId];
      }
    }
  },
  actions: {
    showModal({ commit }, modalId) {
      commit('addModal', modalId);
    },
    hideModal({ commit }, modalId) {
      commit('removeModal', modalId);
    },
    addShareableModal({ commit }, modalId) {
      commit('addShareableModal', modalId);
    }
  },
})
