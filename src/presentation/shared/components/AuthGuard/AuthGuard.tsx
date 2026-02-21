import LoginPage from "@pages/login/LoginPage";
import AppTheme from "@shared/theme/AppTheme/AppTheme";
import { selectIsAuthenticated } from "@src/redux/slices/auth/authSelector";
import { useSelector } from "react-redux";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return (
      <AppTheme>
        <LoginPage />
      </AppTheme>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
