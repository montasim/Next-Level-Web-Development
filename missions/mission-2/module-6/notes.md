<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=580&height=40&lines=MISSION 1: BE A TYPESCRIPT TECHNOCRAT" alt="MISSION 1: BE A TYPESCRIPT TECHNOCRAT" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=374&height=21&lines=MODULE 6: BE A MONGOOSE MASTER" alt="MODULE 6: BE A MONGOOSE MASTER" />

<hr/>

<br/>

****6-1: Introduction to Mongoose****

Object Data Modeling(ODM) library for MongoDB. It is used for storing data in MongoDB in a structured and developer-friendly way efficiently.

overview -

- It provides a higher-level abstraction for interacting with MongoDB, making it easier to work with data.
- Schemas, models, and relationships can be defined for MongoDB documents.

key features -

- Schema definition
- Model creating
- Data validation
- Querying
- Middleware support
- Population

$$
MongoDB + ODM + ExtraFeatures = Mongoose
$$

How Mongoose works with Typescript -

$$
Interface → Schema → Model → DatabaseQuery
$$

<br/>

****6-2: Install express, typescript, mongoose, ts-node-dev****

Steps to installing MongoDB -

1. press `win` key
2. type env, go to → “Edit the system environment variables”
3. This will open a new window → “System properties”
4. under the “Advanced” tab click “Environment variables”.
5. This will open a new window → “Environment variables”.
6. Under “User variable for [username]” click on “Path” and after that click on “Edit”
7. This will open a new window “Edit environment variable”
8. Click on the “New” button. Which will open a new line on the list.


1. Now paste the bin directory, which should look like this,
   `C:\Program Files\MongoDB\Server\6.0\bin`
2. make sure you ended the path with a `\` at the end, like this,
   `C:\Program Files\MongoDB\Server\6.0\bin\`
3. You are almost done. Press “OK” → “OK” → “OK”

Hurray! 🎉 The setup is finished. Now you can type `mongos --version` or `mongod --version` on your terminal and check your MongoDB. If it shows something like this,

```jsx
db version v6.0.5
Build Info: {
    "version": "6.0.5",
    "gitVersion": "c9a99c120371d4d4c52cbb15dac34a36ce8d3b1d",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```

It means everything is OK.

MongoDB compass local connection string - `mongodb://localhost:27017`

- setting up the server
    - `npm i typescript ts-node-dev @types/express @types/cors --save-dev` (Dev dependency)
    - `npm i express mongoose cors` (dependency)

  

<br/>

****6-3: How to organize your code a little more. Install and implement types.****

types -

- `app: *Application*`
- *`req*: *Request*`
- *`res*: *Response*`
- *`next*: *NextFunction*`

<br/>

****6-4: How To relate Interface and schema****

You have to be responsible for checking if the `interface` matches with the `schema`. Cause TS will not give you an error if you leave any field.

<br/>

****6-5: Create a Model using Interface, Schema, and Insert Data****

creating a model and Inserting it on save.

<br/>

****6-6: How to organize your structure, MVC vs Modular****

MVC

moduler

<br/>

****6-7: More Refactoring, Test API to insert data****

$$
Route → controller → service
$$

<br/>

****6-8: Create and Test Post Route, Refactor Code****

<br/>

****6-9: Find, FindOne, Field Filtering****

- Field Filtering

```javascript
User.findOne({ id: payload }, { _id: 0, name: 1 });
```

returns the object with only `name` property.

<br/>

****6-10: What are instance methods, built custom instance method****

- Instance method or build-in instance method
    - methods of instance.

      > If we create an instance from a `class` and that instance has a method attached to it, it’s called instance methods
      >
        ```javascript
        export const createUserToDB = async (payload: IUser): Promise<IUser> => {
          const user = new User(payload); // User is a class. user is an instance
          await user.save();              // user.save() is a method of user instance. So save() is an instance method
          return user;
        };
        
        // save() is a method of Mongoose. So save() is a build in an instance method.
        ```

- Custom instance methods

  Instance methods made by the developer.

  How to create a custom instance method -

    1. Create an **interface** for the method. [go to code]()
    2. Create a new **Model type** that knows about the interface. [go to code]()
    3. and add the method to the **schema**. [go to code]()
    4. Now it can be accessed if you create an Instance.  [go to code]()

Now, the instance methods can only be accessed after creating an instance. Not before. Here come **static methods** so we can use them without creating an instance.

<br/>

****6-11: What is statics, built custom static method****

- Static methods -
    - The methods that are attached to the class. We can call these methods without creating an instance. By using class directly.
      Just like OOP static methods concept.  [go to notes]()