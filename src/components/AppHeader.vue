<template>
  <div id="header">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link v-for="(item, i) in menuItems" :key="i" >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.route" class="grey--text text--darken-1 text-decoration-none text-uppercase">
                {{ item.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="isUSerAuthentificated">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text text--darken-1 text-decoration-none text-uppercase" @click.prevent="logout()">
              LogOut
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    isUSerAuthentificated() {
      return this.$store.getters.isUSerAuthentificated;
    },
    menuItems() {
      return this.isUSerAuthentificated 
      ? [
        {
          route: "/login",
          title: "LogIn",
          icon: "mdi-lock"
        },
        {
          route: "/",
          title: "SingUp",
          icon: "mdi-pencil"
        },
        {
          route: "/contact",
          title: "Contact",
          icon: "mdi-message-text"
        }
      ] : [
        {
          route: "/login",
          title: "LogIn",
          icon: "mdi-lock"
        },
        {
          route: "/",
          title: "SingUp",
          icon: "mdi-pencil"
        }
      ]
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT');
      this.$router.push('/login');
    }
  }
};
</script>
