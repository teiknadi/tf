import crossImageUrl from '../../assets/images/cross.png';

const styles = {
  text: {
    textTransform: 'uppercase',
    fontFamily: 'DIN Pro Condensed',
    fontSize: '2.375em',
    fontWeight: 'bold',
    color: '#000',
    position: 'relative',

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
