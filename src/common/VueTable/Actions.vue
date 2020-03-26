<template>
  <td class="table-actions" align="center">
    <v-btn
      dense
      v-if="hasEdit"
      v-show="can_edit"
      dense
      icon @click="handle_action('edit')">
      <v-icon  small> mdi-pencil </v-icon>
    </v-btn>
    <v-btn
      dense
      v-if="hasDelete"
      v-show="can_delete"
      icon
      @click="handle_action('delete')"
      >
      <v-icon small>mdi-delete</v-icon>
    </v-btn>
    <v-btn
      dense
      v-if="hasView"
      v-show="can_view"
      icon
      @click="handle_action('view')"
      >
      <v-icon small>pageview</v-icon>
    </v-btn>
  </td>
</template>
<script>
export default {
  props: {
    item: { type: Object, default: null },
    permissions: {
      type: Object,
      default: () => ({
        delete: true,
        update: true,
        create: true,
        view: true
      })
    },
    hasDelete: { type: Boolean, default: true },
    hasEdit: { type: Boolean, default: true },
    hasView: { type: Boolean, default: true }
  },
  computed: {
    logged_user() {
      return this.$store.getters.user
    }
  },
  methods: {
    handle_action(event) {
      if (this.item) {
        this.$emit(event, this.item)
      }
    },
    can_delete() {
      if (this.logged_user.is_admin) {
        return true
      }
      return this.permissions && this.permissions.can.delete
    },
    can_edit() {
      if (this.logged_user.is_admin) {
        return true
      }
      return this.permissions && this.permissions.can.update
    },
    can_view() {
      if (this.logged_user.is_admin) {
        return true
      }
      return this.permissions && this.permissions.can.view
    }
  }
}
</script>
<style lang="scss">
@import '~@/sass/_variables';
.table-actions .theme--light.v-icon {
  color: $btnGray;
}
.table-actions .theme--light.v-icon:hover {
  color: $tableDarkText;
}
</style>
