const styles = {
  heroBackground: ({ scene }) => ({
    height: '100%',
    backgroundImage: `url(/images/heros/${scene}.jpg)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  })
};

export default styles;
