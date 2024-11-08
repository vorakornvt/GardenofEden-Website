import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const cardContainer = style({
  width: '30%',
  textAlign: 'center',
  marginTop: '100px',
  backgroundColor: vars.colors.primary,
  padding: vars.space['3x'],
});

export const welcomeMessage = style({
  fontSize: vars.fontSizes['6x'],
  color: vars.colors.band,
  textTransform: 'uppercase',
  marginBottom: vars.space['2x'],
});

export const textContent = style({
  fontSize: vars.fontSizes['3x'],
  color: vars.colors.band,
  marginBottom: vars.space['2x'],
});

export const errorMessage = style({
  color: vars.colors.error,
  fontSize: vars.fontSizes['4x'],
  marginBottom: vars.space['4x'],
});

export const buttonContainer = style({
  marginTop: vars.space['3x'],
});

export const submitButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.complementary,
  padding: `${vars.space['2x']} ${vars.space['3x']}`,
  fontSize: vars.fontSizes['3x'],
  borderRadius: '2px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',

  ':hover': {
    backgroundColor: vars.colors.complementary,
    color: vars.colors.primary,
  },

  ':focus': {
    outline: `0.1px solid ${vars.colors.complementary}`,
    boxShadow: `0 0 0 1px ${vars.colors.primary}`,
  },
});
