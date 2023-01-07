import store from '@/store'
import router from '@/router';

export default {
  install(app, options) {
    app.config.globalProperties.$showModal = (modalId) => {
      const shareable = store.state.shareableModalIds.includes(modalId);
      if (shareable) {
        const curModals = router.currentRoute.value.query.modals;
        let newModals;
        if (!curModals) newModals = [modalId];
        else if (typeof curModals === 'string' && curModals !== modalId) newModals = [ curModals, modalId];
        else if (!curModals.includes(modalId)) newModals = [...curModals, modalId];
        else return;
        console.log(newModals);
        router.push({ query: { modals: newModals }});
      } else {
        store.dispatch('showModal', modalId);
      }
    }

    app.config.globalProperties.$hideModal = (modalId) => {
      const shareable = store.state.shareableModalIds.includes(modalId);
      if (shareable) {
        const curModals = router.currentRoute.value.query.modals;
        let newModals;
        if (!curModals) return;
        else if (typeof curModals === 'string' && curModals === modalId) newModals = [];
        else if (curModals.includes(modalId)) newModals = [...curModals.filter((id) => id !== modalId)];
        else return;
        router.push({ query: { modals: newModals } });
      } else {
        store.dispatch('hideModal', modalId);
      }
    }

    app.config.globalProperties.$isModalShown = (modalId) => {
      const shareable = store.state.shareableModalIds.includes(modalId);
      if (shareable) {
        const curModals = router.currentRoute.value.query.modals;
        return curModals && ((typeof curModals === 'string' && curModals === modalId) || curModals.includes(modalId));
      } else {
        return store.state.shownModalIds.includes(modalId);
      }
    }
  }
}