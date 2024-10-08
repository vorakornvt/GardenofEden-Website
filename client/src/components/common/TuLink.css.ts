import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const navlink = style({
  textDecoration: "none",
  padding: vars.space["2x"],
  display: "inline-block",
  backgroundColor: "#000", // Black background like SpaceX buttons
  color: "#fff", // White text for contrast
  border: "none", // No border to match SpaceX design
  borderRadius: "4px", // Slight rounding on edges
  textTransform: "uppercase", // Make the text uppercase
  fontFamily: vars.fonts.brand,
  fontWeight: vars.fontWeights.bold,
  textAlign: "center",
  transition: "background-color 0.3s ease", // Smooth hover transition

  ":hover": {
    backgroundColor: "#444", // Dark gray on hover
  },
});
