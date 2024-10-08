import { style } from '@vanilla-extract/css';
import { vars } from '../styles/themes.css'; 

export const trendingContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: vars.space['5x'],
  backgroundColor: vars.colors.complementary,
  
});

export const heading = style({
  fontSize: vars.fontSizes["5x"],
  color: vars.colors.primary,
  textTransform: 'uppercase',
  marginBottom: vars.space['6x'],
  textAlign: 'center',
  fontFamily: vars.fonts.display,
  fontWeight: 'bold'
});

export const productGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: vars.space['4x'],
  width: '100%',
  maxWidth: '1200px',
});

export const productCard = style({
  backgroundColor: vars.colors.complementary,
  borderRadius: '1px',
  border: 'none',
  padding: vars.space['3x'],
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  

  ":hover": {
    border: `1px solid ${vars.colors.brand}`
  }
});

export const productImage = style({
  width: '100%',
  height: 'auto',
  marginBottom: vars.space['3x'],
  borderRadius: '10px',
});

export const productName = style({
  fontSize: vars.fontSizes['3x'],
  color: vars.colors.primary,
  marginBottom: vars.space['2x'],
  fontFamily: vars.fonts.brand
});

