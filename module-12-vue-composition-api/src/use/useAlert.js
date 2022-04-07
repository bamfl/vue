import { ref } from 'vue';

export default function useAlert() {
  const alert = ref(false);

  function toggle() {
    alert.value = !alert.value;
  }

  function close() {
    alert.value = false;
  }

  return {
    alert,
    toggle,
    close,
  };
}
