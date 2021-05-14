import charactersApi from "@/api/characters";

const state = {
  data: null,
  isLoading: false,
  error: null,
  curatedLists: [],
};

export const mutationTypes = {
  getCharactersStart: "[characters] Get Characters Start",
  getCharactersSuccess: "[characters] Get Characters Success",
  getCharactersFailure: "[characters] Get Characters Failure",
};

export const actionTypes = {
  getCharacters: "[characters] Get characters",
};

const getters = {
  curatedLists: (state, getters, rootState) => {
    if (!state.curatedLists.length && rootState.search.listSearch === "") {
      return state.data;
    } else if (
      state.curatedLists.length &&
      rootState.search.listSearch !== ""
    ) {
      return state.curatedLists;
    } else if (rootState.search.listSearch === "") {
      return state.curatedLists;
    }
  },
};

const mutations = {
  [mutationTypes.getCharactersStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getCharactersSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getCharactersFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
  setCuratedList: (state, payload) => {
    state.curatedLists = payload;
  },
};

const actions = {
  [actionTypes.getCharacters](context, apiUrl) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getCharactersStart);
      charactersApi
        .getCharacters(apiUrl)
        .then((response) => {
          context.commit(
            mutationTypes.getCharactersSuccess,
            response.data.results
          );
          resolve(response.data.results);
        })
        .catch((error) => {
          context.commit(mutationTypes.getCharactersFailure, error);
        });
    });
  },
  updateCuratedList: ({ commit, state }, select) => {
    let rs = state.data.filter((list) => {
      return list.eye_color.includes(select);
    });
    commit("setCuratedList", rs);
  },
  updateCuratedListHeight: ({ commit, state }, selectHeight) => {
    let rs = state.data.filter((list) => {
      return list.height >= selectHeight.min && list.height <= selectHeight.max;
    });
    commit("setCuratedList", rs);
  },
  updateCuratedListAge: ({ commit, state }, selectAge) => {
    let rs = state.data.filter((list) => {
      return (
        Number.parseInt(list.birth_year) >= selectAge.min &&
        Number.parseInt(list.birth_year) <= selectAge.max
      );
    });
    commit("setCuratedList", rs);
  },
  sortCuratedList: ({ commit, state }, sort) => {
    if (sort == "age") {
      let rs = state.data.sort((a, b) => {
        return a - b;
      });
      commit("setCuratedList", rs);
    } else if (sort == "mass") {
      let rs = state.data.sort((a, b) => {
        return a - b;
      });
      commit("setCuratedList", rs);
    } else if (sort == "height") {
      let rs = state.data.sort((a, b) => {
        return a - b;
      });
      commit("setCuratedList", rs);
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
