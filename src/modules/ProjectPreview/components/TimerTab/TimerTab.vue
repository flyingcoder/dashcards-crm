<template>
  <div class="timer__tab">
    <custom-table
      v-if="items.length || loading"
      :headers="headers"
      :items="items"
      :loading="loading"
      :sort="sort"
      :has-checkbox="true"
      hide-actions
      toolbar-title="Timer"
      :permission="$_permissions.get('timers')"
      @items-selected="selected_ids = $event"
      @sorted="changeSort"
    >
    </custom-table>

    <div class="empty-timer" v-else>
      <div class="empty-content">
        <div class="empty-svg">
          <svg viewBox="0 0 250 250">
            <path
              d="M125 0c35,0 66,14 88,37 23,22 37,53 37,88 0,35 -14,66 -37,88 -22,23 -53,37 -88,37 -35,0 -66,-14 -88,-37 -23,-22 -37,-53 -37,-88 0,-35 14,-66 37,-88 22,-23 53,-37 88,-37zm-4 56c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 54c5,3 8,8 8,14 0,9 -8,16 -17,16 -1,0 -2,0 -3,0l-46 56c-3,4 -8,4 -11,1 -4,-2 -4,-8 -1,-11l46 -56c-1,-2 -1,-4 -1,-6 0,-7 4,-12 9,-15l0 -53zm81 -8c-20,-20 -47,-32 -77,-32 -30,0 -57,12 -77,32 -20,20 -32,47 -32,77 0,30 12,57 32,77 20,20 47,32 77,32 30,0 57,-12 77,-32 20,-20 32,-47 32,-77 0,-30 -12,-57 -32,-77z M121 135c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 68c0,5 -3,8 -8,8 -4,0 -8,-3 -8,-8l0 -68z M131 136c-3,-3 -3,-8 0,-11 3,-3 8,-3 11,0l48 48c3,3 3,8 0,11 -3,3 -8,3 -12,0l-47 -48z M141 132c-5,0 -8,-3 -8,-8 0,-4 3,-8 8,-8l67 0c5,0 9,4 9,8 0,5 -4,8 -9,8l-67 0z"
            />
          </svg>
        </div>
        <div class="empty-text">
          No timer to display.
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./TimerTab.js"></script>
<style lang="scss" scoped src="./TimerTab.scss"></style>
