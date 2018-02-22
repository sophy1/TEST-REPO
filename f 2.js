var moduleInstance = new require('module').Module(); // CALL_REQUIRE_AS_CONSTRUCTOR alarm because 'new' operator is not applied for the constructor 'Module()'.

    let obj = {
        set name(n) {
            this.name = n; // GETTER_SETTER_RECURSION alarm because 'obj.name = "John"' causes an infinite call.
        },
        get name() {
            return this.name; // GETTER_SETTER_RECURSION alarm
        }
    }
    obj.name = "John";
