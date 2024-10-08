import { style } from "@vanilla-extract/css";
import { vars } from '../../styles/themes.css';

export const app = style({
  fontFamily: vars.fonts.brand,
  backgroundColor: vars.colors.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
})

export const appContent = style({
 
  flex: 1
})