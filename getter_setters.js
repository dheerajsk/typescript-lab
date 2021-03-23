var Example = /** @class */ (function () {
    function Example() {
    }
    Object.defineProperty(Example.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.length >= 3) {
                this._name = newName;
            }
            else {
                console.log("Invalid name");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Example;
}());
var example = new Example();
example.name = "John";
console.log(example.name);
var example2 = new Example();
example2.name = "Jo";
console.log(example2.name);
