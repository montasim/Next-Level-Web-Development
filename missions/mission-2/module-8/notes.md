<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=580&height=40&lines=MISSION 1: BE A TYPESCRIPT TECHNOCRAT" alt="MISSION 1: BE A TYPESCRIPT TECHNOCRAT" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=680&height=21&lines=MODULE 8: MONGODB AGGREGATION FRAMEWORK AND INDEXING" alt="MODULE 8: MONGODB AGGREGATION FRAMEWORK AND INDEXING" />

<hr/>

<br/>

**8-1: What is MongoDB aggregation (সমষ্টি)? Why is it powerful?**

> The collecting of units or parts into a mass or whole.
>

Aggregation is a powerful framework that allows you to process and analyze data in the database. It provides a way to perform complex operations on collections and documents, such as grouping, filtering, transforming, and calculating aggregated results. Aggregation pipelines are the primary mechanism for performing these operations.

An aggregation pipeline consists of multiple stages, where each stage performs a specific operation on the input data and passes the transformed data to the next stage. The output of the pipeline is the result of all the stages combined. Each stage can take the input documents and apply various operators and expressions to manipulate and shape the data.

In aggregation, the data flows from one stage two the next stage.

                      **Collection → Stage 1 → Stage 2 → … → Stage N → Final output**

```jsx
db.practice.aggregate([
    // Stage 1
    { $match: { gender: "Male", age: { $gt: 21 } } },

    // Stage 2
    { $project: { gender: 1, age: 1 } },

    // Stage 3
    { $sort: { age: -1 } }
])
```

---

****8-2: Explore $match, aggregate operator****

- `$match` → matches the documents based on the condition.

---

****8-3: Explore $addFields stage****

- `$addFields` → adds a field in the document
- `$rand` → generates a random value
- `$multiply` → multiplies a number
- `$floor` → like JS floor
- `$toInt` → converts to an integer
- `$out` → takes the docs returned by aggregation pipeline and writes them in a new collection

---

****8-4: Explore $group****

- `$merge` → writes the results of the aggregation pipeline in the specified collection.
  Must be called at the end stage of the pipeline.
- `$group` →

```jsx
aggregate([
  {
    $group:
      { _id: "$gender" }, // _id is used to identify distinct values of the property
  },
]) // 63 documents
```

The above code block will return all types of genders present in the documents. Like, male, female, polygender, transgender, etc.

In other words, it shows how many distinct/unique gender values are there in the documents.

```jsx
// will return all the unique combinations of age and gender together
$group: {
    _id: {
      age: "$age",
      gender: "$gender"
    }
	}, // 81 documents
```

---

****8-5: Explore $group more, accumulator, $sort, $limit****

Always use the `$limit` after `$sort`.

```jsx
aggregate([
    {
        $match: { age: { $gt: 18 } }
    },

		// group by distinct salary
		// the number of persons for each salary
    {
        $group: {
            _id: "$salary", // `$` means reference
            persons: { $sum: 1 }
        },
    },

    {
        $project: {
            _id: 0,
            salary: "$_id", // adding a new field `salary` with the value from `_id'
            persons: 1
        }
    }
])
```

---

****8-6: Explore Accumulator Operator using aggregation****

- `$_id: null` means `$group` will group all the documents in the collection