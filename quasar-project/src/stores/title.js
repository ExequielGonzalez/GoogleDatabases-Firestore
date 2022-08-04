import { defineStore } from 'pinia';
import { setListenerTitleAPI } from 'src/services/titleService';

export const useTitleStore = defineStore('title', {
  state: () => ({
    title: '',
    unsuscribe: null,
  }),
  getters: {
    getTitle: (state) => state.title,
  },
  actions: {
    async setListenerTitle() {
      this.unsuscribe = await setListenerTitleAPI();
      document.addEventListener('newTitleAPI', (e) => {
        this.title = e.title.title;
      });
    },

    removeListenerTitle() {
      this.unsuscribe();
    },
  },
});
