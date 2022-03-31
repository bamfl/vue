<template>
  <div v-if="mailId">
    <h2>{{ mailTheme }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
  </div>

  <div v-else>
    <p>Выберите новость</p>
  </div>
</template>

<script>
export default {
  inject: ['emails'],
  props: {
    mailId: String | Number
  },
  computed: {
    mailTheme() {
      return this.emails.find(email => email.id === +this.mailId).theme;
    }
  }
}
</script>

<style scoped>

</style>