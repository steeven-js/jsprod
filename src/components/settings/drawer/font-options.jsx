import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import { CONFIG } from 'src/config-global';
import { setFont, varAlpha, stylesMode } from 'src/theme/styles';

import { Block } from './styles';
import { SvgColor } from '../../svg-color';

// ----------------------------------------------------------------------

export function FontOptions({ value, options, onClickOption }) {
  return (
    <Block title="Font">
      <Box component="ul" gap={1.5} display="grid" gridTemplateColumns="repeat(2, 1fr)">
        {options.map((option) => {
          const selected = value === option;

          return (
            <Box component="li" key={option} sx={{ display: 'inline-flex' }}>
              <ButtonBase
                disableRipple
                onClick={() => onClickOption(option)}
                sx={(theme) => ({
                  py: 2,
                  width: 1,
                  gap: 0.75,
                  borderWidth: 1,
                  borderRadius: 1.5,
                  borderStyle: 'solid',
                  flexDirection: 'column',
                  fontFamily: setFont(option),
                  fontWeight: 'fontWeightMedium',
                  border: `solid 1px transparent`,
                  fontSize: theme.typography.pxToRem(12),
                  color: theme.vars.palette.text.disabled,
                  ...(selected && {
                    bgcolor: 'background.paper',
                    color: theme.vars.palette.text.primary,
                    borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    boxShadow: `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                    [stylesMode.dark]: {
                      boxShadow: `-8px 8px 20px -4px ${varAlpha(theme.vars.palette.common.blackChannel, 0.12)}`,
                    },
                  }),
                })}
              >
                <SvgColor
                  width={28}
                  src={`${CONFIG.assetsDir}/assets/icons/settings/ic-font.svg`}
                  sx={{
                    color: 'currentColor',
                    ...(selected && {
                      background: (theme) =>
                        `linear-gradient(135deg, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
                    }),
                  }}
                />

                {option.endsWith('Variable') ? option.replace(' Variable', '') : option}
              </ButtonBase>
            </Box>
          );
        })}
      </Box>
    </Block>
  );
}
