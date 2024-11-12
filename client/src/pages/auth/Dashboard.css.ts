import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const cardContainer = style({
  width: '35%',
  textAlign: 'center',
  margin: 'auto',
  marginTop: '100px',
  backgroundColor: vars.colors.primary,
  padding: vars.space['3x'],
  
});

export const Avatar = style({
  textAlign: 'center',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Centers the avatar and text horizontally
});
// Avatar Circle styling for the user's initials
export const AvatarCircle = style({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: vars.colors.primary, 
  color: vars.colors.textPrimary,
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
  fontWeight: 'light',
  fontFamily: vars.fonts.brand,
  border: `solid 1px ${vars.colors.textPrimary}`
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
  color: vars.colors.band,
  padding: `${vars.space['2x']} ${vars.space['3x']}`,
  fontSize: vars.fontSizes['3x'],
  borderRadius: '2px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',

  ':hover': {
    backgroundColor: vars.colors.band,
    color: vars.colors.primary,
  },

  ':focus': {
    outline: `0.1px solid ${vars.colors.band}`,
    boxShadow: `0 0 0 1px ${vars.colors.primary}`,
  },
});


export const BtnMain = style({
  backgroundColor: vars.colors.primary,
  fontFamily: vars.fonts.body,
  color: vars.colors.band,
  width: '170px',
  margin: 'auto',
  
  })