// CODE here for your Lambda Classes
class Person {
  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.location = info.location;
    this.gender = info.gender;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.` );
  }
}

class Instructor extends Person {
  constructor(info) {
    super(info);
    this.specialty = info.specialty;
    this.favLanguage = info.favLanguage;
    this.catchPhrase = info.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
}

class Student {
  constructor() {

  }
}

class ProjectManager {
  constructor() {

  }
}
