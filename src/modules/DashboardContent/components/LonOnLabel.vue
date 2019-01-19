<template>
	<div class="option logon-label">
		<div class="icon">
			<v-switch :value="switch1" :disabled="disabled" @change="switch1_changed">
			</v-switch>
		</div>
		<div class="title">
			<span class="label">Log on</span>
		</div>
	</div>
</template>

<script>
import makeRequestTo from '@/services/makeRequestTo'

export default {
  name: 'LogOnLable',

  data: () => ({
    switch1: true,
    disabled: false
  }),

  methods: {
    switch1_changed(new_val) {
      const type = new_val ? 'start' : 'stop'
      this.disabled = true
      makeRequestTo.change_timer(type).then(() => {
        this.disabled = false
        const timer_message = new_val ? 'started' : 'stopped'
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
.logon-label {
  background: white;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  border-radius: 14px;
  .icon {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .title {
    display: flex;
    flex: 2;
    height: 100%;
    border-left: 1px solid $tile-border;
    align-items: center;
    justify-content: center;
    .label {
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: 1;
      padding-left: 5px;
      color: black;
    }
  }
}
@media only screen and (max-width: 480px) {
  .logon-label {
    .title {
      .label {
        font-size: 12px;
      }
    }
  }
}
</style>
