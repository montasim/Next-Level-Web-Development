<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=28&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=580&height=40&lines=MISSION 1: BE A TYPESCRIPT TECHNOCRAT" alt="MISSION 1: BE A TYPESCRIPT TECHNOCRAT" />

<img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=21&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=268&height=21&lines=MODULE 9: ASSIGNMENT 2" alt="MODULE 9: ASSIGNMENT 2" />

<hr/>

<br/>

[data.json](./data.json)

```tsx
// Example data
{
      "title": "Book 1",
      "author": ["Author 1", "Author 2"],
      "genre": "Mystery",
      "publicationYear": 2020,
      "publisher": { "name": "Publisher A", "location": "City A" },
      "reviews": [
         { "user": "User 1", "comment": "Great book!" },
         { "user": "User 2", "comment": "Interesting plot" }
      ],
      "rating": 4.5,
      "price": "90"
   }
  
```

## Tasks

**Task 1:** Create a MongoDB model with an interface and schema for a "Book" collection that stores fields like title, author, genre, publication year,  rating, price, and nested fields like "publisher" and "reviews". All the fields would be required.

**Task 2:** Implement a MongoDB query to find all books in the "Books" collection with a specific genre, such as "Fantasy"

**Task 3:** Implement a MongoDB query to find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.

**Task 4:** Create a static method method within the "Book" model or write a function using query to retrieve books from the "Books" collection that have a rating equal to or higher than 4. These books will be categorized as featured books. Additionally, introduce a new field named "featured" to the featured book objects. The value of this field should be "Popular" if the book's rating is greater than or equal to 4. For books with a rating exceeding 4.5, the value should be set to "BestSeller".

**Task 5:** In the existing book data, some books have their prices stored as strings instead of integers. To ensure consistent data representation, you are required to update the prices of all books from string format to integer format using a MongoDB update query. However, to limit the scope of the update and ensure data accuracy, the prices should be updated only for books published after 2020.

---

## Questions

**Question 1:** What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

**Question 2:** Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

**Question 3:** What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

**Question 4:** How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

**Question 5:** What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

---

## Extra Questions:

**Question 6:** Explain the logical operators "$and," "$or," "$not," and "$nor" in MongoDB queries. Provide examples to demonstrate their usage.

**Question 7:** What is the difference between the "explicit" and "implicit" "$and" operations in MongoDB? How does each behave when combining multiple conditions?

**Question 8:** How do you use the "$exists" operator in MongoDB to check if a field exists or not in a document? Provide an example.

**Question 9:** What is the purpose of the "$type" operator in MongoDB? How can you use it to match documents based on the data type of a field?

**Question 10:**

Explain the use of the "$size" operator in MongoDB. How does it work when querying documents based on the size of an array field?

<br/>

[Assignment 2 Solutions](https://github.com/montasim/level-2-assignment-2-mongoose)