export default {
  created() {
    this.$event.$emit(
      'open_snackbar',
      'The page you are looking it does not exists'
    )
  }
}
