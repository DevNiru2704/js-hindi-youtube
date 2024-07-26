# JavaScript and Classes

## Does JavaScript Have Classes?
Yes, JavaScript does have classes. Classes in JavaScript were introduced in ECMAScript 6 (ES6) as a more straightforward and cleaner way to create and manage objects and inheritance. Although JavaScript has been a prototype-based language, the `class` syntax provides a more familiar and conventional way to work with object-oriented programming features.

## Here's a Basic Example of How to Define a Class in JavaScript:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('Nirmalya', 25);
person1.greet(); // Output: Hello, my name is Nirmalya and I am 25 years old.
```
In this example, the Person class has a constructor method, which initializes the object's properties (name and age). It also has a method called greet, which prints a greeting message. Instances of the class can be created using the new keyword.

Classes also support inheritance, allowing you to create subclasses that inherit properties and methods from a parent class. Here's a simple example:

```javascript
Copy code
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

const student1 = new Student('Nirmalya', 25, 'A');
student1.greet(); // Output: Hello, my name is Nirmalya and I am 25 years old.
student1.study(); // Output: Nirmalya is studying in grade A.
```
In this example, the Student class extends the Person class, inheriting its properties and methods. The super keyword is used to call the constructor of the parent class.

# Object Oriented Programming (OOP)

## Object
- ###  Collection of properties of methods
- ###  Promises,Date, - These were all objects

## Why use OOP?

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure and manage code. Here are some key reasons why OOP is commonly used:

### 1. Modularity
Encapsulation: OOP helps encapsulate data and behavior into objects. This means that the implementation details of an object are hidden from the outside world, which reduces complexity and improves maintainability.
Code Organization: Classes and objects help organize code into manageable sections, making it easier to understand and work on.
### 2. Reusability
Inheritance: OOP allows classes to inherit characteristics (methods and properties) from other classes. This promotes code reuse and reduces redundancy, as you can create a new class based on an existing class.
Composition: Objects can be composed of other objects, allowing you to build complex functionality from simpler components.
### 3. Maintainability
Modularity and Encapsulation: Encapsulation allows changes to be made in one part of the code without affecting other parts. This makes the codebase easier to maintain and debug.
Extensibility: OOP makes it easier to extend the functionality of existing code. You can add new features or modify existing ones by creating new classes or modifying existing ones.
### 4. Abstraction
Simplified Interfaces: OOP allows you to define abstract interfaces for classes, which helps in designing systems that are easier to understand and use. The implementation details are hidden, and only essential features are exposed.
### 5. Real-World Modeling
Representation of Real-World Entities: OOP is useful for modeling real-world entities and their interactions. Objects in a program can represent real-world entities with attributes and behaviors, which makes it easier to design systems that mirror real-world scenarios.
### 6. Improved Collaboration
Team Development: OOP promotes a clear structure where different team members can work on different classes or modules independently. This can enhance team productivity and collaboration.
### Example of OOP Concepts
Consider a simple example of a class representing a `Vehicle:`

```java
class Vehicle {
    private String brand;
    private int speed;

    public Vehicle(String brand) {
        this.brand = brand;
        this.speed = 0;
    }

    public void accelerate(int increment) {
        speed += increment;
    }

    public void brake(int decrement) {
        speed -= decrement;
    }

    public String getBrand() {
        return brand;
    }

    public int getSpeed() {
        return speed;
    }
}
```
And a subclass representing a `Car:`

```java
class Car extends Vehicle {
    private int numberOfDoors;

    public Car(String brand, int numberOfDoors) {
        super(brand);
        this.numberOfDoors = numberOfDoors;
    }

    public int getNumberOfDoors() {
        return numberOfDoors;
    }
}
```
### Summary
OOP offers a structured approach to software design and development, making code more modular, reusable, maintainable, and aligned with real-world concepts. It helps in managing complex systems and promotes best practices in software engineering.

## Parts of OOP
- ### Object Literals
- ### Constructor Functions
- ### Classes
- ### Instances (new, this)

## Four Pillars of OOP
- ### Abstraction
- ### Encapsulation
- ### Inheritence
- ### Polymorphism

## Their Definition

### 1. Abstraction
Definition: Abstraction is the process of hiding the complex implementation details and showing only the essential features of an object. It allows you to focus on what an object does rather than how it does it.

Example: In a banking application, a BankAccount class might provide methods like deposit() and withdraw(), while hiding the internal workings of how transactions are processed.

Benefits:

- Simplifies complex systems.
- Enhances code readability and maintainability.
- Provides a clear interface for interacting with objects.
### 2. Encapsulation
Definition: Encapsulation involves bundling the data (attributes) and methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of an object’s components and can prevent unintended interference and misuse.

Example: In the BankAccount class, you might use private variables for balance and provide public methods to interact with these variables, such as getBalance() and setBalance(), to ensure controlled access.

Benefits:

- Protects object integrity by preventing unauthorized access.
- Facilitates data hiding, which enhances security.
- Makes code easier to manage and refactor.
### 3. Inheritance
Definition: Inheritance is a mechanism where a new class (subclass or derived class) inherits attributes and methods from an existing class (superclass or base class). It promotes code reuse and establishes a natural hierarchy between classes.

Example: You might have a base class Vehicle, and a derived class Car that inherits from Vehicle. The Car class would inherit common features from Vehicle and can add or override features specific to cars.

Benefits:

- Encourages code reuse and reduces redundancy.
- Supports a hierarchical organization of classes.
- Allows for extending existing code without modifying it.
### 4. Polymorphism
Definition: Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. It provides a way to perform the same operation in different forms.

Types:

Compile-time Polymorphism (Method Overloading): Different methods with the same name but different parameters.
Runtime Polymorphism (Method Overriding): Subclasses provide specific implementations of methods that are defined in their parent class.
Example: Suppose you have a method draw() in a Shape class. Both Circle and Square classes can override draw() to provide their specific implementation of how they should be drawn.

Benefits:

- Provides flexibility and the ability to handle different data types through a uniform interface.
- Supports method overriding and operator overloading, making code more adaptable and extensible.
- Enhances the design of systems by allowing the same interface to be used for different underlying forms.
- These pillars collectively enhance the power and flexibility of OOP, making it a popular paradigm for designing and building complex software systems.