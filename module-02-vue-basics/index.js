const App = {
  data() {
    return {
      noteInput: '',
      notePlaceholder: 'Текст заметки',
      notes: [],
      headerStyle: {
        color: 'orange',
        fontSize: '25px'
      },
      buttonBackgroundColor: 'green',
      buttonTextColor: 'white'
    };
  },
  methods: {
    addNote() {
      if (this.noteInput.length > 0) {
        this.notes.push({ id: this.notes.length + 1, title: this.noteInput });
        this.noteInput = '';
      }
    },
    removeNote(event, idx) {
      this.notes.splice(idx, 1);
      console.log(event);
    },
    toUpperCase(str) {
      return str.toUpperCase();
    },
  },
  computed: {
    count() {
      return this.notes.length;
    },
    doubleCount() {
      return this.count * 2;
    },
    noteInputColor() {
      return this.noteInput.length > 5 ? 'green' : 'red'
    }
  },
  watch: {
    noteInput(value) {
      if (value === 'watch') {
        console.log('watch');
      }
    }
  }
};

Vue.createApp(App).mount('#app');
