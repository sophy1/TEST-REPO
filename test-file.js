'use strict';

function foo(options) {
    var options = options | {}; // BAD_BITWISE_OPERATOR alarm


    if (typeof a === 'Array') {
        console.log('It\'s an array!');
    }
}
