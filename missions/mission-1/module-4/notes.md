<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=580&height=40&lines=MISSION 1: BE A TYPESCRIPT TECHNOCRAT" alt="MISSION 1: BE A TYPESCRIPT TECHNOCRAT" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=315&height=21&lines=MODULE 4: OOP IN TYPESCRIPT" alt="MODULE 4: OOP IN TYPESCRIPT" />

<hr/>

<br/>

****4-1: Introduction To Object Oriented Programming****

OOP is writing code in the pattern of an `object`.

- When programming, thinking that everything is an `object`.
- OOP’s fundamental block is `object` or `class`.

<br/>

****4-2: How to Create Class, Object, Parameter Properties****

[go to code]()

- When we are creating a function in a class, that function is called a **method.**
- Best Practice
    - When creating a `class` in TypeScript, the convention is, the types of properties would be defined first.
- **Parameter Properties** are used to do **defining**, **initialization,** and **assignment** together in a single step.
    - With parameter properties, you can define the constructor parameters along with the class properties in one place, rather than **defining the parameters, initializing them, and then assigning them to the class properties** separately. This makes the code more concise and easier to read.

    The **entire constructor function definition** is the "initialization" part, as it defines the initial values of the properties of the class.
    
    When you create a new instance of a class by calling the constructor with arguments, you are initializing the object’s properties with parameters. Here, we are initializing them.
    
    ```typescript
    const person1 = new Person("Alice", 30, true);
    ```
    
    by using parameter properties the three steps can be done in one step. 
    
    ```typescript
    class Person {
    
      constructor(public name: string, public age: number, public isActive: boolean) {}
    
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    }
    
    const person1 = new Person("Alice", 30, true);
    person1.greet();   
    ```

<br/>

****4-3: Inheritance****

[post](https://www.linkedin.com/posts/thakur-saad_javascript-oop-inheritance-activity-7031981093293608961-FTeq?utm_source=share&utm_medium=member_desktop)

[go to code]()

- `super()`
    - A function used to access properties of the parent class

<br/>

****4-4: Type Guard / Type Narrowing****

[go to code]()

Type guard can tell if something is a number, a string, a specific class, or something else.

Allows us to check the type of a variable at runtime to ensure that it matches the expected type.

- `typeof` guard.
- `in` guard
    - used for `object`.
- `instanceof` guard.
    - used for `class` and `object` both.

<br/>

****4-5: Access Modifiers: Public, Private, Protected****

[go to code]()

Access modifiers are used to modify access to properties/methods of a class. Meaning which property/method we can access.

- `readonly`
- `public`
- `private`
    - restricts access to that specific property in the class
    - convention is, using `_` in variables. `private _balance = 0`
- `protected`
    - restricts access like `private` but the code editor suggests that property when trying to access the properties/methods of the class from its subclass. So, it can create confusion.

Normally we will use readonly and private and use public for parameter properties. protected is used for special cases, we will not use it normally.

<br/>

****4-6: Getters and Setters in Typescript****

[go to code]()

Getter and setter are functions used to get and set properties of a class. By doing so, properties can be get or set without calling methods.

- getter: `get` keyword
- setter: `set` keyword

<br/>

****4-7: Static in Class****

[go to code]()

In TypeScript, a static class is a sealed class that cannot be instantiated.

Static property or method is one that belongs to the class itself, rather than to an instance of the class. It means that you can access the property or method directly from the class without creating an object of the class.

<br/>

****4-8: Polymorphism****

[post](https://www.linkedin.com/posts/thakur-saad_%3F%3F%3F%3F%3F%3F-%3F%3F%3F%3F%3F%3F%3F%3F-%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F-activity-7032604374765821953-3uCi?utm_source=share&utm_medium=member_desktop)

[go to code]()

Polymorphism is a fancy word in programming that describes **the ability of objects to have different forms and behaviors**. In other words, even though objects may share the same name or have a common trait, they can behave differently based on their specific implementation or use.

For example, let's say you have a pet dog and a cat. Even though they are different pets, they can both be treated like "animals" because they share similar characteristics, like having legs and making sounds. However, even though they are both animals, they behave differently - the dog barks, and the cat meows.

<br/>

****4-9: Abstraction****

[post](https://www.linkedin.com/posts/thakur-saad_oop-abstraction-activity-7031623682670153728-wrQi?utm_source=share&utm_medium=member_desktop)

[go to code]()

Abstraction is the concept of hiding unnecessary details of an object or process and exposing only the essential characteristics. This makes it easier to understand and work with the object or process and reduces complexity.

For example, let's say you want to make a program that models a car. You might define the car's attributes as its `make`, `model`, `year`, `color`, and `engineSize`. You might also define its methods as `start()`, `stop()`, `accelerate()`, and `brake()`. These are the essential characteristics of a car, and they're what you need to work with to make the program function.

However, there are a lot of other details about a car that isn't relevant to the program you're making. For example, you don't need to know how the engine works in order to make the car go - you just need to know how to use the methods you defined. By abstracting these unnecessary details, you can make the program simpler and easier to work with.

- **abstract interface**
    - `class` can have an interface just like objects. `implements` keyword is needed to use that interface. Unlike objects, in a class, more properties/methods can be created than the ones present in the interface. But the properties/methods in the interface must be declared.
- **abstract class**
    - `abstract` keyword is needed.
    - can’t create an instance from an abstract class.
    - we have to `extend` it to use an abstract class

**Tips**: With class abstraction, we can understand the shape of the child classes derived from the parent class just by taking a look. There is no logic in the abstract methods of the abstract class.

<br/>

****4-10: Encapsulation and module Summary****

[post](https://www.linkedin.com/posts/thakur-saad_oop-encapsulation-activity-7032336763230593024-kh4u?utm_source=share&utm_medium=member_desktop)

[watch the video](https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-4-10-encapsulation-and-module-summary)

Encapsulation is hiding the internal details of an object and only exposing a limited interface for interacting with it. This helps to ensure that the object is used correctly and reduces the risk of unexpected behavior or bugs.

In encapsulation, an object's state (its data) is stored in private variables or attributes, which can only be accessed or modified through public methods (also known as getters and setters). This means that the internal details of the object are hidden from the outside world, and can only be changed in a controlled way.

In other words, it’s just like using **access modifier** and stopping the properties of a class from changing directly. We can only change an encapsulated or `private` property of a class by using a method on that class.

