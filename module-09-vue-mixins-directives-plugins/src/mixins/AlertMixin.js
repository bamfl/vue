export default {
  props: {
    type: String,
    closable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      alert: false
    }
  },
  methods: {
    closeAlert() {
      this.alert = false;
    },
    toggleAlert() {
      this.alert = !this.alert;
    }
  }
}
