import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { tabsClasses } from "@mui/material/Tabs";
import MuiToolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuButton from "@shared/components/SideMenu/components/MenuButton/MenuButton";
import SideMenuMobile from "@shared/components/SideMenu/components/SideMenuMobile/SideMenuMobile";
import ColorModeIconDropdown from "@shared/theme/ColorModeIconDropdown/ColorModeIconDropdown";
import { googleAuth } from "@src/redux/services/authService";
import { selectUser } from "@src/redux/slices/auth/authSelector";
import { logout } from "@src/redux/slices/auth/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Toolbar = styled(MuiToolbar)({
  [`& ${tabsClasses.root}`]: {
    gap: "8px",
    p: "8px",
    pb: 0,
  },
  alignItems: "start",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  gap: "12px",
  justifyContent: "center",
  padding: "12px",
  width: "100%",
});

export default function AppNavbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: "none",
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        boxShadow: 0,
        display: { md: "none", xs: "auto" },
        top: "var(--template-frame-height, 0px)",
      }}
    >
      <Toolbar variant="regular">
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            flexGrow: 1,
            gap: 1,
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", mr: "auto" }}
          >
            <CustomIcon />
            <Typography
              variant="h4"
              component="h1"
              sx={{ color: "text.primary" }}
            >
              Dashboard
            </Typography>
          </Stack>
          <UserProfile />
          <ColorModeIconDropdown />
          <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuRoundedIcon />
          </MenuButton>
          <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = async () => {
    try {
      await googleAuth.signOut();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Avatar src={user?.picture} sx={{ height: 32, width: 32 }}>
        {user?.name?.charAt(0)}
      </Avatar>
      <IconButton onClick={handleLogout} size="small">
        <LogoutIcon />
      </IconButton>
    </Stack>
  );
}

export function CustomIcon() {
  return (
    <Box
      sx={{
        alignItems: "center",
        alignSelf: "center",
        backgroundImage:
          "linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)",
        bgcolor: "black",
        border: "1px solid",
        borderColor: "hsl(210, 100%, 55%)",
        borderRadius: "999px",
        boxShadow: "inset 0 2px 5px rgba(255, 255, 255, 0.3)",
        color: "hsla(210, 100%, 95%, 0.9)",
        display: "flex",
        height: "1.5rem",
        justifyContent: "center",
        width: "1.5rem",
      }}
    >
      <DashboardRoundedIcon color="inherit" sx={{ fontSize: "1rem" }} />
    </Box>
  );
}
