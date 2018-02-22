var moduleInstance = new require('module').Module(); // CALL_REQUIRE_AS_CONSTRUCTOR alarm because 'new' operator is not applied for the constructor 'Module()'.

    let obj = {
        set name(n) {
            this._name = n;
        },
        get name() {
            return this._name;
        }
    }
    obj.name = "John";
