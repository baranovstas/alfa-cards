import Notification from '../Notification/Notification';

import img from './error.gif';
import './errorMessage.scss';

const ErrorMessage = ({ errorMessage }) => (
<<<<<<< HEAD
  <div className={errorMessageStyles.wrapper}>
=======
  <div className='error'>
>>>>>>> parent of 7627202 (add css module in ErrorMessage)
    <img
      className='error__img'
      src={img}
      alt='Error'
    />
    <Notification text={errorMessage} />
  </div>
);

export default ErrorMessage;