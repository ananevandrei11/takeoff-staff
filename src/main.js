import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import firebaseConfig from './firebase/config.firebase';


Vue.config.productionTip = false;
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    let vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGED', user)
    });
  }
}).$mount("#app");
