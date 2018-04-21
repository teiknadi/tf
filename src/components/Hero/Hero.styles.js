const styles = {
  cover: ({ scene }) => ({
    height: '100%',
    backgroundImage: `url(/images/heros/${scene}.jpg)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }),
  container: {
    position: 'relative',
    width: '914px',
    height: '100%',
    margin: '0 auto'
  },
  lane: {
    // display: 'flex',
    // alignItems: 'center',
    position: 'relative',
    float: 'left',
    width: '247px',
    height: '100%',
    borderLeft: '1px solid rgba(255, 255, 255, .1)'
  },
  firstLane: {
    marginLeft: '136px'
  },
  counter: {
    width: '400px',
    position: 'absolute',
    top: '327px',
    fontSize: '1em',
    color: '#d8d6d4',

    '& > div': {
      float: 'left',
      width: '44px',
      height: '1px',
      marginRight: '1px',
      marginTop: '5px',

      '& > div': {
        width: '100%',
        height: '1px',
        background: '#fff'
      }
    }
  },
  currentSlide: {
    float: 'left',
    marginRight: '10px'
  },
  numberOfSlides: {
    float: 'left',
    marginLeft: '10px'
  }
};

export default styles;
