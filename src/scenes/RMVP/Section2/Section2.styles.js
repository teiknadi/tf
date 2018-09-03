const styles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    width: '40%',
    position: 'relative',
  },
  right: {
    width: '40%'
  },
  leftTextBoxWrapper: {
    position: 'relative',
    zIndex: 1,
  },
  leftTextBox: {
    marginLeft: '50%',
  },
  greyBox: {
    backgroundColor: '#dcdcdc',
    width: '150%',
    height: '500px',
    position: 'absolute',
    left: '-50%',
    top: 0,
    zIndex: 0,
  },
  image: {
    width: '60%'
  },
  paragraph: {
    color: '#545454',
    marginLeft: '20%',
  }
};

export default styles;
