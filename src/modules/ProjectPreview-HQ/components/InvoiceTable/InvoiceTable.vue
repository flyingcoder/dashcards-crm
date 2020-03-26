<template>
  <div class="invoice-card">
    <div class="invoice__content">
      <dash-card
        title="Invoice"
        :dashboard="dashboard"
        @close="$emit('close')"
        :view-more-link="viewMoreLink"
        :viewMoreBtn="enableViewMore"
        @view-more=""
      >
        <div slot="actions"></div>
        <div class="content-wrapper" slot="content">
          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
            shaped
          >
            <template v-slot:top>
              <v-row no-gutters>
                <v-spacer></v-spacer>
                <v-col md="6" sm="12">
                  <v-select
              class="dialog__selectfield"
              solo
              hide-details
              color="#657186"
              :items="['Remind', 'Cancel', 'Archive']"
              label="Batch Actions"
            ></v-select>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.due_date }}</td>
                <td>{{ item.id }}</td>
                <td class="text-cap">{{ item.bill_to }}</td>
                <td>{{ item.total_amount }}</td>
                <td>
                  <v-menu bottom left>
                    <template v-slot:activator="{ on }">
                      <v-btn icon v-on="on" >
                        <v-icon color="gray">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, i) in ['Copy', 'Print', 'PDF', 'Share link']"
                        :key="i"
                        @click=""
                      >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </dash-card>
    </div>
  </div>
</template>

<script src="./InvoiceTable.js"></script>
<style lang="scss" scoped src="./InvoiceTable.scss"></style>

<style scoped>
>>> .content-wrapper .buzz__tables {
  all: unset !important;
}
</style>
