<template>
  <div class="breadcrumb-wrapper">
    <v-breadcrumbs :items="paths">
      <v-icon slot="divider">chevron_right</v-icon>

      <template slot="item" slot-scope="{ item }">
        <v-breadcrumbs-item class="page__title" :disabled="item.disabled">
          <span @click="navigate_from_breadcrumb(item)">
            {{ item.text }}
          </span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    paths: { type: Array, default: () => [] }
  },

  methods: {
    navigate_from_breadcrumb(item) {
      if (item.hasOwnProperty('path')) {
        item.path && this.$router.push({ path: item.path })
      } else {
        const { router_name } = item
        router_name && this.$router.push({ name: router_name })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';
.breadcrumb-wrapper {
  ul.v-breadcrumbs.theme--light {
    padding: 18px 0;
    li.page__title {
      font-size: 26px;
      font-weight: 500;
      a.v-breadcrumbs__item span {
        color: $tableBlueText;
      }
      a.v-breadcrumbs__item span:hover {
        color: $textDark;
      }
      &:last-child a.v-breadcrumbs__item span {
        color: $lightGray-2;
      }
    }
    li.v-breadcrumbs__divider {
      i {
        font-size: 50px;
        color: $lightGray-2;
      }
    }
  }
}

// Tablet View
@media only screen and (max-width: 768px) {
  .breadcrumb-wrapper {
    //TODO add styling for breadcrumb
    ul.v-breadcrumbs.theme--light {
      li.page__title {
        font-size: 20px;
      }
      li .v-icon {
        font-size: 30px;
      }
    }
  }
}

// Mobile View
@media only screen and (max-width: 480px) {
  .breadcrumb-wrapper {
    //TODO add styling for breadcrumb
    ul.v-breadcrumbs.theme--light {
      li.page__title {
        font-size: 14px;
      }
      li .v-icon {
        font-size: 20px;
      }
    }
  }
}
</style>

<style scoped>
>>> li.v-breadcrumbs__divider {
  padding: 0;
}
</style>
