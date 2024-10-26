import SvgIcon from '@mui/material/SvgIcon';
import { buttonClasses } from '@mui/material/Button';
import { dialogActionsClasses } from '@mui/material/DialogActions';

import { stylesMode } from '../../styles';

// ----------------------------------------------------------------------

/**
 * Icons
 */
/* https://icon-sets.iconify.design/eva/chevron-down-fill */
// ----------------------------------------------------------------------

export const PickerSwitchIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/eva/arrow-ios-back-fill */
// ----------------------------------------------------------------------

export const PickerLeftIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/eva/arrow-ios-forward-fill */
// ----------------------------------------------------------------------

export const PickerRightIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/solar/calendar-mark-outline/ */
// ----------------------------------------------------------------------

export const PickerCalendarIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827q.39.03.739.076c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87q.074.562.107 1.23a.75.75 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46q.032-.667.106-1.229c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.35-.046.739-.076V2.5A.75.75 0 0 1 7 1.75m-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25zm18.405-1.5H2.832q.024-.284.058-.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009q.034.255.058.539m-4.668 7.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/solar/clock-circle-outline */
// ----------------------------------------------------------------------

export const PickerClockIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </SvgIcon>
);

const defaultProps = {
  date: {
    openPickerIcon: PickerCalendarIcon,
    leftArrowIcon: PickerLeftIcon,
    rightArrowIcon: PickerRightIcon,
    switchViewIcon: PickerSwitchIcon,
  },
  time: {
    openPickerIcon: PickerClockIcon,
    rightArrowIcon: PickerRightIcon,
    switchViewIcon: PickerSwitchIcon,
  },
};

const MuiDatePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.date },
};

const MuiDateTimePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.date },
};

const MuiStaticDatePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.date },
};

const MuiDesktopDatePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.date },
};

const MuiDesktopDateTimePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.date },
};

const MuiMobileDatePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.date },
};

const MuiMobileDateTimePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.date },
};

const MuiTimePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.time },
};

const MuiMobileTimePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.time },
};

const MuiStaticTimePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.time },
};

const MuiDesktopTimePicker = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { slots: defaultProps.time },
};

const MuiPickersLayout = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${dialogActionsClasses.root}`]: {
        [`& .${buttonClasses.root}`]: {
          [`&:last-of-type`]: {
            color: theme.vars.palette.common.white,
            backgroundColor: theme.vars.palette.text.primary,
            [stylesMode.dark]: { color: theme.vars.palette.grey[800] },
          },
        },
      },
    }),
  },
};

const MuiPickersPopper = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  styleOverrides: {
    paper: ({ theme }) => ({
      boxShadow: theme.customShadows.dropdown,
      borderRadius: theme.shape.borderRadius * 1.5,
    }),
  },
};

// ----------------------------------------------------------------------

export const datePicker = {
  MuiPickersPopper,
  MuiPickersLayout,
  // Date
  MuiDatePicker,
  MuiDateTimePicker,
  MuiStaticDatePicker,
  MuiDesktopDatePicker,
  MuiDesktopDateTimePicker,
  MuiMobileDatePicker,
  MuiMobileDateTimePicker,
  // Time
  MuiTimePicker,
  MuiMobileTimePicker,
  MuiStaticTimePicker,
  MuiDesktopTimePicker,
};
