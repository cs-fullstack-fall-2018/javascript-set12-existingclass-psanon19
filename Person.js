class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {

    var john = new Person("John Jacob Jingleheimer Schmidt",99,434,130);
    var rump = new Person("Rumpelstiltskin",920187419741,55,80);

    john.bodyMassIndex();
    rump.bodyMassIndex();

    alert(john.name+" BMI is "+ john.bodyMassIndex());
    alert(rump.name+" BMI is "+ rump.bodyMassIndex());

    var personArray=[john,rump];
    personArray[0].printPerson();
    personArray[1].printPerson();

}

main();