export default {
  state: {
    user: {
      isAuthentificated: false,
      userID: null,
    }
  },
  getters: {
    isUSerAuthentificated: (state) => state.user.isAuthentificated
  },
  mutations: {
    SET_USER(state, payload){
      state.user.isAuthentificated = true,
      state.user.userID = payload
    },
    UNSET_USER(state){
      state.user = {
        isAuthentificated: false,
        userID: null,
      }
    }
  },
  actions: {
    SIGNUP({ commit }, payload){
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log('Success');
        commit('SET_USER', user.userID)
        commit('SET_PROCESSING', false)
      })
      .catch(error => {
        console.log('Error');
        commit('SET_PROCESSING', false)
        commit('SET_ERROR', error.message)
      });
    },
    LOGIN({ commit }, payload){
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('SET_USER', user.userID, user.isAuthentificated)
        commit('SET_PROCESSING', true)
      })
      .catch(error => {
        console.log('Error');
        commit('SET_PROCESSING', false)
        commit('SET_ERROR', error.message)
      });
    },
    LOGOUT({commit}){
      firebase.auth().signOut().then(function() {
        console.log('Success')
        commit('SET_PROCESSING_RELOAD')
      })
      .catch(error => {
        console.log('Error')
      });
      
    },
    STATE_CHANGED({commit}, payload){
      if (payload) {
        commit('SET_USER', payload.userID)
      } else {
        commit('UNSET_USER')
      }
    }
  }
};