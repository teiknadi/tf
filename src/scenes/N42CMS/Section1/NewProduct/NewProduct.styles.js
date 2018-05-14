import backgroundUrl from './images/pattern-background.png';

const styles = {
  wrapper: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: '-170px',
    right: '-70px',
  },
  parallaxWrapper: {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundRepeat: 'no-repeat',
  },
  top: {
    boxShadow: '0px 20px 31px 0px rgba(0, 0, 0, 0.2)'
  },
  bottom: {
    boxShadow: '0px 20px 31px 0px rgba(0, 0, 0, 0.2)'
  },
};

export default styles;
