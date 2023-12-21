// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods

// Object 1
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Object 2
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

// Object 3
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

// Object 4
const fruit = {
  type: "Apple",
  color: "Red",
  quantity: 5,
};

// Object 5
const laptop = {
  brand: "Dell",
  model: "XPS 13",
  year: 2023,
};

// Call the function with different objects
objectMethods(person);
objectMethods(car);
objectMethods(book);
objectMethods(fruit);
objectMethods(laptop);
