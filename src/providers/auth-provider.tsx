import React, { createContext, useState, useContext, useEffect } from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';

interface AuthState {
  token: string | null;
  user: JwtPayload | null;
}

interface AuthContextData {
  isLoggedIn: boolean;
  user: JwtPayload | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = jwtDecode<JwtPayload>(token);
      setAuthState({ token, user: decodedToken });
    }
  }, []);

  const login = (token: string) => {
    const decodedToken = jwtDecode<JwtPayload>(token);
    setAuthState({ token, user: decodedToken });
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuthState({ token: null, user: null });
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: Boolean(authState.token),
        user: authState.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  return useContext(AuthContext);
};