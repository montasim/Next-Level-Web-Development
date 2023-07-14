<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=580&height=40&lines=MISSION 1: BE A TYPESCRIPT TECHNOCRAT" alt="MISSION 1: BE A TYPESCRIPT TECHNOCRAT" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=308&height=21&lines=MODULE 5.5: BONUS MODULE 1" alt="MODULE 5.5: BONUS MODULE 1" />

****5-5 1: What is the module, different formats of module technique, import, and export****

The module is used to control the scope of the variable, function, class, etc. declaration in Typescript just like JavaScript.

By setting `"module": "commonjs"`, `"module": "ES6"`, `"module": "ES2015"` in the `tsconfig.js` file we can control our Typescript code compilation to Javascript versions.

<br/>

****5-5 2: Different types of Import and export statement****

- using alias
    - `import { *adder* as addTwo } from "./module";`
- Wildcard import
    - `import * as Methods from "./module";`
    - `*` means everything. Meaning importing everything from the file
    - usage - `Methods.myFunction()`
- `default` export
    - front another file, `export default avg;` then use it like,
      `import avg, { multiply } from "./module";`, call it `avg()`
- `default` export using object
    - `export default { adder, subtract, multiply, divide, avg };`
    - `import Jekono from "./module";`
    - `Jekono.adder(3, 4);`
- taking the programs to different files then `export default` and then using like this -

    ```typescript
    import addTwo from "./utils/adder"; // can name anything cause of default export
    import avg from "./utils/avg";
    import divide from "./utils/divide";
    import subtract from "./utils/subtract";
    ```

- re-export
    - When there are a lot of imports.
    - creating `utils` folder, creating the utility functions then creating `index.js` file and importing from there.

<br/>

****5-5 3: Know About utility Types****

[go to code]()

Utility types are used for manipulating an existing type/interface.

- `Pick`
    - creates a new type by picking a single or multiple properties `key` (string or union of strings) from another type.
    - opposite of `Omit`.
- `Omit`
    - creates a new type by omitting/removing single or multiple properties from another type.
    - opposite of `Pick`.
- `Partial`
    - creates a new type by making all the properties optional of an existing type.
    - opposite of `Required`.
- `Required`
    - creates a new type by making all the properties required of an existing type.
    - opposite of `Partial`.
- `Readonly`
    - creates a new type by making all the properties readonly of an existing type. Just like `readonly` access modifiers.
- `Record`
    - `Record` is a shortcut to defining an object type with a specific key type and value type.
    - Index signatures can’t be used with literal types

  so we use `Record` to do this

    ```typescript
    type MyObj = Record<"a" | "b" | "c", string>;
    ```


---

****5-5 4: How to use multiple interfaces as a type and create a model for a class****

[go to code]()