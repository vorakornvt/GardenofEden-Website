import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

// Style for the Hamburger Button
export const HamBar = style({
  border: 'none',
  color: vars.colors.band,
  textDecoration: 'none',
  ":hover": {
    border: 'none',
    backgroundColor: vars.colors.primary,
    color: vars.colors.textPrimary
  }
});

export const ModalBody = style({
  display: 'flex',
  backgroundColor: 'white',
  borderRadius: '20px',
  gap: '1rem',
  padding: '2rem',
});

// Style for Hamburger Button Text (like labels or headings)
export const HamBarText = style({
  fontFamily: vars.fonts.body,
  marginTop: vars.space['4x'],
  display: 'flex',
  flexDirection: 'column',
  font: vars.fontSizes['2x'],
  fontSize: vars.fontSizes['3x']
});

// OffCanvas width adjustment
export const OffCanvas = style({
  width: '200px', // Adjust as needed
});

export const Avatar = style({
  textAlign: 'center',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Centers the avatar and text horizontally
});
// Avatar Circle styling for the user's initials
export const AvatarCircle = style({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: vars.colors.primary, 
  color: vars.colors.textPrimary,
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
  fontWeight: 'light',
  fontFamily: vars.fonts.brand,
  border: `solid 1px ${vars.colors.textPrimary}`
});

export const WelcomeText = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '5px',
});

export const UserEmail = style({
  fontSize: '14px',
  color: vars.colors.band, // Assuming textSecondary is defined in your theme
});
