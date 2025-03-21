import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';


export const HamBar = style({
  border: 'none',
  color: 'black',
  textTransform: "uppercase",

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
  font: vars.fontSizes['3x'],
  textDecoration: 'none'
  
})

export const ProductText = style({
  textDecoration: 'none',
  font: vars.fonts.body,
  textAlign: 'center',
  
})

