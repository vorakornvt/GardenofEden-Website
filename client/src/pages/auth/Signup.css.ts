import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";



export const styledLabel = style({
  display: "none",
})

export const heading = style({
  fontSize: vars.fontSizes["6x"],
  color: vars.colors.complementary,
  textTransform: 'uppercase',
  marginBottom: vars.space['1x'],
  textAlign: 'center',
  fontFamily: vars.fonts.body,
  fontWeight: 'bold'
});

export const subHeading = style({
  fontSize: vars.fontSizes["2x"],
  color: vars.colors.complementary,
  textTransform: 'uppercase',
  marginBottom: vars.space['6x'],
  textAlign: 'center',
  fontFamily: vars.fonts.body,
  fontWeight: 'lighter'
});


export const submitButton =  style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.band,
  border: `1px solid ${vars.colors.band}`, 
  padding: `${vars.space['2x']} ${vars.space['3x']}`,
  marginTop: vars.space['3x'],
  fontSize: vars.fontSizes['3x'],
  fontFamily: vars.fonts.body,
  textTransform: 'uppercase',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',

  ':hover': {
    backgroundColor: vars.colors.band,
    color: vars.colors.primary,
  },

  ':focus': {
    outline: `0.1px solid ${vars.colors.complementary}`,  
    boxShadow: `0 0 0 1px ${vars.colors.primary}`,  
  },
});

export const FormBox = style({
  width: '40%',
  alignItems: 'center',
  textAlign: 'center',
  paddingLeft: '40px',
  paddingRight: '40px',
  marginTop: '70px',
  backgroundColor: vars.colors.primary,

});



export const styledInput = style({
  margin: "1rem 0",
  textAlign: "start",
  fontWeight: vars.fontWeights.light,
  fontSize: vars.fontSizes["3x"],
  outline: "none",
  border: "1px solid",
  color: vars.colors.primary,
  background: vars.colors.complementary,
  fontFamily: vars.fonts.body,
  transition: "all 0.2s",

  ":focus": {
    border: `2px solid ${vars.colors.grey400}`,
    boxShadow: "none",
    transform: "scale(1.01)"
  }
})

export const userNav = style({
  marginTop: "1rem",
  paddingTop: "1rem",
  fontSize: "0.9em",
  fontFamily: vars.fonts.body,
  color: vars.colors.complementary,
  marginBottom: vars.space["2x"]
})

globalStyle(`${userNav} a`, {
 
  color: vars.colors.complementary,

});

globalStyle(`${userNav} a:hover`, {
  color: vars.colors.brand,
  textDecoration: "underline"

});