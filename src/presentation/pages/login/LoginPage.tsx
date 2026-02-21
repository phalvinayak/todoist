import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { googleAuth } from "@src/redux/services/authService";
import { loginSuccess } from "@src/redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    try {
      const { token, user } = await googleAuth.signIn();
      dispatch(loginSuccess({ token, user }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <Paper elevation={3} sx={{ maxWidth: 400, p: 4, width: "100%" }}>
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Welcome to Todo
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Sign in with your Google account to continue
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleGoogleLogin}
            fullWidth
          >
            Sign in with Google
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
