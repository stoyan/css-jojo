Generate random CSS declarations

## How?

```js
import {getRandomRuleset} from 'css-jojo';

// generate 1000 1-line (1 declaration each) rules, 5 chars classnames, non-pretty
for (let i = 0; i < 1000; i++) {
  console.log(getRandomRuleset(1, 5, false));  
}
```

This results in:

```
.fjvdc {max-width: 10px}
.w21w8 {margin-bottom: 8px}
.qhe4f {outline-radius: 1px}
.rkgiq {font-style: oblique 45deg}
...
```

## Why?

You know, for testing.