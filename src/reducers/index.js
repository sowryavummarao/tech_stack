import { combineReducers } from 'redux';
import LibraryReducer from './libraryReducer.js';
import SelectionReducer from './SelectionReducer.js';


export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
