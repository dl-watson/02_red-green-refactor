## getName function

create a function that returns the name property of an object.

```js
const spot = { name: 'spot', age: 5, weight: '20 lbs' }
getName(spot) // returns spot

const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
getName(character) // returns Aang
```

1. **Write a test**
1. create your function, use bracket notation to get the objects name property
1. pass tests and commit
1. refactor, use dot notation to get the objects name
1. tests stay green, commit
1. refactor, destructure to get the objects name
1. tests stay green, commit
1. refactor, destructure function parameters and return name
1. tests stay green, commit