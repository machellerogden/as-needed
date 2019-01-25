# as-needed

> do things, as needed

## range

```js
for (const v of range(1, 5)) console.log(v);
1
2
3
4
5
```

## take

```js
for (const v of take(range(1, 100), 3)) console.log(v);
// output:
[ 1, 2, 3 ]
```

```js
console.log(take([ 1, 2, 3, 4, 5 ], 3).next().value);
// output:
[ 1, 2, 3 ]
```

## map

```js
for (const v of map([ 1, 2, 3 ], v => v + 10)) console.log(v);
// output:
11
12
13
```

## reduce

```js
for (const v of reduce([ 1, 2, 3 ], (a, b) => a + b)) console.log(v);
// output:
1
3
6
```

## filter

```js
for (const v of filter([ 1, 2, 3, 4, 5 ], v => v % 2)) console.log(v);
// output:
1
3
5
```

**Note:** `take`, `map`, `reduce`, and `filter` accept any [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) or array-like object.
