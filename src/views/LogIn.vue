<template>
  <div id="login">
    <v-row class="grey lighten-3" style="height: 85vh; width: 100vw">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-alert
                    :value="error"
                    type="warning"
                    >{{error}}</v-alert>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click.prevent="login()" :disabled="processing">Log In</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    email: null,
    password: null,
  }),
  computed: {
    error() {
      return this.$store.getters.getError
    },
    processing() {
      return this.$store.getters.getProcessing
    },
    isUSerAuthentificated() {
      return this.$store.getters.isUSerAuthentificated
    }
  },
  watch: {
    isUSerAuthentificated(value) {
      if (value === true) {
          console.log('Succes');
          this.$router.push('/contact')
      }
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          email: this.email,
          password: this.password
        })
    }
  }
};
</script>
