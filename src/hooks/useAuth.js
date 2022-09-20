import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import endPoints from '@services/api/';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);

  const signIn = async (email, password) => {
    setErrorLogin(false);
    const options = {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    const { access_token, statusCode } = await fetch(endPoints.auth.login, options).then((res) => res.json());
    if (access_token) {
      Cookie.set('token', access_token.access_token, { expires: 5 });

      const options = {
        method: 'GET',
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      };
      const user = await fetch(endPoints.auth.profile, options).then((res) => res.json());
      setUser(user);
    }
    if (statusCode) {
      setErrorLogin(true);
    }
  };

  const logout = async () => {
    Cookie.remove('token');
    setUser(null);

    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    errorLogin,
    logout,
  };
}
