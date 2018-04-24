const styles = {
  lines: {
    position: 'fixed',
    width: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    zIndex: 0,
  },
  line: {
    position: 'absolute',
    width: '1px',
    backgroundColor: props => props.color,
    height: '100%',
  },
  pageWrapper: {
    position: 'relative',
    zIndex: 1,
  },
};

export default styles;
