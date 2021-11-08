import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import {
  AuthService,
  SignInParams,
  User,
} from '../service/AuthService';

interface AuthData {
  user: User
  signIn: (data: SignInParams) => void
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const Auth = createContext({} as AuthData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);

  const {
    login,
    getUser,
    removeUserFromStorage,
  } = AuthService();

  const signIn = useCallback(async ({ email, password }: SignInParams) => {
    const response = await login({ email, password });

    if (response) {
      setUser(response);
    }
  }, [login]);

  const signOut = useCallback(async () => {
    await removeUserFromStorage();
    setUser({} as User);
  }, [removeUserFromStorage]);

  useEffect(() => {
    async function loadStorage() {
      const response = await getUser();
      if (response) {
        setUser(response);
      }
    }

    if (!user.id) {
      loadStorage();
    }
  }, [getUser, signOut, user]);

  return (
    <Auth.Provider value={{ user, signIn, signOut }}>
      {children}
    </Auth.Provider>
  );
}

export const useAuth = () => useContext(Auth);
