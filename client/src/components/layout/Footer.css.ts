import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';


export const footer = style({
  color: vars.colors.complementary,
  backgroundColor: vars.colors.primary,
  padding: vars.space["2x"],
  textAlign: "center",
  fontFamily: vars.fonts.brand,
  fontSize: vars.fontSizes["2x"],
  borderTop: `0.5px solid ${vars.colors.brandDark}`,
})

export const logo = style({
  width: 60,
  margin: 'auto',
  gap: 10,
  padding: 5,

});

