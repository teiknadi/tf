const defaultPadding = 1;

const styles = {
  wrapper: {
    display: 'flex',
  },
  columnItem: {
    color: props => props.color,
    width: props => `calc(${props.width} - ${defaultPadding}%)`,
    paddingRight: `${defaultPadding}%`,
    lineHeight: '1.8',
    margin: 0,
  },
};

export default styles;
