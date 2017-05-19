class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static isPerson(person){
        return person instanceof this;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

export default Person;


/*
    If we were using var, let, or const, the export statement must be separate:

    const Person = function(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }

    export default Person;
*/