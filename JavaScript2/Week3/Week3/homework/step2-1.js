/* eslint-disable no-console */
'use strict';

function foo(func) {
    // What to do here?
    return func();
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;