import { defaultColumnWidth } from '../../../styles/constants';

const styles = {
  wrapper: {
    // padding: '100px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    width: `calc(2 * ${defaultColumnWidth})`,
  },
  right: {
    width: `calc(2 * ${defaultColumnWidth})`,
  },
};

export default styles;
