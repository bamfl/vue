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
  emits: ['update:modelValue', 'changeError'],
  props: {
    modelValue: String,
    nameError: String
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('changeError', event.target.value.length > 0 ? null : 'Имя не может быть путой строкой');
    },
  },
};
</script>

<style lang="scss" scoped></style>
