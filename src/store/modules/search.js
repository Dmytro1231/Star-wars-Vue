export default {
    state: {
      listSearch: ""
    },
    getters: {
      listSearch: state => {
        return state.listSearch;
      }
    },
    mutations: {
      setListSearch: (state, payload) => {
        state.listSearch = payload;
      }
    },
    actions: {}
  };