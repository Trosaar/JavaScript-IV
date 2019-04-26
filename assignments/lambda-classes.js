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

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(info) {
    super(info);
    this.previousBackground = info.previousBackground;
    this.className = info.className;
    this.favSubjects = info.favSubjects;
  }

  listsSubjects() {
    console.log(this.favSubjects);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}.`);
  }
}

class ProjectManager extends Instructor {
  constructor(info) {
    super(info);
    this.gradClassName = info.gradClassName;
    this.favInstructor = info.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

/* person
  this.name = info.name;
  this.age = info.age;
  this.location = info.location;
  this.gender = info.gender;
*/

/* Instructor extends Person
  this.specialty = info.specialty;
  this.favLanguage = info.favLanguage;
  this.catchPhrase = info.catchPhrase;
*/

const danTheMan = new Instructor({
  name: "Dan Frehner",
  age: 9001,
  location: "Cali?",
  gender: "male",
  specialty: "HTML and CSS",
  favLanguage: "JavaScript",
  catchPhrase: "DodgerBlue"
});

const keiran = new Instructor({
  name: "keiran Kozlowski",
  age: 5,
  location: "his room",
  gender: "male",
  specialty: "Memes",
  favLanguage: "JavaScript",
  catchPhrase: "this is a hotdog"
});

/* Student extends Person
  this.previousBackground = info.previousBackground;
  this.className = info.className;
  this.favSubjects = info.favSubjects;
*/

const aaron = new Student({
  name: "Aaron Troska",
  age: 25,
  location: "Minnesota",
  gender: "male",
  previousBackground: "International Business",
  className: "WebPT6",
  favSubjects: "all subjects. Learning is great."
});

const justin = new Student({
  name: "Justin Landry",
  age: 8999,
  location: "somewhere over the rainbow",
  gender: "male",
  previousBackground: "not sure",
  className: "WebPT6",
  favSubjects: ['Html', 'CSS', 'JavaScript'],
});

/* ProjectManager extends Instructor
  this.gradClassName = info.gradClassName;
  this.favInstructor = info.favInstructor;
*/

const abdul = new ProjectManager({
  name: "Abdul Ahmad",
  age: 10,
  location: "coffee shop",
  gender: "male",
  specialty: "losing power",
  favLanguage: "React",
  catchPhrase: "How are you today?",
  gradClassName: "FSW16",
  favInstructor: "no idea",
});

const ari = new ProjectManager({
  name: "Ari Mercado",
  age: 15,
  location: "woods",
  gender: "male",
  specialty: "something",
  favLanguage: "Less",
  catchPhrase: "is everyone here?",
  gradClassName: "Labs 10",
  favInstructor: "no clue",
});

// anyone.speak()
// inst.demo(subject)
// inst.grade(student, subject)
// student.listsSubjects
// student.PRAssignment(subject)
// student.sprintChallenge(subject)
// pm.standUp(channel)
// pm.debugsCode(student, subject)

abdul.speak();
danTheMan.demo("Less");
keiran.grade(aaron, "HTML");
justin.listsSubjects();
aaron.PRAssignment("JavaScript");
aaron.sprintChallenge("React");
abdul.standUp("our channel");
ari.debugsCode(justin, "prototypes");
