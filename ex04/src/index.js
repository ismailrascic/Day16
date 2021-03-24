class Pets {
constructor(name, legs)
{
    this.name = name;
    this.legs = legs;
}

 walk() {
    var numberOfLegs;
    return  numberOfLegs = this.name + " is Walking on " + this.legs + " legs";
    
}
}

class Dog extends Pets {
  constructor(name, legs)
  {
super(name, legs) }

    bark()
    {
       var dogSay;
        return dogSay = this.name + " says WUF-WUf";
        
    }
}




let dog = new Dog( "Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());
module.exports = {Pet, Dog}