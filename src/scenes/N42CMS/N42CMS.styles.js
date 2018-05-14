import { defaultColumnWidth } from '../../styles/constants';

const styles = {
  page: {
    paddingTop: '265px',
    backgroundColor: '#f3f3f3',
  },
  pageTitle: {
    marginLeft: defaultColumnWidth,
    marginBottom: '60px',
  },
  pageDescription: {
    marginBottom: '140px',
    marginLeft: defaultColumnWidth,
  },
  bigParagraph: {
    margin: `0 0 0 ${defaultColumnWidth}`,
    width: `calc(3 * ${defaultColumnWidth})`,
    padding: '100px 0',
  },
  section1: {
    marginLeft: defaultColumnWidth,
  },
  section2: {
    marginLeft: defaultColumnWidth,
  },
};

export default styles;
