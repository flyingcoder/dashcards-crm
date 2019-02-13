<template>
  <div class="crop-image">
    <div class="image"></div>
  </div>
</template>

<script>
import Croppie from 'croppie'
import 'croppie/croppie.css'

export default {
  props: ['image', 'options', 'result'],
  data: () => ({
    croppie: null
  }),

  mounted() {
    const image = document.querySelector('.image')
    this.croppie = new Croppie(image, this.options)
    this.croppie.bind(this.image)
  },

  methods: {
    get_result() {
      return this.croppie.result(this.result)
    },
    clear_component() {
      this.croppie.destroy()
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
</script>
