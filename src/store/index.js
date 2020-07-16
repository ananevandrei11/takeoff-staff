import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/user.js";
import Ui from "./modules/ui.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: User,
    ui: Ui
  }
});
