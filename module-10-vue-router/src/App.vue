<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue';
import TheNavbar from './components/TheNavbar';

export default {
  components: { TheNavbar },
  data() {
    return {
      isAuth: JSON.parse(localStorage.getItem('isAuth')) || false,
    };
  },
  provide() {
    return {
      emails: [
        { id: 1, theme: 'Купил себе PlayStation 5' },
        { id: 2, theme: 'Выучил Vue Router' },
        { id: 3, theme: 'Хочу изучить весь Vue' },
        { id: 4, theme: 'А следующий блок про Vuex!' },
        { id: 5, theme: 'А что там на счет Vue Hooks?' },
      ],
      login: this.login,
      logout: this.logout,
      isAuth: computed(() => this.isAuth),
    };
  },
  methods: {
    login() {
      this.isAuth = true;
      this.$router.push('/dashboard');
      localStorage.setItem('isAuth', JSON.stringify(this.isAuth));
    },
    logout() {
      this.isAuth = false;
      this.$router.push('/login');
      localStorage.removeItem('isAuth');
    },
  },
};
</script>

<style></style>
