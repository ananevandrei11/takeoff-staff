<template>
  <div id="contact">
    <v-container fluid>
      <v-row class="grey lighten-3" align="start" justify="center" style="min-height: 85vh; width: 100vw">
        <v-col class="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4" >
          <AppNewContact @on-new-contact="addContact($event)" />
          <v-list>
            <AppContactsList
              v-for="(contact, index) in contacts"
              :key="index"
              :name="contact.name"
              @on-delete="deleteContact(contact)"
              @on-edit="editContact(contact, $event)"
            />
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppContactsList from "@/components/AppContactsList.vue";
import AppNewContact from "@/components/AppNewContact.vue";

export default {
  props: {
    listName: String
  },
  data() {
    return {
      contacts: [
        { name: "John Fang" },
        { name: "Jeny Doe" },
        { name: "William Black" },
      ]
    };
  },
  methods: {
    addContact(newContact) {
      this.contacts.push({ name: newContact });
      localStorage.newContact = this.newContact;
    },
    deleteContact(deletedContact) {
      this.contacts = this.contacts.filter(contact => contact !== deletedContact);
    },
    editContact(contact, newContactName) {
      contact.name = newContactName;
    }
  },
  components: { AppContactsList, AppNewContact }
};
</script>
