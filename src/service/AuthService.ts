import AsyncStorage from '@react-native-async-storage/async-storage';
import usersJSON from '../data/users.json';

export interface User {
  id: number
  name: string
  email: string
  password: string
  image: string
}

export interface SignInParams {
  email: string
  password: string
}

export function AuthService() {
  async function login({ email, password }: SignInParams) {
    const users = usersJSON as User[];

    const response = users.find((user) => user.email === email);

    if (response && response.password === password) {
      await AsyncStorage.setItem('@Fruit:User', JSON.stringify(response));

      return response;
    }

    return undefined;
  }

  async function removeUserFromStorage() {
    await AsyncStorage.removeItem('@Fruit:User');
  }

  async function getUser() {
    const response = await AsyncStorage.getItem('@Fruit:User');
    if (response) {
      return JSON.parse(response) as User;
    }

    return null;
  }

  return {
    login,
    removeUserFromStorage,
    getUser,
  };
}
