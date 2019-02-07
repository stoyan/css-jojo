const stuffs = `background: red | blue | green | orange | purple | yellow
border-color: red | blue | green | orange | purple | yellow
border-radius: 1px | 3px | 6px
border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
border-width: thin | medium | thick | 1px | 2px | 3px
color: red | blue | green | orange | purple | yellow
cursor: none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing
direction: ltr | rtl
display: block | inline | run-in | flow | flow-root | table | flex | grid | ruby | inline-block | inline-list-item | inline-table | inline-flex | inline-grid
font-size: xx-small | x-small | small | medium | large | x-large | xx-large | 10px | 14 px | 18px | 20px | 22px
font-style: normal | italic | oblique 45deg | oblique 5deg | oblique 22deg
font-variant: small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps | normal | none
font-weight: normal | bold | bolder | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
letter-spacing: 1em | 2em | 2px | 6px
line-height: 2 | 1.5 | 1.38 | 16px
list-style-type: disc | circle | square | decimal | georgian
margin-bottom: 1px | 2px | 3px | 4px | 8px | 12px
margin-left: 1px | 2px | 3px | 4px | 8px | 12px
margin-right: 1px | 2px | 3px | 4px | 8px | 12px
margin-top: 1px | 2px | 3px | 4px | 8px | 12px
max-height: 10px | 14px | 30px | 60px
max-width: 10px | 14px | 30px | 60px
opacity: 0 | 1 | 0.33 | 0.5
outline-color: red | blue | green | orange | purple | yellow
outline-radius: 1px | 3px | 6px
outline-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
outline-width: 1px | 2px | 3px | 4px | 8px | 12px
overflow-x: visible | hidden | clip | scroll | auto | none
overflow-y: visible | hidden | clip | scroll | auto | none
padding-bottom: 1px | 2px | 3px | 4px | 8px | 12px
padding-left: 1px | 2px | 3px | 4px | 8px | 12px
padding-right: 1px | 2px | 3px | 4px | 8px | 12px
padding-top: 1px | 2px | 3px | 4px | 8px | 12px
position: static | relative | absolute | sticky | fixed
text-align: start | end | left | right | center | justify
text-overflow: clip | ellipsis
visibility: visible | hidden | collapse
white-space: normal | pre | nowrap | pre-wrap | pre-line
word-wrap: normal | break-word | anywhere 
z-index: 1 | 2 | 3 | 4 | 5`.split('\n');

const length = stuffs.length;

const letters = 'abcdefghijklmnopqrstuvwxyz';

function getRandomDeclaration() {
  const rand = stuffs[Math.floor(Math.random() * length)].split(':');
  const values = rand[1].split('|');
  const value = values[Math.floor(Math.random() * values.length)].trim();
  return `${rand[0]}: ${value}`;
}

function getRandomRuleset(numdeclarations = 5, classlength = 5, pretty = true) {
  const classname =
    letters[Math.floor(Math.random() * letters.length)] +
    Math.random()
      .toString(36)
      .substr(2, classlength - 1);
  const decl = [];
  for (let i = 0; i < numdeclarations; i++) {
    decl.push(getRandomDeclaration());
  }
  if (!pretty) {
    return `.${classname} {${decl.join('; ')}}`;
  }
  return `.${classname} {\n  ${decl.join(';\n  ')};\n}`;
}

export {getRandomDeclaration, getRandomRuleset};