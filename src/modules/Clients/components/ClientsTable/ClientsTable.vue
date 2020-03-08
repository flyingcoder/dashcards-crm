<template>
  <div class="clients-table">
    <clients-dialog
      :dialog.sync="add_dialog"
      ref="add_dialog"
      dialog-title="Add Client"
      @save="add_item('add_new_client', $event)"
    />

    <clients-dialog
      :dialog.sync="edit_dialog"
      ref="edit_dialog"
      title="Edit Client"
      :is-edit-dialog="edit_dialog"
      :fields-to-edit="edit_item"
      @save="update_item('update_client', $event)"
    />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Client"
      text-content="Are you sure you want to delete this client?"
      @delete="delete_item('delete_client')"
    />

    <custom-table
      v-if="items.length || loading"
      :headers="headers"
      :items="items"
      :loading="loading"
      :sort="sort"
      :has-checkbox="true"
      hide-actions
      toolbar-title="Clients"
      @items-selected="selected_ids = $event"
      @sorted="changeSort"
      @edit="open_edit_dialog"
      @delete="open_delete_dialog"
      @view="navigate_to_view_profile($event.id)"
    >
      <template slot="custom-item" slot-scope="item">
        <td class="text-xs-right">
          <!--TODO fill image with dynamic data from backend-->
          <div
            class="user__name text-cap"
            @click="navigate_to_view_profile(item.item.id)"
          >
            <v-img
              max-height="60px"
              width="50px"
              :src="item.item.image_url"
            />
            &nbsp;
            {{ item.item.company_name }}
          </div>
        </td>

        <td>{{ item.item.telephone | phoneDisplayForm }}</td>
        <td class="email">{{ item.item.email }}</td>
        <td class="text-cap">{{ item.item.status }}</td>
      </template>

      <template slot="table-actions">
        <div class="actions-wrapper">
          <div class="bulk-delete">
            <v-btn
              color="#3b589e"
              dark
              outline
              :disabled="!show_delete_selected"
            >
              Delete Selected
            </v-btn>
          </div>

          <div class="rows-per-page-dropdown">
            Rows per page:
            <v-select
              :items="rows_per_page_items"
              menu-props="auto"
              v-model="rows_per_page"
              color="#3b589e"
            ></v-select>
          </div>

          <div class="pagination">
            <div class="text-xs-center pt-2">
              <v-pagination
                :length="total_items"
                :total-visible="5"
                v-model="page"
                color="#3b589e"
              ></v-pagination>
            </div>
          </div>
        </div>
      </template>
    </custom-table>

    <div class="empty-client" v-else>
      <div class="empty-content">
        <div class="empty-svg">
          <svg viewBox="0 0 250 250">
            <path
              d="M125 1c17,0 31,7 42,19 11,12 17,28 17,46 0,17 -6,33 -17,45 -1,1 -2,2 -3,3 -5,29 58,15 58,69l0 19c0,13 -6,25 -14,33 -9,9 -21,14 -34,14l-20 0 0 0 -3 0 -55 0 0 0 -20 0c-13,0 -25,-5 -34,-14 -8,-8 -14,-20 -14,-33l0 -19c0,-54 63,-40 58,-69 -1,-1 -2,-2 -3,-3 -11,-12 -17,-28 -17,-45 0,-18 6,-34 17,-46 11,-12 25,-19 42,-19zm26 232l3 0 0 0 20 0c9,0 17,-3 22,-9 6,-6 10,-14 10,-22l0 -19c0,-38 -49,-23 -57,-58 -8,4 -16,5 -24,5 -8,0 -16,-1 -24,-5 -9,36 -57,18 -57,58l0 19c0,8 4,16 10,22 5,6 13,9 22,9l20 0 0 0 55 0 0 0zm-34 -68c0,-4 4,-8 8,-8 4,0 8,4 8,8l0 50c0,5 -4,8 -8,8 -4,0 -8,-3 -8,-8l0 -50zm38 -134c-8,-9 -18,-14 -30,-14 -12,0 -22,5 -30,14 -8,8 -13,21 -13,35 0,13 5,26 13,34 8,9 18,14 30,14 12,0 22,-5 30,-14 8,-8 13,-21 13,-34 0,-14 -5,-27 -13,-35z"
            />
          </svg>
        </div>
        <div class="empty-btn">
          <v-btn large dark color="#3b589e" @click="add_dialog = true"
            >Add Client</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ClientsTable.js"></script>
<style lang="scss" scoped src="./ClientsTable.scss"></style>
