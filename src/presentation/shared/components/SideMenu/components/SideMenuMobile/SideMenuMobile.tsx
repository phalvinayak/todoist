import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuButton from "@shared/components/SideMenu/components/MenuButton/MenuButton";
import MenuContent from "@shared/components/SideMenu/components/MenuContent/MenuContent";
import { selectUser } from "@src/redux/slices/auth/authSelector";
import { useSelector } from "react-redux";

interface SideMenuMobileProps {
  open: boolean | undefined;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function SideMenuMobile({
  open,
  toggleDrawer,
}: Readonly<SideMenuMobileProps>) {
  const user = useSelector(selectUser);

  if (!user) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
          backgroundImage: "none",
        },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Stack
        sx={{
          height: "100%",
          maxWidth: "70dvw",
        }}
      >
        <Stack direction="row" sx={{ gap: 1, p: 2, pb: 0 }}>
          <Stack
            direction="row"
            sx={{ alignItems: "center", flexGrow: 1, gap: 1, p: 1 }}
          >
            <Avatar
              sizes="small"
              alt={user.name}
              src={user.picture}
              sx={{ height: 24, width: 24 }}
            />
            <Typography component="p" variant="h6">
              {user.name}
            </Typography>
          </Stack>
          <MenuButton showBadge>
            <NotificationsRoundedIcon />
          </MenuButton>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
        <Stack sx={{ p: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<LogoutRoundedIcon />}
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
