import actionTypes from './actionTypes';
// change selectKey
export const changeSelectKey = (value: string) => ({
  type: actionTypes.UPDATE_SELECT_KEY,
  value,
});
