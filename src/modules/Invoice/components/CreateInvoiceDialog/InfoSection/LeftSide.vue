<template>
	<div class="left-side">

		<div class="add-logo-box" @click="$refs.hidden_input.click()">
			<img :src="image_preview" v-if="image_preview" class="image-preview">
			<span class="text" v-else>+ Add Your Logo</span>
			<v-btn outline class="button" v-show="image_preview">Remove</v-btn>
			<input type="file"
			       accept="image/*"
			       ref="hidden_input"
			       @change="file_selected"
			       class="hidden-input"
			>
		</div>

		<div class="bill-from">
			<v-textarea label="Who is this invoice from"
			            v-model="billed_from"
			></v-textarea>
		</div>

		<div class="bill-to">
			<v-text-field label="Who is this invoice to"
			              v-model="billed_to"
			></v-text-field>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    image_preview: null
  }),

  computed: {
    ...mapGetters('invoice', ['company_logo']),

    billed_to: {
      get() {
        return this.$store.getters['invoice/billed_to']
      },
      set(newVal) {
        this.$store.commit('invoiadce/set_billed_to', newVal)
      }
    },

    billed_from: {
      get() {
        return this.$store.getters['invoice/billed_from']
      },
      set(newVal) {
        this.$store.commit('invoice/set_billed_from', newVal)
      }
    }
  },

  watch: {
    company_logo(val) {
      if (!val) {
        this.image_preview = null
        return
      }
      const reader = new FileReader()
      reader.onload = e => {
        this.image_preview = e.target.result
      }
      reader.readAsDataURL(val)
    }
  },

  methods: {
    file_selected(event) {
      if (event.target.files && event.target.files[0]) {
        this.$store.commit('invoice/set_company_logo', event.target.files[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.left-side {
  .add-logo-box {
    position: relative;
    width: 200px;
    height: 150px;
    background: gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    &:hover {
      cursor: pointer;
      > .text {
        color: white;
      }
      > .button {
        display: block;
      }
    }
  }

  .bill-from,
  .bill-to {
    width: 300px;
  }

  .text,
  .button {
    position: absolute;
  }

  .button {
    display: none;
  }

  .image-preview {
    max-width: 100%;
    height: 100%;
    position: absolute;
  }

  .hidden-input {
    visibility: hidden;
  }
}
</style>
