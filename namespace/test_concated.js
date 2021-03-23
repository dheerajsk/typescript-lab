var Employee;
(function (Employee) {
    var Developer = /** @class */ (function () {
        function Developer() {
        }
        Developer.prototype.print = function () {
            console.log("Print method called");
            return "OK";
        };
        return Developer;
    }());
    Employee.Developer = Developer;
    var test = new Developer();
    test.print();
})(Employee || (Employee = {}));
