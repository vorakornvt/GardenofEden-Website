// ProductsList.css
import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const gridContainer = style({
  margin: `${vars.space['5x']} 0`,
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))", // Adjusted for more spacious grid
  gap: "0px",
  width: "90%",
  maxWidth: "1200px", // Limiting max width to center-align the content
  margin: "0 auto",
});
