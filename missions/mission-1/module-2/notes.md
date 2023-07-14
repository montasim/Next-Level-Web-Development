<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=580&height=40&lines=MISSION 1: BE A TYPESCRIPT TECHNOCRAT" alt="MISSION 1: BE A TYPESCRIPT TECHNOCRAT" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=460&height=21&lines=Module 2: Explore Basic Types of TypeScript" alt="Module 2: Explore Basic Types of TypeScript" />

<hr/>

<br/>

### 2-1. Installation TypeScript, NVM & ts-node-dev

- [Node Package Manager](https://github.com/coreybutler/nvm-windows#readme) (NVM)
- `npm init -y`
- Node can not run TS files so `tsconfig.json` is generated with `tsc --init`.
- `npm i ts-node-dev`

    ```jsx
    "scripts": {
        "start": "ts-node-dev --respawn --transpile-only index.ts",
      },
    ```

- `tsconfig.json`
    - `"outDir": "./dist"` to store compiled JS.
    - `"rootDir": "./src"` to store TS.

<br/>

### 2-2. Primitive types in TypeScript

1. String 
2. Number 
3. Boolean 
4. Null 
5. Undefined

a.  TypeScript type declaration:
  - Explicit type declarations: When de declare data types
  - Implicit type declaration / Inferences: When TypeScript automatically declares data types

    ``` 
    let someVariable = undefined; // any type variable
    ```

<br/>

### 2-3. Array and Tuples in TypeScript

> Tuple: Special type of array that has key-value pair

Tuple is a special type that can store a list of different values of fixed size. It is like an array, but it can only have a certain number of values, and each value in the tuple can have a different data type

- `tuple`
    - special array
    - comes in pairs

<br/>

### 2-4. Object, Literal Types, and Optional types

- Custom Type / Literal Type: When we declare a type explicitly
- Literal Types
    - The type is directly written (hi, 123, false, etc.)
- Optional types
    - maybe or may not be present in the object

    ```typescript
    const user: {
      company: "Programming Hero"; // Literal Type
      name: string;
      age: number;
      isMarried: boolean;
      likes?: string; // Optional type
    } = {
      company: "Programming Hero",
      name: "Montu mia",
      age: 52,
      isMarried: true,
    };
    ```
- `readonly`
    - can not be changed

    ```typescript
    const user: {
    readonly company: "Programming Hero";
    } = {
      company: "Programming Hero",
    };
    ```

<br/>

### 2-5. Functions in Typescript

- `"noImplicitAny": false`
    - stops error on `type: any` parameter declaration in functions
- `void`
    - no return

<br/>

### 2-6. Spread, Rest, Default Parameters, and Destructuring

- Can not use the default value in the first parameter
Name alias
- Default param
    - Use it on the last parameter.
- Rest parameter `...`
    - takes values and converts them into an array. The opposite of the spread operator.
    - gives flexibility when sending arguments.

    ```typescript
    function addNums (...nums) {
    // add
    }
    
    addNums (1, 2, 3) // [1, 2, 3]
    ```

<br/>

### 2-7. Type alias and optional types

- Type alias
    - used for declaring a type once and then using it for multiple variables/objects/functions etc.

<br/>

### 2-8. Union, Intersection and Enum Types

- Enum is not recommended because of its extra process
- Try to use union type more

    ```typescript
    type NoobDeveloper = {
      name: string;
    };
    
    // type JuniorDeveloper = {
    //   name: string;
    //   expertise: string;
    //   experience: number;
    // };
    
    // intersection 
    // lets us use alternative of the commented "type JuniorDeveloper"
    type JuniorDeveloper = NoobDeveloper & {
      expertise: string;
      experience: number;
    };
    
    // Union
    const newDeveloper: NoobDeveloper | JuniorDeveloper = {
      name: "Moznu Ali",
      expertise: "Javascript",
      experience: 6,
    };
    
    // intersection
    type NextLevelDeveloper = JuniorDeveloper & {
      leadershipExperience: number;
      level: "junior" | "mid" | "senior";
    };
    
    // intersection
    const developer: NextLevelDeveloper = {
      name: "Super vai",
      expertise: "Typescript",
      experience: 2,
      leadershipExperience: 1,
      level: "mid",
    };
    ```

- enum

    ```typescript
    enum Level {
      junior = "junior",
      mid = "mid",
      senior = "senior",
    }
    
    type NextLevelDeveloper = JuniorDeveloper & {
      leadershipExperience: number;
      level: Level; // using enum type
    };
    
    const developer: NextLevelDeveloper = {
      name: "Super vai",
      expertise: "Typescript",
      experience: 2,
      leadershipExperience: 1,
      level: Level.mid, // accessing enum values
    };
    ```

    - Note: using `enum` values is not the best practice and is not recommended by Typescript.

<br/>

### 2-9. Null, Unknown and Never Types

- `null`
    - Let’s say a user clicked submit with empty value instead of string. then TS will give error. In that case, we will use `null`.
- `unknown`
    - When you don’t know anything about the data type
- `never`
    - When a function never throws errors.

    ```typescript
    function throwError(message: string): never {
      throw new Error(message);
    }
    
    throwError("Abort abort");
    ```

<br/>

### 2-10. Ternary Operator , Nullish Coeslancing Operator, Module Summary

- Ternary Operator:
- Nullish Coeslancing Operator: Set default values based on null and undefined. Works only with null and undefined data types
    - checks if `null` or `undefined`
    ```typescript
    const isAuthenticatedUser = null;
    const userName = isAuthenticatedUser ?? "Guest"; // Guest
    
    const isAuthenticatedUser = "demo";
    const userName = isAuthenticatedUser ?? "Guest"; // demo
    ```