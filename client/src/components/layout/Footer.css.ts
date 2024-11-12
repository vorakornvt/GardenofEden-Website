import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css'; // Adjust the path as necessary

export const footerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  height: '120px',
  alignItems: 'center',
  marginTop: "15px",
  padding: '20px 40px',
  backgroundColor: vars.colors.primary, 
  borderTop: `0.5px solid ${vars.colors.textPrimary}`, 
});

export const BoxinsideFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const linksCol = style({
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
});

export const logoCol = style({
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
});

export const linkStyle = style({
  marginLeft: '10px',
  textDecoration: 'none',
  color: vars.colors.textPrimary, 
  fontFamily: vars.fonts.body, 
  fontSize: '14px',
});

export const logo = style({
  width: 'auto', 
  height: '20px', 
});
