import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';


export const HamBar = style({
  border: 'none',
  color: vars.colors.textPrimary,
  fontSize: vars.fontSizes['4x'],
  textTransform: "uppercase",
  marginRight: vars.space['4x'],
  textDecoration: 'none',

  ":hover": {
    border: 'none',
    backgroundColor: vars.colors.primary,
    color: vars.colors.textPrimary
  }
})


export const HamBarText = style({
  fontFamily: vars.fonts.body,
  marginTop: vars.space['4x'],
 display: 'flex',
 flexDirection: 'column',
  font: vars.fontSizes['2x'],
  
})

