const App = {
  data() {
    return {
      noteInput: '',
      notePlaceholder: 'Текст заметки',
      notes: [],
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
    bindInput(event) {
      this.noteInput = event.target.value;
    },
    toUpperCase(str) {
      return str.toUpperCase();
    }
  },
};

Vue.createApp(App).mount('#app');
