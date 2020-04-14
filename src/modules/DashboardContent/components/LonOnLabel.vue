<template>
  <div class="icon">
    <div class="tile">
      <div class="tile-icon">
        <v-switch
          v-model="status"
          :disabled="disabled"
          @change="switch1_changed"
          dense
        ></v-switch>
      </div>
      <div class="tile-text">
        {{ label }}
      </div>
    </div>

    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn @click="switch1_changed">
          <v-icon>{{ timer_icon }}</v-icon>
        </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip> -->
  </div>
</template>

<script>
import makeRequestTo from '@/services/makeRequestTo'

export default {
  name: 'LogOnLable',

  data: () => ({
    status: false,
    disabled: false,
    timer_icon: 'timer_off'
  }),
  computed: {
    label() {
      return this.status === true ? 'Log On' : 'Log Off'
    }
  },
  created() {
    makeRequestTo.timer_status().then(({ data }) => {
      if (data) {
        this.status = data.action === 'start' ? true : false
      }
    })
  },

  methods: {
    switch1_changed(new_val) {
      const type = new_val ? 'start' : 'stop'
      this.disabled = true
      makeRequestTo.change_timer(type).then(() => {
        this.disabled = false
        const timer_message = new_val ? 'started' : 'stopped'

        this.$event.$emit(
          new_val ? 'global-timer-started' : 'global-timer-stopped'
        )

        this.$event.$emit(
          'open_snackbar',
          `Timer ${timer_message}`,
          'notification'
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/variables';
.tile {
  display: grid;
  grid-template-columns: 1.5fr 2.5fr;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
  justify-content: center;
  align-items: center;

  .tile-icon {
    padding: 0 10px;
    border-right: 1px solid $tile-border;
    background: #f5f5f5;
  }

  .tile-text {
    font-size: 18px;
    color: $titleDarkBlue;
    padding: 0 10px;
    text-align: center;
  }
}
.icon {
  display: grid;
  grid-gap: 20px;
}
@media only screen and (max-width: 480px) {
}
</style>
