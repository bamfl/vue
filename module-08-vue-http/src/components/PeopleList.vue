<template>
  <div class="container">
    <div class="card">
      <h2>Список пользователей</h2>
      
      <ul v-if="people.length">
        <li v-for="person in people" :key="person.id">
          {{ person.name }}

          <button @click="deletePerson(person.id)" class="btn danger mt-20">x</button>
        </li>
      </ul>

      <div v-else>Нет данных</div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['delete-person'],
  props: {
    people: Array,
  },
  methods: {
    deletePerson(id) {
      console.log(id);
      this.$emit('delete-person', id);
    }
  }
};
</script>

<style lang="scss"></style>
