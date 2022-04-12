import { Ref, ref } from 'vue';

export async function useFetch<T>(url: RequestInfo, body?: RequestInit): Promise<Ref<T | undefined>> {
  const response: Ref<T | undefined> = ref();

  const res = await fetch(url, body);
  response.value = await res.json();

  return response;
}
