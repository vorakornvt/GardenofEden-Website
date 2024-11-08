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

export const ModalBody = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: vars.colors.primary,
  alignItems: 'center',
  borderRadius: '20px',
  gap: '1rem',
  padding: '2rem',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
});


export const HamBarText = style({
  fontFamily: vars.fonts.body,
  marginTop: vars.space['4x'],
 display: 'flex',
 flexDirection: 'column',
  font: vars.fontSizes['2x'],
  fontSize: vars.fontSizes['3x']
})

export const accountSection = style({
  display: "flex",
  gap: "2rem", // Space between Login and Signup sections
});

export const loginSection = style({
  flex: 1, // Equal width for both sections
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const signupSection = style({
  flex: 1, // Equal width for both sections
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const sectionTitle = style({
  fontSize: "1.5rem",
  marginBottom: "0.5rem",
  fontWeight: "bold",
});

export const sectionDescription = style({
  fontSize: "0.875rem",
  color: "gray",
  marginBottom: "1rem",
});

export const centered = style({
  textAlign: "center",
  margin: "auto",
})

export const fontsize4x = style({
  fontSize: vars.fontSizes['4x'],
})