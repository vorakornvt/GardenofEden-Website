import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const boxSetting = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
  padding: vars.space['4x'],
  backgroundColor: '#f9f9f9', // Similar light background
  color: vars.colors.textPrimary, // Use dark text color
});

export const boxTitle = style({
  fontWeight: vars.fontWeights.bolder,
  fontSize: '2.5rem', // Smaller, more focused title
  marginBottom: vars.space['2x'],
  color: '#000', // Dark color to match SpaceX's style
});

export const boxPara = style({
  fontWeight: vars.fontWeights.light,
  fontSize: '1.125rem', // Adjusted for readability
  marginBottom: vars.space['3x'],
  maxWidth: '400px',
  textAlign: 'center',
  color: '#444', // A softer black for paragraph text
});

export const boxButton = style({
  marginTop: vars.space['2x'],
});

export const linkStyle = style({
  display: 'inline-block',
  padding: `${vars.space['2x']} ${vars.space['4x']}`,
  backgroundColor: '#000', // Black background to match SpaceX buttons
  color: '#fff', // White text
  textDecoration: 'none',
  fontSize: '1rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: '#444', // Lighter black on hover
  },
});
