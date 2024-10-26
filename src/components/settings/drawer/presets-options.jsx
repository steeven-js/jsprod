import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import { varAlpha, stylesMode } from 'src/theme/styles';

import { Block } from './styles';

// ----------------------------------------------------------------------

export function PresetsOptions({ value, options, onClickOption }) {
  return (
    <Block title="Presets">
      <Box component="ul" gap={1} display="grid" gridTemplateColumns="repeat(3, 1fr)">
        {options.map((option) => {
          const selected = value === option.name;

          const primaryColor = option.value[0];
          const secondaryColor = option.value[1];

          return (
            <Box component="li" key={option.name} sx={{ display: 'flex' }}>
              <ButtonBase
                disableRipple
                onClick={() => onClickOption(option.name)}
                sx={(theme) => ({
                  py: 2.5,
                  width: 1,
                  borderWidth: 1,
                  borderRadius: 1.75,
                  borderStyle: 'solid',
                  border: `solid 1px transparent`,
                  ...(selected && {
                    bgcolor: 'background.paper',
                    borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    boxShadow: `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                    [stylesMode.dark]: {
                      boxShadow: `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.common.blackChannel, 0.12)}`,
                    },
                  }),
                })}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    overflow: 'hidden',
                    borderRadius: '50%',
                    position: 'relative',
                    bgcolor: primaryColor,
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      top: 0,
                      right: 0,
                      bottom: 0,
                      m: 'auto',
                      width: 0.5,
                      height: '120%',
                      position: 'absolute',
                      borderRadius: 'inherit',
                      bgcolor: secondaryColor,
                      transition: theme.transitions.create('transform', {
                        duration: theme.transitions.duration.complex,
                        easing: theme.transitions.easing.sharp,
                      }),
                      ...(selected && {
                        transformOrigin: 'left',
                        transform: 'rotate(45deg)',
                      }),
                    })}
                  />
                </Box>
              </ButtonBase>
            </Box>
          );
        })}
      </Box>
    </Block>
  );
}
