


import type { PickersProComponents } from "@mui/x-date-pickers-pro/themeAugmentation";
import type { PickerComponents } from "@mui/x-date-pickers/themeAugmentation";

import { menuItemClasses } from "@mui/material/MenuItem";
import { alpha, Theme } from "@mui/material/styles";
import { pickersDayClasses } from "@mui/x-date-pickers/PickersDay";
import { yearCalendarClasses } from "@mui/x-date-pickers/YearCalendar";

import { brand, gray } from "../themePrimitives";

export const datePickersCustomizations: PickersProComponents<Theme> &
  PickerComponents<Theme> = {
  MuiMonthCalendar: {
    styleOverrides: {
      button: ({ theme }) => ({
        "&:focus": {
          [`&.${yearCalendarClasses.selected}`]: { backgroundColor: gray[700] },
          backgroundColor: "transparent",
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "2px",
        },
        "&:hover": {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        [`&.${yearCalendarClasses.selected}`]: {
          backgroundColor: gray[700],
          fontWeight: theme.typography.fontWeightMedium,
        },
        borderRadius: theme.shape.borderRadius,
        color: (theme.vars || theme).palette.grey[600],
        fontSize: theme.typography.body1.fontSize,
        padding: theme.spacing(0.5),
        ...theme.applyStyles("dark", {
          "&:focus": {
            [`&.${yearCalendarClasses.selected}`]: {
              backgroundColor: gray[300],
            },
            backgroundColor: "transparent",
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: "2px",
          },
          "&:hover": {
            backgroundColor: (theme.vars || theme).palette.action.hover,
          },
          [`&.${yearCalendarClasses.selected}`]: {
            backgroundColor: gray[300],
            color: (theme.vars || theme).palette.common.black,
            fontWeight: theme.typography.fontWeightMedium,
          },
          color: (theme.vars || theme).palette.grey[300],
        }),
      }),
    },
  },
  MuiPickerPopper: {
    styleOverrides: {
      paper: ({ theme }) => ({
        [`& .${menuItemClasses.root}`]: {
          borderRadius: 6,
          margin: "0 6px",
        },
        background: "hsl(0, 0%, 100%)",
        backgroundImage: "none",
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        boxShadow:
          "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px",
        marginTop: 4,
        ...theme.applyStyles("dark", {
          background: gray[900],
          boxShadow:
            "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px",
        }),
      }),
    },
  },
  MuiPickersArrowSwitcher: {
    styleOverrides: {
      button: ({ theme }) => ({
        backgroundColor: "transparent",
        color: (theme.vars || theme).palette.grey[500],
        ...theme.applyStyles("dark", {
          color: (theme.vars || theme).palette.grey[400],
        }),
      }),
      spacer: { width: 16 },
    },
  },
  MuiPickersCalendarHeader: {
    styleOverrides: {
      switchViewButton: {
        border: "none",
        padding: 0,
      },
    },
  },
  MuiPickersDay: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&:focus": {
          [`&.${pickersDayClasses.selected}`]: { backgroundColor: gray[700] },
          backgroundColor: "transparent",
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "2px",
        },
        "&:hover": {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        [`&.${pickersDayClasses.selected}`]: {
          backgroundColor: gray[700],
          fontWeight: theme.typography.fontWeightMedium,
        },
        borderRadius: theme.shape.borderRadius,
        color: (theme.vars || theme).palette.grey[600],
        fontSize: theme.typography.body1.fontSize,
        padding: theme.spacing(0.5),
        ...theme.applyStyles("dark", {
          "&:focus": {
            [`&.${pickersDayClasses.selected}`]: { backgroundColor: gray[300] },
            backgroundColor: "transparent",
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: "2px",
          },
          "&:hover": {
            backgroundColor: (theme.vars || theme).palette.action.hover,
          },
          [`&.${pickersDayClasses.selected}`]: {
            backgroundColor: gray[300],
            color: (theme.vars || theme).palette.common.black,
            fontWeight: theme.typography.fontWeightMedium,
          },
          color: (theme.vars || theme).palette.grey[300],
        }),
      }),
    },
  },
  MuiYearCalendar: {
    styleOverrides: {
      button: ({ theme }) => ({
        "&:focus": {
          [`&.${yearCalendarClasses.selected}`]: { backgroundColor: gray[700] },
          backgroundColor: "transparent",
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "2px",
        },
        "&:hover": {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        [`&.${yearCalendarClasses.selected}`]: {
          backgroundColor: gray[700],
          fontWeight: theme.typography.fontWeightMedium,
        },
        borderRadius: theme.shape.borderRadius,
        color: (theme.vars || theme).palette.grey[600],
        fontSize: theme.typography.body1.fontSize,
        height: "fit-content",
        padding: theme.spacing(0.5),
        ...theme.applyStyles("dark", {
          "&:focus": {
            [`&.${yearCalendarClasses.selected}`]: {
              backgroundColor: gray[300],
            },
            backgroundColor: "transparent",
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: "2px",
          },
          "&:hover": {
            backgroundColor: (theme.vars || theme).palette.action.hover,
          },
          [`&.${yearCalendarClasses.selected}`]: {
            backgroundColor: gray[300],
            color: (theme.vars || theme).palette.common.black,
            fontWeight: theme.typography.fontWeightMedium,
          },
          color: (theme.vars || theme).palette.grey[300],
        }),
      }),
    },
  },
};
