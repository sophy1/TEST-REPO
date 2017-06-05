'use strict';

function foo(options) {
    var options = options | {}; // BAD_BITWISE_OPERATOR alarm
}
