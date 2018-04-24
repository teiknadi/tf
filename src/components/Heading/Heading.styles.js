const styles = {
  title: {
    textTransform: 'uppercase',
    fontFamily: 'DIN Pro Condensed',
    fontSize: props => props.size,
    margin: 0,
    lineHeight: '38px',
    paddingBottom: props => (props.underline ? '30px' : 0),
    position: 'relative',
    color: props => props.color,

    '&:after': {
      content: '""',
      display: props => (props.underline ? 'block' : 'none'),
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '6px',
      width: '64px',
      backgroundColor: props => props.color,
    }
  },
};

export default styles;
