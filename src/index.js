/**
 * Created by michaelalbonetti on 3/26/17.
 */
import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');

console.log(`I would pay ${courseValue} for this awesome course`);
