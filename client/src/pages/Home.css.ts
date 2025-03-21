import { style } from '@vanilla-extract/css';
import HeroImg from '../assets/images2/Hero.png';
import { vars } from '../styles/themes.css'; 

export const HeroPic = style({
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '590px',
  width: '96%',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative', 
});


export const Overlay = style({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  height: '260px',
  padding: '20px',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)', 
 

  
});

export const TextOverlay = style({
  textAlign: 'center',
  fontFamily: vars.fonts.body,
  color: 'white',
  display:'flex',
  flexDirection: 'column',
  marginTop: '110px'
})

export const TextOverlayTwo = style({
 
  fontFamily: vars.fonts.brand,
  fontSize: '40px',


})

export const LgoOverlay= style({
 
width: '45px',
margin: 'auto',

})



export const logo = style({
  width: 80,
  gap: 10,
  padding: 5,

});
