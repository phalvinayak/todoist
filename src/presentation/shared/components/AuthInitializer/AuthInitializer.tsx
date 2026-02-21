import { handleWebAuthCallback } from '@src/redux/services/webAuthHandler';
import { loginSuccess } from '@src/redux/slices/auth/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface AuthInitializerProps {
  children: React.ReactNode;
}

const AuthInitializer = ({ children }: AuthInitializerProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth = async () => {
      const isExtension = typeof chrome !== 'undefined' && chrome.identity;
      
      if (!isExtension) {
        const authResult = await handleWebAuthCallback();
        if (authResult) {
          dispatch(loginSuccess(authResult));
        }
      }
    };

    initAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthInitializer;