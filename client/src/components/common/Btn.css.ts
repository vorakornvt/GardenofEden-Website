import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const BtnMain = style({
backgroundColor: vars.colors.primary,
fontFamily: vars.fonts.body,
color: vars.colors.band,
width: '170px',
margin: 'auto',

})

export const HoverEffect = style({

  ":hover": {
    textDecoration: 'underline'
  }

})

export const hoverStyle = style({
  backgroundColor: vars.colors.band, 
});