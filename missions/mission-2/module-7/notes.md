<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=580&height=40&lines=MISSION 1: BE A TYPESCRIPT TECHNOCRAT" alt="MISSION 1: BE A TYPESCRIPT TECHNOCRAT" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=484&height=21&lines=MODULE 7: EXPLORE MONGOOSE MORE QUERIES" alt="MODULE 7: EXPLORE MONGOOSE MORE QUERIES" />

<hr/>

<br/>

****7-1: Overview Of the previous Module, Install Studio 3T, No SQL Booster****

[Mongoose practice json data](./practice-data.json)

All methods of MongoDB work on Mongoose except `insert`, `insertMany`.

Because Mongoose validates the data through schema before saving it on the database. But `insert`, `insertMany` is used to save any kind of data in the database.

- `show database` → shows all databases in the compass
- `use practice-mongoose` → switches to database
- `db.practice.find()`

To increase the UX of the compass we can use [studio 3t](https://studio3t.com/) or [NoSQLBooster](https://nosqlbooster.com/) GUI

---

****7-2: Explore $eq, $ne, $gt, $lt, $gte, $lte Operator****

Operators are always used inside `{}`.

- `$eq` → equality
- `$ne` → not equal
- `$gt` → greater than
- `$gte` → greater than equal
- `$lt` → less than
- `$lte` → less than equal

---

****7-3: Explore $in, $nin, Nested Condition****

- `$in` → returns only the fields that have the values provided in the array.

```jsx
// syntax
{ field: { $in: [value1, value2, ... value10 ] } } 

// example
db.practice.find({ age: { $in: [18, 23] } } )
```

- `$nin` → opposite of `$in`
    - returns only the fields that do not have the values provided in the array.
    - or the field doesn’t exist.
- [implicit and](https://www.mongodb.com/docs/manual/reference/operator/query/and/): MongoDB provides an implicit `AND` operation when specifying a comma-separated list of expressions.
- Nested condition:

```jsx
db.practice
    .find({
        gender: "Female",
        age: { $nin: [18, 23, 33, 46, 30] }, 
        interests: { $in: ["Gaming", "Cooking"], }
    })
    .project({
        _id: 0,
        gender: 1,
        age: 1,
        interests: 1
    })
```

This is also an example of implicit `$and`. Cause we are using commas to separate the conditions.

---

****7-4: Explore $and, $or, Implicit vs explicit and****

- `$and` → used to nest condition. Returns the fields that satisfy all the conditions.

```jsx
.find({
        $and: [
            { gender: "Female" },
            { age: { $lt: 30 } },
            { "skills.name": "JAVASCRIPT" }
        ]
    })
```

- `$or` → opposite of `$and`. Returns the fields that satisfy any condition.

```jsx
.find({
        $or: [
            { gender: "Female" },
            { age: { $lt: 30 } },
						{ "skills.name": { $in: ["JAVASCRIPT", "PYTHON"] } }
        ]
    })
```

Implicit vs Explicit `and`

Implicit can’t be used for the same field. Explicit and is used for it.

```jsx
// Implicit `and` gives bug
find({
    age: { $gt: 15 },
    age: { $ne: 18 },
})

// Explicit `and` corrects it
find({
    $and: [
        { age: { $ne: 18 } },
        { age: { $gt: 15 } }
    ]
})
```

---

****7-5: Explore $exists, $type, $size operator****

- `$exists` → checks if a field exists in a document.
- `$type` → checks the data type of a field.
- `$size` → checks the length of the array. Size means no of elements on an array.

---

****7-6: Explore $all, $elemMatch Operator Part-1****

Array query operators

- `$all` → run on a property with an array value. Returns all the docs that have all the values passed on to the operator `{ <field>: { $all: [ <value1>, <value2> ... ] } }`

```jsx
find({
    interests: { $all: ["Gaming", "Cooking", "Reading"] }
})

// using `$and` 
find({
    $and: [
        { interests: "Gaming" },
        { interests: "Reading" },
        { interests: "Cooking" }
    ]
})
```

Though `$and` can also do the work, using `$all` is more convenient and easier.

Query with specifying the index of an array 👇

```jsx
// finds all the arrays where the first element is "Gardening"
find({
    "interests.0": "Gardening"
})
```

- `$elemMatch` → finds documents that have an array field with at least one element that meets a specific condition. It helps you search for documents where multiple conditions must be met by the same element in an array.

```jsx
// runs on an array of objects.
// returns the documents that have {name: "JAVA", level: "Intermediate"} this element
// in the array
find({
    skills: {
        $elemMatch: {
            name: "JAVA",
            level: "Intermidiate"
        }
    }
})
```

---

****7-7: Explore $set, $addToSet, $push operator (Update)****

- `$set` → replaces the value of a field with the given value
    - used when needed to add a new field in the document
    - used to change the value of a field
    - thumb rule: use it for only primitive types. Cause `$set` replaces the whole value, it’s a **field update operator**.
- `$addToSet` → adds a value to an array if it is not present.

  use it with `$each` modifier to add each value to an array. It will not add the values that are already present in the array

- `$push` → pushes a value to an array.
  It can cause duplication. It can also be used with `$each` for the same purpose, to push multiple values to an array.

---

****7-8: Explore $unset, $pop, $pull, $pullALL (Delete)****

- `$unset` → delete a field.
- `$pop` → removes first(1)/last(-1) element of array.
- `$pull` → removes single or multiple specific values from an array.
- `$pullAll` → removes all the elements that match the specific values

```jsx
{ $pullAll: { <field1>: [ <value1>, <value2> ... ], ... } }
```

---

****7-9: Explore deleteOne, deleteMany, dropCollection, createCollection****

- `deleteOne`
- `deleteMany`
- `dropCollection`
- `createCollection`

---

****7-10: Explore $inc, $min, How to explore documents****

- `$inc` → increments the field by a specific value
- `$min` → increments the field by a specific value, if the specified value is less than the current field value
- `$rename` → updates the key of an existing field.