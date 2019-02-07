import {getRandomRuleset} from './index.mjs';

for (let i = 0; i < 1000; i++) {
  console.log(getRandomRuleset(1, 5, false));  
}

