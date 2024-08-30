function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
    var arr = [1, 2, 3];
    if (x < 0) {
        arr[x] = 3;
    }
}

function CWE_563_2(url) { // UNUSED_VAR_ASSIGN
    var foo = url + "?query=deepscan";
    foo = url.replace(/\s/gi, "");
    console.log(foo);
}

    function CWE_398() { // IDENTICAL_BRANCHES
        if (x >= 0) {
            y = x;
        } else {
            y = x;
        }
    }

    function CWE_476() { // NULL_POINTER
        var obj;
        var y = obj.x;
        console.log(y);
    }

    function CWE_480() { // BAD_BITWISE_OPERATOR
        var obj = null;
        if (obj & obj.prop) {
            console.log(obj.prop);
        }
    }

    function CWE_480_481() { // BAD_ASSIGN_IN_CONDITION
        var x = -1;
        if (x = -1) console.log('Error!', x);
    }

    function CWE_482_665() { // UNUSED_EXPR
        this.foo;
    }

    function CWE_48() { // SWITCH_CASE_FALL_THROUGH
        var x;
        switch (x) {
        case '1': console.log('Do one thing');
        case '2': console.log('Do another thing');
        }
    }

    function CWE_561() { // UNREACHABLE_CODE
        return;

        var bar = 1;
        console.log(bar);
    }
