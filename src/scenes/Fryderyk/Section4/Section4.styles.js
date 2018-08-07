import { defaultColumnWidth } from '../../../styles/constants';
import backgroundImagedUrl from './images/background-image.jpg';

const styles = {
  topContent: {
    marginLeft: `calc(3 * ${defaultColumnWidth})`
  },
  wrapper: {
    background: {
      image: `url(${backgroundImagedUrl})`,
      repeat: 'no-repeat',
      position: 'center 40%'
    }
  },
  images: {
    textAlign: 'center'
  }
};

export default styles;
