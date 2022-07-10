//keys.js file

import dev from './dev';
import prod from './prod';

const keys = __DEV__ ? dev : prod;

export default keys;
