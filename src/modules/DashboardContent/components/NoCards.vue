<template>
  <div class="empty-cards">
    <CustomDialog
      title="Select Dash Cards"
      ref="dialog"
      :open.sync="dialog"
      @button1="dialog = false"
    >
      <template slot="content">
        <div class="dash__cards">
          <template v-for="item of dash_items">
            <DashCard
              :title="item.name"
              :img-src="item.img_path"
              :selected="selected"
              :id="item.id"
              :key="item.id"
              @click="check_selected(item.id)"
            />
          </template>
        </div>
      </template>

      <template slot="button2">
        <v-btn :disabled="nothing_changed" class="save-card" @click="save"
          >Save</v-btn
        >
      </template>
    </CustomDialog>

    <div class="icon">
      <v-icon>add_box</v-icon>
    </div>

    <div class="dashitem-btn">
      <v-btn large dark color="#3b589e" @click="dialog = true"
        >Add Dashitem
      </v-btn>
    </div>
  </div>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'
import { mapActions } from 'vuex'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import DashCard from '@/common/BaseComponents/DashCard.vue'

export default {
  components: {
    CustomDialog,
    DashCard
  },

  data: () => ({
    dialog: false,
    icons: {
      tasks: 'sidebar/tasks.svg',
      timeline: 'sidebar/timers.svg',
      client: 'sidebar/clients.svg',
      timer: 'sidebar/timers.svg',
      payment: 'sidebar/payment.svg',
      invoice: 'sidebar/invoice.svg',
      calendar: 'sidebar/calendar.svg',
      passbox: 'header/user/lock.svg'
    },
    selected: []
  }),

  computed: {
    dash_items() {
      let items = _cloneDeep(this.$store.getters['cards/dash_items'])
      return items.map(item => {
        item.img_path = this.icons[item.slug]
        return item
      })
    },

    nothing_changed() {
      return !this.selected.length
    }
  },

  methods: {
    ...mapActions('cards', ['update_cards']),

    check_selected(id) {
      if (this.selected.includes(id)) {
        const index = this.selected.findIndex(s => s.id === id)
        this.selected.splice(index, 1)
      } else {
        this.selected.push(id)
      }
    },

    save() {
      if (this.nothing_changed) return
      this.$refs.dialog.clear_and_close()
      this.update_cards({ dashitem_id: this.selected })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.empty-cards {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 50px;

  .icon .v-icon {
    font-size: 120px;
    color: $btnGray;
  }
}

.dash__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 10px;
}

@media only screen and (max-width: 64em) {
  .empty-cards {
    margin-top: 30px;

    .icon .v-icon {
      font-size: 100px;
    }

    .dashitem-btn {
      .v-btn--large {
        font-size: 13px;
        height: 38px;
        padding: 0 22px;
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .empty-cards {
    margin-top: 20px;

    .icon .v-icon {
      font-size: 70px;
    }

    .dashitem-btn {
      .v-btn--large {
        height: 33px;
        padding: 0 20px;
      }
    }
  }
}
</style>
