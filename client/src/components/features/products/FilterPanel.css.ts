// FilterPanel.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const filterPanel = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  padding: '2rem',
  maxWidth: '250px',
  borderRadius: '10px',
  
});

export const filterLabel = style({
  fontSize: '14px',
  fontFamily: vars.fonts.brand,
  fontWeight: '500',
  color: '#333',
  marginBottom: '0.5rem',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

export const filterSelect = style({
  padding: '10px',
  fontSize: '14px',
  fontFamily: vars.fonts.body,
  fontWeight: '400',
  backgroundColor: '#FFF',
  border: '1px solid #E0E0E0',
  borderRadius: '5px',
  color: '#333',
  cursor: 'pointer',
  appearance: 'none',
 
  transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  
  selectors: {
    '&:hover': {
      borderColor: '#B0B0B0',
    },
    '&:focus': {
      borderColor: '#5C5C5C',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    },
  },
});

export const filterSelectWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const checkboxWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem', // Spacing between checkbox and label
});

