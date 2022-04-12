import { Ref } from 'vue';
import { useFetch } from './fetch';

interface IUser {
  id: number,
  name: string,
  username: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }
}

export async function useUsers(): Promise<Ref<IUser[]>> {
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';

  const users = await useFetch(usersUrl) as Ref<IUser[]>;

  return users;
}
