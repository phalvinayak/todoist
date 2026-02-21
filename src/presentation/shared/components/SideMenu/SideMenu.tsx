import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MenuContent from "@shared/components/SideMenu/components/MenuContent/MenuContent";
import { UserProfile } from "@shared/components/SideMenu/components/UserProfile/UserProfile";
import { FC } from "react";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  [`& .${drawerClasses.paper}`]: {
    boxSizing: "border-box",
    width: drawerWidth,
  },
  boxSizing: "border-box",
  flexShrink: 0,
  mt: 10,
  width: drawerWidth,
});

const SideMenu: FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
        display: { md: "block", xs: "none" },
      }}
    >
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "auto",
        }}
      >
        <MenuContent />
      </Box>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          borderColor: "divider",
          borderTop: "1px solid",
          gap: 1,
          p: 2,
        }}
      >
        <UserProfile />
      </Stack>
    </Drawer>
  );
};

export default SideMenu;
