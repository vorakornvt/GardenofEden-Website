import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const productAdd = style({
  display: "flex",
  flexDirection: "row",
  margin: 'auto',
  width: "75%",
  fontFamily: vars.fonts.body,
  color: vars.colors.band,
  gap: vars.space["1x"],
  textAlign: 'start',
  padding: "15px",
  

})

export const FontBrand = style({
  fontFamily: vars.fonts.brand,
  color: 'black',
  })
  
  
  export const FontBody = style({
    fontFamily: vars.fonts.body,
    color: vars.colors.band,
    })