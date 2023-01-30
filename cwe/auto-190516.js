function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}
// This will show examples related with the Common Weakness Enumeration (CWE).

function CWE_476() { // NULL_POINTER
    var obj;
    var y = obj.x;  // UNINITIALIZED_LOCAL_VAR
    console.log(y);
}
