import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';


export const LayoutPD = style({

  width: '90%',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative', 
  marginTop: vars.space['4x'],
  gap: '10px',
  marginBottom: vars.space['4x'],
});

export const TextPD = style({
  textDecoration: 'none',
  textAlign: 'center',
  fontFamily: vars.fonts.body
})


export const CardDecor = style({
  border: 'none',
  color: vars.colors.textPrimary,
})
