const getLeftPosition = (position) => {
  switch (position) {
    case 'left':
      return '20%';
    case 'middle':
      return '40%';
    case 'right':
      return '60%';
    default:
      return '60%';
  }
};

const styles = {
  wrapper: {
    position: 'relative',
    height: '36px',
  },
  separator: {
    position: 'absolute',
    width: '3px',
    height: '36px',
    top: 0,
    bottom: 0,
    left: props => getLeftPosition(props.position),
    backgroundColor: props => props.color,
  },
};

export default styles;
