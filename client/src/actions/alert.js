import { SET_ALERT, REMOVE_ALERT} from './types';
import uuid from 'uuid';

export const setAlert = (msg, alertType) => dispacth => {
  const id = uuid.v4();
  // call set alert
  dispacth({
    type: SET_ALERT,
    payload: {msg, alertType, id}
  })

  // tambahkan set time
  setTimeout(() => dispacth({ type: REMOVE_ALERT, payload: id }), 5000);

};

