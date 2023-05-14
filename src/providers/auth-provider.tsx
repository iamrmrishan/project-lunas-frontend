import React, { createContext, useState, useContext, useEffect } from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { AuthContextData } from 'interfaces/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectExpiresIn,
  selectIsAuthenticated,
  selectToken,
  selectUser,
} from 'redux/selectors/auth-selector';
import { isTokenExpired } from 'utils/token-utils';
import { logout } from 'redux/slices/auth-slice';

const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  expiresIn: null,
  token: null,
  user: {
    id: null,
    email: null,
    userName: null,
    points: null,
    createdAt: null,
    updatedAt: null,
  },
  logout: null,
});

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector(selectToken);
  const expiresIn = useSelector(selectExpiresIn);
  const user = useSelector(selectUser);
  const storedToken = localStorage.getItem('token');
  const initialIsLoggedIn =
    storedToken && !isTokenExpired(storedToken, expiresIn);
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  useEffect(() => {
    if (isAuthenticated && token) {
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }
  }, [isAuthenticated, token]);

  useEffect(() => {
    if (storedToken && !isTokenExpired(storedToken, expiresIn)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [storedToken]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isLoggedIn,
        expiresIn,
        token,
        user,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  return useContext(AuthContext);
};
