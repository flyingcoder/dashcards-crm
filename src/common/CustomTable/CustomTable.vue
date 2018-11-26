<template>
  <div class="content__wrapper">
    <div class="row buzz__tables">
      <div class="buzz__tablesTwo">

        <slot name="toolbar">
          <v-toolbar flat class="table__toolbar">
            <v-toolbar-title class="table__toolbar-title">
              {{toolbarTitle}}
            </v-toolbar-title>
          </v-toolbar>
        </slot>
          
        <v-data-table
                v-model="selected"
                :headers="headers"
                :items="items"
                :loading="loading"
                select-all
                disable-initial-sort
                v-bind="$attrs"
                class="buzzooka__table"
        >
          <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear> <!-- LOADING -->

          <template slot="headers" slot-scope="props"> <!-- HEADERS -->
            <tr class="table__head">
              <th v-if="$props.hasCheckbox">
                <v-checkbox
                        :input-value="props.all"
                        :indeterminate="props.indeterminate"
                        primary
                        hide-details
                        @click.self="toggleAll"
                ></v-checkbox>
              </th>
              <th
                      v-for="header in props.headers"
                      :key="header.id"
                      :class="headerClasses(header)"
                      :width="header.width"
                      @click="header.sortable && changeSort(header.value)"
              >
                <template v-if="header.text === 'Icon'">
                  <v-btn fab small depressed
                        :disabled="tableActionDisabled">
                    <img src="@/assets/icons/groups/delete.svg" alt="">
                  </v-btn>
                </template>

                <template v-else-if="header.is_action">
                  <img src="@/assets/icons/table/menu.svg" />
                </template>

                <template v-else>
                  {{header.text}}
                  <v-icon small v-if="header.sortable">arrow_upward</v-icon>
                </template>
              </th>

              <th v-if="hasHeaderIcon">
                <img src="@/assets/icons/table/menu.svg" />
              </th>

            </tr>
          </template>

          <template slot="items" slot-scope="props"> <!-- ITEMS -->
            <tr :active="props.selected" class="table__body-row">
              <td v-if="$props.hasCheckbox" @click="props.selected = !props.selected">
                <v-checkbox
                        :input-value="props.selected"
                        primary
                        hide-details
                ></v-checkbox>
              </td>

              <slot name="custom-item" :item="props.item"></slot>

            </tr>
          </template>

          <template slot="no-data"> <!-- DISPLAYED WHEN NO ITEMS -->
            <v-alert :value="true" color="error" icon="warning">
              Sorry, nothing to display here :(
            </v-alert>
          </template>

          <template slot="footer">
            <td colspan="100%" style="padding: 0;">
              <slot name="table-actions"></slot>
            </td>
          </template>

        </v-data-table>
      </div>
    </div>
  </div>
</template>
<script src="./CustomTable.js"></script>
<style lang="scss" scoped src="./CustomTable.scss"></style>

<style scoped src="./CustomTable.css"></style>
