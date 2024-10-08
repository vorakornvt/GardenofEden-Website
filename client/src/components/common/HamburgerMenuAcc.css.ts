import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';


export const HamBar = style({
  border: 'none',
  color: vars.colors.band,
  fontSize: vars.fontSizes['4x'],
  textTransform: "uppercase",

  marginLeft: '30px',
  textDecoration: 'none',
  marginTop: '-5px',

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
  fontSize: vars.fontSizes['3x']
})