class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }

  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }

  sound(makeSound) {
    return `${this.name} makes the sound: ${makeSound}`;
  }

  move(moveType) {
    return `${this.name} moves by ${moveType}`;
  }
}

const dog = new Animal("Dog", 4);
console.log(dog.describe());
console.log(dog.sound("barking"));
console.log(dog.move("running"));

const cat = new Animal("Cat", 4);
console.log(cat.describe());
console.log(cat.sound("meowing"));
console.log(cat.move("prowling"));

const bird = new Animal("Bird", 2);
console.log(bird.describe());
console.log(bird.sound("chirping"));
console.log(bird.move("flying"));

const elephant = new Animal("Elephant", 4);
console.log(elephant.describe());
console.log(elephant.sound("trumpeting"));
console.log(elephant.move("walking"));

const snake = new Animal("Snake", 0);
console.log(snake.describe());
console.log(snake.sound("hissing"));
console.log(snake.move("slithering"));
