import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const productLink = style({
  color: vars.colors.band,
  textDecoration: "none",

});

export const productCard = style({
  display: "grid",
  fontFamily: vars.fonts.body,
  justifyItems: "center",
  textAlign: "center",
  padding: "0.25rem",          // Adds padding around each product
  backgroundColor: vars.colors.primary,   // Ensure a clean background
  borderRadius: "15px",
  transition: "transform 0.3s ease", // Smooth hover transition
  ':hover': {
    transform: "scale(1.01)", // Slight enlargement on hover for emphasis
  },
});

export const productCardContent = style({
  background: vars.colors.primary,
  marginTop: "0.5rem",
  padding: "1rem 1.5rem",      // Increased padding for a balanced look
});

export const productCardTitle = style({
  fontSize: vars.fontSizes['3x'],
  marginBottom: "0.25rem",
});
