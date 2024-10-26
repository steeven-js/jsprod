import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import { useTheme, useColorScheme } from '@mui/material/styles';

import COLORS from 'src/theme/core/colors.json';
import { paper, varAlpha } from 'src/theme/styles';
import { defaultFont } from 'src/theme/core/typography';
import PRIMARY_COLOR from 'src/theme/with-settings/primary-color.json';
import SECONDARY_COLOR from 'src/theme/with-settings/secondary-color.json';

import { Iconify } from '../../iconify';
import { BaseOption } from './base-option';
import { Scrollbar } from '../../scrollbar';
import { FontOptions } from './font-options';
import { useSettingsContext } from '../context';
import { PresetsOptions } from './presets-options';
import { defaultSettings } from '../config-settings';
import { FullScreenButton } from './fullscreen-button';

// ----------------------------------------------------------------------

const PRESET_NAMES = ['default', 'preset1', 'preset2', 'preset3', 'preset4', 'preset5'];

// ----------------------------------------------------------------------

export function SettingsDrawer({ sx, hideFont, hidePresets, hideDirection, hideColorScheme }) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const { mode, setMode } = useColorScheme();

  const renderHead = (
    <Box display="flex" alignItems="center" sx={{ py: 2, pr: 1, pl: 2.5 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Settings
      </Typography>

      <FullScreenButton />

      <Tooltip title="Reset">
        <IconButton
          onClick={() => {
            settings.onReset();
            setMode(defaultSettings.colorScheme);
          }}
        >
          <Badge color="error" variant="dot" invisible={!settings.canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>

      <Tooltip title="Close">
        <IconButton onClick={settings.onCloseDrawer}>
          <Iconify icon="eva:close-outline" />
        </IconButton>
      </Tooltip>
    </Box>
  );

  const renderMode = (
    <BaseOption
      label="Dark mode"
      icon="moon"
      selected={settings.colorScheme === 'dark'}
      onClick={() => {
        settings.onUpdateField('colorScheme', mode === 'light' ? 'dark' : 'light');
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    />
  );

  const renderRTL = (
    <BaseOption
      label="Right to left"
      icon="align-right"
      selected={settings.direction === 'rtl'}
      onClick={() =>
        settings.onUpdateField('direction', settings.direction === 'ltr' ? 'rtl' : 'ltr')
      }
    />
  );

  const renderPresets = (
    <PresetsOptions
      value={settings.primaryColor}
      onClickOption={(newValue) => settings.onUpdateField('primaryColor', newValue)}
      options={PRESET_NAMES.map((option) =>
        option === 'default'
          ? {
              name: 'default',
              value: [COLORS.primary.main, COLORS.secondary.main],
            }
          : {
              name: option,
              value: [PRIMARY_COLOR[option].main, SECONDARY_COLOR[option].main],
            }
      )}
    />
  );

  const renderFont = (
    <FontOptions
      value={settings.fontFamily}
      onClickOption={(newValue) => settings.onUpdateField('fontFamily', newValue)}
      options={[defaultFont, 'Inter Variable', 'DM Sans Variable', 'Nunito Sans Variable']}
    />
  );

  return (
    <Drawer
      anchor="right"
      open={settings.openDrawer}
      onClose={settings.onCloseDrawer}
      slotProps={{ backdrop: { invisible: true } }}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          ...paper({
            theme,
            color: varAlpha(theme.vars.palette.background.defaultChannel, 0.9),
          }),
          width: 360,
          ...sx,
        },
      }}
    >
      {renderHead}

      <Scrollbar>
        <Stack spacing={6} sx={{ px: 2.5, pb: 5 }}>
          <Stack spacing={2}>
            {!hideColorScheme && renderMode}
            {!hideDirection && renderRTL}
          </Stack>

          {!hidePresets && renderPresets}
          {!hideFont && renderFont}
        </Stack>
      </Scrollbar>
    </Drawer>
  );
}
