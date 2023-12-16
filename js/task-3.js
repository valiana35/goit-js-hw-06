'use strict';
class StringBuilder {
    #value;
    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        initialValue += str;
    }
    padStart(str) {
        initialValue = str + this.#value;
    }
    padBoth(str) {
        initialValue = str + this.#value + str;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); 
builder.padStart("^");
console.log(builder.getValue()); 
builder.padEnd("^");
console.log(builder.getValue()); 
builder.padBoth("=");
console.log(builder.getValue()); 