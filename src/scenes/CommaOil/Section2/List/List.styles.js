const styles = {
  heading: {
    width: '150px',
  },
  list: {
    listStyle: 'none',
    padding: '50px 0',
    margin: 0,

    '& li': {
      textTransform: 'uppercase',
      margin: '5px 0',
      fontSize: '0.7em',

      '&.active': {
        color: '#d56253'
      }
    },
  }
};

export default styles;
