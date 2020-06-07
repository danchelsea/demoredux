import { createStore } from 'redux'

import updateDevice from './device'

const store = createStore(updateDevice);
export default store;