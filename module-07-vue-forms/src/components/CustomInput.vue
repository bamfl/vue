<template>
  <div class="form-control">
    <label for="name">Как тебя зовут?</label>

    <input 
      type="text"
      placeholder="Введи имя" 
      @input="change" 
      :value="modelValue"  
    />
    <small v-if="nameError">{{ nameError }}</small>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
  },
  data() {
    return {
      nameError: null
    }
  },
  methods: {
    change(event) {
      event.target.value.length > 0 ? this.nameError = null : this.nameError = 'Имя не может быть путой строкой'
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
