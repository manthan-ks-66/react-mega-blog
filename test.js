class Hello {
  name;
  age;
  course;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.course = "BCA";
  }

  hello() {
    console.log("Hello", this.name);
    console.log("Your age is", this.age);
  }
}

// object provides the data here and constructor sets the data (technically constructor initialized the data)
const obj = new Hello("Manthan", 22);

console.log(obj);

/*

The object is what actually holds and processes the data,
but it does this with the help of the class, which provides the structure and behavior.

Class is just a blueprint that has methods and behaviour for the data

*/
