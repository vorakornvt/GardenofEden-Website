import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const FontBrand = style({
fontFamily: vars.fonts.brand,
color: 'black',
})


export const FontBody = style({
  fontFamily: vars.fonts.body,
  color: vars.colors.band,
  })