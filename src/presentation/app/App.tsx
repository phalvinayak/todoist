import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import AppNavbar from "@shared/components/AppNavbar/AppNavbar";
import Header from "@shared/components/Header/Header";
import MainGrid from "@shared/components/MainGrid/MainGrid";
import SideMenu from "@shared/components/SideMenu/SideMenu";
import AppTheme from "@shared/theme/AppTheme/AppTheme";
import { datePickersCustomizations } from "@shared/theme/customizations";
import { FC } from "react";

import "./App.module.scss";

const xThemeComponents = {
  ...datePickersCustomizations,
};

const App: FC = (props: { disableCustomTheme?: boolean }) => {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            flexGrow: 1,
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mt: { md: 0, xs: 8 },
              mx: 3,
              pb: 5,
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
};

export default App;
