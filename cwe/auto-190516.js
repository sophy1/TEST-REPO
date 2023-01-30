function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    }
}
function CWE_476() { // NULL_POINTER
    var obj= {};
    var y = obj.x;  // UNINITIALIZED_LOCAL_VAR
    console.log(y);
}


// This will show examples related with the Common Weakness Enumeration (CWE).
function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
    var arr = [1, 2, 3];
    if (x < 0) {
        arr[x] = 3;
    }
}
