import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const generalForm = style({
  minWidth: "50vw", // Reduced to make the form more centered
  maxWidth: "700px", // Limit the width for large screens
  margin: "0 auto",
});

export const authForm = style({
  minWidth: "30vw", // More compact for login forms
  maxWidth: "500px", // Limit max width for a clean design
  margin: "0 auto",
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh", // Center vertically in the viewport
  padding: vars.space["3x"],
  backgroundColor: "#f9f9f9", // Light background to match SpaceX
});

export const leadCard = style({
  background: "#fff", // White background for the card
  color: "#333", // Darker text color for readability
  padding: vars.space["4x"],
  borderRadius: "8px", // Slight rounding on edges
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", // Lighter shadow for a flat look
  textAlign: "center",
});

export const cardTitle = style({
  fontSize: "1.5rem", // Slightly smaller, clean title
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space["2x"],
  color: "#000", // Black title for better contrast
});
