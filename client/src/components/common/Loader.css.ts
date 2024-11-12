import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const loadingBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh", // Vertically centered loader
  backgroundColor: "#f9f9f9", // Light background like SpaceX pages
});

export const loadingSpinner = style({
  width: "4rem", // Spinner size
  height: "4rem", // Spinner size
  borderWidth: "4px", // Thicker spinner border
  color: vars.colors.band, 
});
