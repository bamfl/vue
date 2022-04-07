import { ref } from 'vue';

export default function useAlert(visibility = false) {
  const alert = ref(visibility);

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
