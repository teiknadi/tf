import { defaultColumnWidth, defaultContainerWidth } from '../../../styles/constants';

const styles = {
  wrapper: {
    display: 'flex',
  },
  leftColumn: {
    width: `calc(2 * ${defaultColumnWidth})`,
    marginRight: defaultColumnWidth,
  },
  rightColumn: {
    width: `calc(${defaultContainerWidth} - (3 * ${defaultColumnWidth}))`
  },
  textEditor: {
    marginTop: '30px',
  },
};

export default styles;
