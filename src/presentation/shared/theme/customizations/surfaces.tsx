import { alpha, Components, Theme } from "@mui/material/styles";

import { gray } from "../themePrimitives";

export const surfacesCustomizations: Components<Theme> = {
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        "&:first-of-type": {
          borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        "&:last-of-type": {
          borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        "&:not(:last-of-type)": {
          borderBottom: "none",
        },
        ":before": {
          backgroundColor: "transparent",
        },
        backgroundColor: (theme.vars || theme).palette.background.default,
        border: "1px solid",
        borderColor: (theme.vars || theme).palette.divider,
        overflow: "clip",
        padding: 4,
      }),
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: { border: "none", mb: 20 },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&:focus-visible": { backgroundColor: "transparent" },
        "&:hover": { backgroundColor: gray[50] },
        border: "none",
        borderRadius: 8,
        ...theme.applyStyles("dark", {
          "&:hover": { backgroundColor: gray[800] },
        }),
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          backgroundColor: gray[50],
          border: `1px solid ${(theme.vars || theme).palette.divider}`,
          borderRadius: (theme.vars || theme).shape.borderRadius,
          boxShadow: "none",
          gap: 16,
          padding: 16,
          transition: "all 100ms ease",
          ...theme.applyStyles("dark", {
            backgroundColor: gray[800],
          }),
          variants: [
            {
              props: {
                variant: "outlined",
              },
              style: {
                background: "hsl(0, 0%, 100%)",
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                boxShadow: "none",
                ...theme.applyStyles("dark", {
                  background: alpha(gray[900], 0.4),
                }),
              },
            },
          ],
        };
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        "&:last-child": { paddingBottom: 0 },
        padding: 0,
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
  },
};
