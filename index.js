class Animal {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    return `${this.name} says`
  }
}

class Dog extends Animal {
  constructor(name, sex) {
    super(name, sex)
  }
  speak() {
    return `${super.speak()} woof!`;
  }
}

class Cat extends Animal {
  constructor(name, sex) {
    super(name, sex)
  }
  speak() {
    return `${super.speak()} meow!`;
  }
}

class Bird extends Animal {
  constructor(name, sex) {
    super(name, sex)
  }
  speak() {
    if (this.sex !== 'male') {
      debugger
      return `${super.speak()} squawk!`;
    } else {
      return `It's me! ${this.name}, the parrot!`
    }
  }
}

const bird = new Bird("Pablo", "male")
const bird2 = new Bird("Mable", "female")
debugger
bird.speak()
bird2.speak()
