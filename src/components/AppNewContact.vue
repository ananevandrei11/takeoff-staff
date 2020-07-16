<template>
  <div>
    <v-form @submit.prevent="addContact()">
        <v-text-field  v-model="newContact" placeholder="Write a new contact"></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "AppNewContact",
  data() {
    return {
      newContact: "",
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    };
  },
  methods: {
    addContact() {
      if (this.newContact.length > 0) {
        this.$emit("on-new-contact", this.newContact);
      }
      this.newContact = "";
    }
  },
};
</script>

<style lang="sass">

</style>