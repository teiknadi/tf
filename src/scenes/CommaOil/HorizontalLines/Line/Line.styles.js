const styles = {
  bar: {
    position: 'absolute',
    height: '15px',
    width: props => props.width,
    backgroundColor: ({ color }) => color,
    left: ({ position }) => (position === 'left' ? 0 : 'auto'),
    right: ({ position }) => (position === 'right' ? 0 : 'auto'),
    top: props => props.top,
  }
};

export default styles;
