import { defaultColumnWidth } from '../../../styles/constants';

const styles = {
  wrapper: {
    position: 'relative',
  },
  inner: {
    position: 'relative',
    zIndex: 1,
  },
  top: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  bigImage: {
    boxShadow: '0px 0px 111px 0px rgba(0, 0, 0, 0.07)',
  },
  bigImageContainer: {
    width: '48%',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '0 14%',
  },
  topContent: {
    marginLeft: `calc(${defaultColumnWidth} * 3)`
  },
  bottomContent: {
    marginLeft: defaultColumnWidth
  },
  bigRectangle: {
    borderColor: '#295cd1',
    borderWidth: '11px',
    borderStyle: 'solid',
    position: 'absolute',
    width: '70%',
    height: '40%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
  },
};

export default styles;
