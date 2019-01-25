'use strict';

const test = require('tape');

const {
    range,
    take,
    map,
    reduce,
    filter
} = require('.');

test('#range', t => {
    t.plan(5);
    let i = 0;
    let expected = [ 1, 2, 3, 4, 5 ];
    for (const v of range(1, 5)) t.equal(v, expected[i++]);
});

test('#take', t => {
    t.plan(2);
    for (const v of take([ 1, 2, 3, 4 ], 2)) t.deepEqual(v, [ 1, 2 ]);
    for (const v of take([ 1, 2, 3, 4 ], 7)) t.deepEqual(v, [ 1, 2, 3, 4 ]);
});

test('#map', t => {
    t.plan(3);
    let i = 0;
    const expected = [ 11, 12, 13 ];
    const lazy = map([ 1, 2, 3 ], v => v + 10);
    for (const v of lazy) t.equal(v, expected[i++]);
});

test('#reduce', t => {
    t.plan(3);
    let i = 0;
    const expected = [ 1, 3, 6 ];
    const lazy = reduce([ 1, 2, 3 ], (a, b) => a + b);
    for (const v of lazy) t.equal(v, expected[i++]);
});

test('#filter', t => {
    t.plan(3);
    let i = 0;
    const expected = [ 1, 3, 5 ];
    const lazy = filter([ 1, 2, 3, 4, 5 ], v => v % 2);
    for (const v of lazy) t.equal(v, expected[i++]);
});
