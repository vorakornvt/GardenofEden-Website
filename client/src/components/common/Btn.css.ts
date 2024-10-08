import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const BtnMain = style({
backgroundColor: vars.colors.band,
fontFamily: vars.fonts.body,

width: '170px',
margin: 'auto',

})

export const HoverEffect = style({

  ":hover": {
    textDecoration: 'underline'
  }

})
