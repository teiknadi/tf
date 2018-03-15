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
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    float: 'left',
    width: '247px',
    height: '100%',
    borderLeft: '1px solid rgba(255, 255, 255, .1)'
  },
  firstLane: {
    marginLeft: '136px'
  }
};

export default styles;
