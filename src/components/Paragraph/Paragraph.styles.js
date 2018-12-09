import crossImageUrl from '../../assets/images/cross.png';

const styles = {
  text: {
    textTransform: 'uppercase',
    fontFamily: 'DIN Pro Condensed',
    fontSize: '2.375em',
    fontWeight: 'bold',
    color: '#000',
    position: 'relative',
    width: '50%',

    '& span': {
      color: '#000'
    },

    '&:after': {
      content: '""',
      display: props => (props.hasHorizontalLine ? 'block' : 'none'),
      position: 'absolute',
      width: '50%',
      height: '7px',
      backgroundColor: '#fff',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)'
    },

    '&:before': {
      content: '""',
      display: props => (props.hasCross ? 'block' : 'none'),
      position: 'absolute',
      width: '15px',
      height: '15px',
      backgroundImage: `url(${crossImageUrl})`,
      top: '15px',
      left: '-50px',
    }
  }
};

export default styles;
