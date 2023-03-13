import { legacy_createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { contactReducer } from './contactReducer';

export const store = legacy_createStore(contactReducer,composeWithDevTools())