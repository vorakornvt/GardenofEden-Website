import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';
import { black } from 'tailwindcss/colors';



export const navbar = style({
  fontFamily: vars.fonts.body,
  paddingTop: vars.space['1x'],
  paddingBottom: vars.space['1x'],
});

export const navleft = style({
 
  paddingLeft: vars.space['6x'],
});


export const brandLink = style({
  display: 'flex',
  flexDirection: "row",
  gap: vars.space['2x'],
  alignItems: "center",
  
  textTransform: "uppercase",
});

export const logo = style({
  
  width: '110px',
  cursor: 'pointer',
  color: vars.colors.textPrimary,


});


export const navLink = style({
  color: vars.colors.complementary,
  fontSize: vars.fontSizes['4x'],
  textTransform: "uppercase",
  marginLeft: vars.space['4x'],
  textDecoration: 'none',

  ":hover": {
    color: vars.colors.textPrimary, 
}});

export const navLinkAuth = style({
  color: vars.colors.complementary,
  fontSize: vars.fontSizes['3x'],
  textTransform: "uppercase",
  marginRight: vars.space['2x'],
  textDecoration: 'none',
  });


export const navLinkSub = style({
  color: vars.colors.complementary,
  fontSize: vars.fontSizes['3x'],
  textTransform: "uppercase",
  textDecoration: 'none',
  marginTop: vars.space['1x'],

  ":hover": {
    textDecoration: 'underline',
    color: vars.colors.complementary,
  },
});


export const navIcon = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: vars.space['3x'],
  marginRight: vars.space['4x'],
  color: vars.colors.complementary,

  ":hover": {
    color: vars.colors.brand,
    cursor: 'pointer',
  },


});


export const dropdowns = style({
  backgroundColor: vars.colors.primary,
  display: 'flex',
  flexDirection: 'column',
  width: '100px', 
  gap: '4',
  textAlign: 'center'
});

export const dropdownContent = style({
  backgroundColor: vars.colors.primary,
  border: `solid 1.5px ${vars.colors.band}`,
  
});