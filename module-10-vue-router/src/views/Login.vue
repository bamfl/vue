<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email">
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
    </div>

    <button class="btn primary" :disabled="!isValid" type="submit">Войти</button>
    <button @click="$router.push('/forget')" class="btn warning" type="reset">Забыл пароль?</button>
  </form>
</template>

<script>
export default {
  inject: ['login'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValid() {
      return this.email !== '' && this.password !== ''
    }
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.login();
      }
    }
  }
}
</script>

<style scoped>

</style>