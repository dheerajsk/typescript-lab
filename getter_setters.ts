
class Example {

    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length >= 3) {
            this._name = newName;
        } else {
            console.log("Invalid name");
        }
    }
}

const example = new Example();
example.name = "John";
console.log(example.name);

const example2 = new Example();
example2.name = "Jo";
console.log(example2.name);

