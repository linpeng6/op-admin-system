import { combineReducers } from 'redux';
import menu from './menu';
import { RootState, RootAction } from '../interface';
export default combineReducers<RootState, RootAction>({
  menu,
});
