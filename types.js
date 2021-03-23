var TypeDemo = /** @class */ (function () {
    function TypeDemo() {
    }
    TypeDemo.prototype.print = function () {
        this.age = 20;
        console.log(this.age);
        this.name = "Xyz";
        console.log(this.name);
        this.isStudent = true;
        console.log(this.isStudent);
        this.mixed = 200;
        console.log(this.mixed);
        this.mixed = "Now it is a string";
        console.log(this.mixed);
        this.myType = { name: "Xyz", age: 20, address: "India" };
        console.log(this.myType);
    };
    return TypeDemo;
}());
var type = new TypeDemo();
type.print();
