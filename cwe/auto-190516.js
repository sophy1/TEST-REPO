function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    }
}
// This will show examples related with the Common Weakness Enumeration (CWE).
function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
    var arr = [1, 2, 3];
    if (x < 0) {
        arr[x] = 3;
    }
}
