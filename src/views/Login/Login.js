export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      selected:[],
      selectOptions:[
          {text: 'Apples', value: 'apple'},
          {text: 'Oranges', value: 'orange'},
          {text: 'Grapes', value: 'grape'}
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          console.log(this.email);
          console.log(this.password);

          axios.post('/api/submit', {
            email: this.email,
            password: this.password,
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
}