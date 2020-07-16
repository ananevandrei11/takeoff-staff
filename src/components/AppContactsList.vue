<template>
  <div>
    <v-list-item style="height: auto;" >
      <v-list-item-content
        class="d-flex align-content-space-between"
        >
        <v-list-item-title v-if="!isEditing" align="center">
          {{ name }}
        </v-list-item-title>
        <form v-else @submit.prevent="finishEditing()">
          <v-text-field type="text" v-model="newContactName" @blur="finishEditing()" ref="newContact"></v-text-field>
        </form>
        <div class="my-1" align="center">
          <v-btn
            class="mr-2"
            color="info"
            @click="startEditing()">
              EDIT
          </v-btn>
          <v-btn
            color="warning"
            @click="$emit('on-delete')">
            DELETE
          </v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "AppContactsList",
  data() {
    return {
      isEditing: false,
      newContactName: "",
    };
  },
  props: {
    name: String,
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newContactName = this.name;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newContact.focus());
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newContactName);
    }
  }
}
</script>

<style lang="scss">
.completed {
  background-color: red;
}
</style>