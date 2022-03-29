<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>Vue форма</h1>

      {{ name1 }}
      <custom-input v-model="name1"></custom-input>
    
      <div class="form-control">
        {{ name }}
        <label for="name">Как тебя зовут?</label>
        <input 
          @input="$event.target.value.length > 0 ? nameError = null : nameError = 'Имя не может быть путой строкой'" 
          type="text" id="name" 
          placeholder="Введи имя" 
          v-model.trim="name" />
        <small v-if="nameError">{{ nameError }}</small>
      </div>

      <div class="form-control">
        {{ age }}
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" v-model.number="age" />
      </div>

      <div class="form-control">
        {{ city }}
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-control">
        {{ cities }}
        <label for="city1">Multiple select</label>
        <select id="city1" v-model="cities" multiple>
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        {{ trip }}
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label>
            <input 
              v-model="trip"
              :value="true"
              type="radio" 
              name="trip" 
            /> Да
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input 
              v-model="trip" 
              :value="false" 
              type="radio" 
              name="trip" 
            /> Нет
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        {{knowledge}}
        <div class="checkbox">
          <label>
            <input 
              v-model="knowledge" 
              value="Vuex" 
              type="checkbox" 
            /> 
              Vuex
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input 
              v-model="knowledge" 
              value="Vue CLI" 
              type="checkbox" 
            /> 
              Vue CLI
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input 
              v-model="knowledge" 
              value="Vue Router" 
              type="checkbox" 
            /> 
              Vue Router
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Single checkbox</span>
        {{agreement}}
        <div class="checkbox">
          <label>
            <input 
              v-model="agreement" 
              type="checkbox" 
            /> 
              Согласен
          </label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      nameError: null,
      name1: '',
      nameError1: null,
      age: 20,
      city: 'kzn',
      cities: [ "kzn", "nsk" ],
      trip: true,
      knowledge: ['Vue CLI'],
      agreement: false
    };
  },
  methods: {
    submit() {
      if (this.isValidForm()) {
        const formData = {
          name: this.name,
          age: this.age,
          name1: this.name1,
          age1: this.age1,
          city: this.city,
          cities: this.cities,
          trip: this.trip,
          knowledge: this.knowledge,
          agreement: this.agreement
        };
  
        console.log(formData);
      } 
    },
    isValidForm() {
      if (this.name.length === 0) {
        this.nameError = 'Имя не может быть путой строкой';

        return false;
      }
      return true;
    }
  },
};
</script>

<style>
  small {
    color: red;
  }
</style>
