import Notification from '../notification/Notification';

import img from './error.gif';
import './errorMessage.scss';

const ErrorMessage = ({ errorMessage }) => (
  <div className='error'>
    <img
      className='error__img'
      src={img}
      alt='Error'
    />
    <Notification text={errorMessage} />
  </div>
);

export default ErrorMessage;