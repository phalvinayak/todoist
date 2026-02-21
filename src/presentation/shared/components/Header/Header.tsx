import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Stack from "@mui/material/Stack";
import CustomDatePicker from "@shared/components/CustomDatePicker/CustomDatePicker";
import NavbarBreadcrumbs from "@shared/components/NavbarBreadcrumbs/NavbarBreadcrumbs";
import Search from "@shared/components/Search/Search";
import MenuButton from "@shared/components/SideMenu/components/MenuButton/MenuButton";
import ColorModeIconDropdown from "@shared/theme/ColorModeIconDropdown/ColorModeIconDropdown";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: { md: "center", xs: "flex-start" },
        display: { md: "flex", xs: "none" },
        justifyContent: "space-between",
        maxWidth: { md: "1700px", sm: "100%" },
        pt: 1.5,
        width: "100%",
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
};

export default Header;
