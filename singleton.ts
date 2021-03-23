
class Singleton {

    private _value: number;
    private static instance: Singleton;

    private constructor() {
        this._value = 10;
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    getValue() {
        console.log(this._value);
    }

    incValue() {
        this._value = this._value + 1;
        console.log(this._value);
    }

    decValue() {
        this._value = this._value - 1;
        console.log(this._value);
    }
}

const firstInstance = Singleton.getInstance();
firstInstance.getValue();
firstInstance.incValue();
firstInstance.decValue();
const secondInstance = Singleton.getInstance();
secondInstance.getValue();
secondInstance.incValue();
secondInstance.decValue();