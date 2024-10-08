import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const SoiconcBtnPrimary = 
  style({
    backgroundColor: vars.colors.primary,
    color: vars.colors.complementary,
    border: `0.1px solid ${vars.colors.brand}`, 
    outline: `0.1px solid ${vars.colors.primary}`,  
    padding: `${vars.space['2x']} ${vars.space['3x']}`,
    marginTop: vars.space['3x'],
    fontSize: vars.fontSizes['3x'],
    fontFamily: vars.fonts.display,
    textTransform: 'uppercase',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
  
    ':hover': {
      backgroundColor: vars.colors.complementary,
      color: vars.colors.primary,
    },
  
    ':focus': {
      outline: `0.1px solid ${vars.colors.complementary}`,  
      boxShadow: `0 0 0 1px ${vars.colors.primary}`,  
    },
  });



export const SoiconcBtnSecondary  = style({
  backgroundColor: vars.colors.complementary,
  color: vars.colors.primary,
  border: 'none', 
  outline: `0.1px solid ${vars.colors.brand}`,  
  padding: `${vars.space['2x']} ${vars.space['3x']}`,
  marginTop: vars.space['3x'],
  fontSize: vars.fontSizes['3x'],
  fontFamily: vars.fonts.display,
  textTransform: 'uppercase',
  borderRadius: '2px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',

  ':hover': {
    backgroundColor: vars.colors.primary,
    color: vars.colors.complementary,
  },

  ':focus': {
    outline: `0.1px solid ${vars.colors.primary}`,  
    boxShadow: `0 0 0 1px ${vars.colors.complementary}`,  
  },
});




