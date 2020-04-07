<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="600px" persistent>
      <v-card class="custom__dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ dialogTitle }}</span>
          <v-spacer></v-spacer>
          <v-btn
            fab
            small
            depressed
            class="close__dialog"
            @click="clear_and_close"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text style="height: 200px;">
          <MembersPicker
            @input="to_be_added = $event"
            :maxHeight="300"
            :isBtnBlock="true"
            :except="user_participants"
          >
          </MembersPicker>
          <div class="choosen" v-if="to_be_added.length > 0">
            <v-chip
              outlined
              class="mt-1"
              v-for="item in to_be_added"
              :key="item.id"
              :close="clearable(item)"
              label
              @click:close="remove_from_selected_members(item)"
            >
              <v-avatar left>
                <v-img :src="item.image_url"></v-img>
              </v-avatar>
              {{ item.fullname }}
            </v-chip>
          </div>
        </v-card-text>

        <v-card-actions class="dialog__actions">
          <v-spacer></v-spacer>
          <v-btn @click="clear_and_close" class="dialog__actions_btn"
            >Cancel</v-btn
          >
          <v-btn
            class="dialog__actions_btn"
            :loading="btnloading"
            :disabled="disabled"
            @click="save"
            >Save</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./AddParticipantDialog.js"></script>
<style lang="css" scoped>
>>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: #fff;
}
</style>
