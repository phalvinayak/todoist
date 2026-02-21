import type { ThemeOptions } from "@mui/material/styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dataDisplayCustomizations } from "@shared/theme/customizations/dataDisplay";
import { feedbackCustomizations } from "@shared/theme/customizations/feedback";
import { inputsCustomizations } from "@shared/theme/customizations/input";
import { navigationCustomizations } from "@shared/theme/customizations/navigation";
import { surfacesCustomizations } from "@shared/theme/customizations/surfaces";
import {
  colorSchemes,
  shadows,
  shape,
  typography,
} from "@shared/theme/themePrimitives";
import { FC, useMemo } from "react";

interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions["components"];
}

const AppTheme: FC<AppThemeProps> = ({
  children,
  disableCustomTheme,
  themeComponents,
}) => {
  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
          },
          // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
          cssVariables: {
            colorSchemeSelector: "data-mui-color-scheme",
            cssVarPrefix: "template",
          },
          shadows,
          shape,
          typography,
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
