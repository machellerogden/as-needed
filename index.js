'use strict';

module.exports = {
    range,
    take,
    map,
    filter,
    reduce
};

const cast = it => (it.next) ? it : it[Symbol.iterator]();

function* range(a, b) {
    while (a <= b) yield a++;
}

function* take(it = [], n) {
    it = cast(it);
    let i = 0;
    let acc = [];
    while (i++ < n) {
        const e = it.next();
        if (e.done) break;
        acc.push(e.value);
    }
    yield acc;
}

function* map(it = [], fn) {
    for (const v of cast(it)) yield fn(v);
}

function* reduce(it, fn, acc) {
    it = cast(it);
    let f = it.next();
    if (f.done) return;
    acc = acc == null ? f.value : acc;
    yield acc;
    for (const v of it) {
        acc = fn(acc, v);
        yield acc;
    }
}

function* filter(it, fn) {
    for (const v of cast(it)) if (fn(v)) yield v;
}
