<template>
  <AlertMessage v-if="alert" :type="alert.type" @close-alert="alert = null">
    {{ alert.message }}
  </AlertMessage>

  <form @submit.prevent="createPerson">
    <div class="container">
      <div class="card">
        <h2>Работа с базой данных</h2>
        <div class="form-conterol">
          <label>
            Введите имя
            <input type="text" v-model.trim="name" />
          </label>
        </div>

        <button class="btn mt-20" :disabled="name.length === 0">Добавить</button>
      </div>
    </div>
  </form>

  <Loader v-if="isLoading" />
  <PeopleList v-else :people="people" @delete-person="deletePerson" />
</template>

<script>
import Loader from './components/Loader.vue';
import AlertMessage from './components/AlertMessage.vue';
import PeopleList from './components/PeopleList.vue';

export default {
  components: { PeopleList, AlertMessage, Loader },
  data() {
    return {
      people: [],
      name: '',
      url: 'https://vue-http-faeb8-default-rtdb.europe-west1.firebasedatabase.app/',
      peopleEndpoint: '/people.json',
      alert: null,
      isLoading: false,
    };
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    async createPerson() {
      const response = await fetch(`${this.url}${this.peopleEndpoint}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
        }),
      });

      const data = await response.json();

      this.people.push({
        id: data.name,
        name: this.name,
      });
      this.name = '';

      return data;
    },
    async getPeople() {
      try {
        this.isLoading = true;
        const response = await fetch(`${this.url}${this.peopleEndpoint}`);
        const people = await response.json();

        if (people) {
          this.people = Object.keys(people).map((key) => {
            return {
              id: key,
              ...people[key],
            };
          });
        }
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    async deletePerson(id) {
      const response = await fetch(`${this.url}/people/${id}.json`, {
        method: 'DELETE',
      });

      this.people = this.people.filter((person) => person.id !== id);

      this.alert = {
        type: 'primary',
        message: 'Пользователь успешно удален',
      };

      return await response.json();
    },
  },
};
</script>

<style>
.mt-20 {
  margin: 20px 0 0 0;
}
</style>
