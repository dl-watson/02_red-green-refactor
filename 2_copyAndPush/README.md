## copyAndPush function

create a function that returns a new array with all the items in the original array
and a new item pushed to the end.

```js
const numbers = [1, 2, 3];
copyAndPush(numbers, 4) // return [1, 2, 3, 4];
```

1. **Write a test**
1. create your function, use `push` to add item to array and return array
1. green, commit
1. oops we were supposed to return a copy
1. add another test that makes sure that the original array is unchanged
1. update code, use spread to copy and append
1. green, commit