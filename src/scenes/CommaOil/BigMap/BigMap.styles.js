import background from './images/big-map.png';

const styles = {
  wrapper: {
    width: '669px',
    height: '355px',
    position: 'absolute',
    right: 0,
    top: '67%',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
  },

  tooltip: {
    position: 'absolute',
    top: '-100px',
    left: '80px',
  }
};

export default styles;
