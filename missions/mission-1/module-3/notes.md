<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=580&height=40&lines=MISSION 1: BE A TYPESCRIPT TECHNOCRAT" alt="MISSION 1: BE A TYPESCRIPT TECHNOCRAT" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=530&height=21&lines=MODULE 3: EXPLORE ADVANCE TYPES of TYPESCRIPT" alt="MODULE 3: EXPLORE ADVANCE TYPES of TYPESCRIPT" />

**3-1: Type Assertion**

[go to code]()

Telling the **type** to the compiler when it’s confused. This means I am asserting the type, not the compiler.

Alt syntax can not be used in JSX.

```typescript
let emni: any;

emni = "Next level dev";

(emni as string).length; // asserting type

// -------------------------
function kgToGram(param: string | number): string | number | undefined {
	// string conversion
  // number conversion
}

const resultToBeNumber = kgToGram(5) as number; // asserting type
const resultToBeString = kgToGram("5") as string; 

// -------------------------

type CustomErrorType = {
  message: string;
};

try {
  // blink
} catch (error) {
  console.log((error as CustomErrorType).message);
}

// -------------------------
// alternative syntax 
<string>emni.length;
const resultToBeNumber = <number>kgToGram(5)
```

<br/>

**3-2: Interface, Type vs Interface**

[go to code]()

- `interface`
    - Only used for Object data types / Non-primitive types. Function, Object, Array
    - Can be extended using `extends` keyword.
- `type`
    - used for primitive data types and Non-primitive data types.
    - can not be extended.
- In function, array using `type` alias makes it more readable instead of `interface`.
    - Thumb rule 👍🏻
        - When working with Object or class, use **interface**.
        - Otherwise, always use **type alias**.
- `index signature`
    - a label that describes what kind of values you can put into an object's properties.

<br/>

****3-3: Introduction of Generic in Type****

[go to code]()

A generic type is a type that can work with many different kinds of values. It's like a container that can hold anything you want, no matter what type it is.

Imagine you have a toy box that can hold different types of toys - like cars, dolls, and blocks. This toy box is like a generic type because it can hold many different kinds of toys.

<br/>

**3-4: Generic in Interface**

[go to code]()

It’s the same as type. But as its `interface`, it’s used for `object` and `class`


****3-5: Generic in Function****

[go to code]()

<br/>

**3-6: Constraints in Generics**

[go to code]()

Though generic allows us to pass any type of data, a constraint is some rule to tell certain types must be passed when passing data.

```typescript
interface IMandatory {
  name: string;
  age: number;
  salary: number;
}

const addMeToMyCrushMind1 = <T extends IMandatory>(myInfo: T) => {
  // code
};
```

When calling the `addMeToMyCrushMind1` function and passing the arguments, the properties in the `IMandatory` must be passed. This is a constraint, a rule.

<br/>

**3-7: Generic Constraints Using Key Of Part 1**

[go to code]()

`keyof` takes an object’s key’s and makes them a union.

```jsx
type PersonType = {
  name: string;
  age: number;
  address: string;
};

type NewType = "name" | "age" | "address";

type NewTypeKeyof = keyof PersonType;

// NewType and NewTypeKeyof are the same
```

```jsx
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
obj[key];
}

const result7 = getProperty({ name: "Mr. X", age: 100 }, "age");

// Y extends keyof X means Y = "name" | "age"
```

---

<br/>

****3-8: Asynchronous TypeScript****

[go to code]()

<br/>

****3-9: Conditional Types****

[go to code]()

- `extends`
    - The `extends` keyword in TypeScript is used to check whether one type can be assigned to another type. It works like an if-statement where you are asking whether a particular type `extends` another type.

A type, dependent on another type.

- When a  value from a union type equals `never`, then that specific value is removed from the union

---

<br/>

****3-10: Mapped Types****

[go to code]()

When we want to create a new type by **transforming an existing type**, we can use mapped types.